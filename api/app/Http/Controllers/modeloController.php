<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Modelos;
use App\Models\Marcas;
use App\Models\TiposVeiculos;
use File;
use DB;

class modeloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $query = DB::table('modelos')
                ->join('marcas','marcas.id','modelos.marca_id')
                ->join('tipos_veiculos','tipos_veiculos.id','marcas.tipo_veiculo_id')
                ->select('modelos.*', 'marcas.nome_marca',
                'marcas.id as id_marca','nome_marca',
                'tipos_veiculos.id as tipo_veiculo_id',
                'tipos_veiculos.tipo_veiculo')
                ->orderBy('modelos.nome_modelo', 'asc');
          // Adiciona os filtros conforme os parâmetros passados
        if ($request->has('nome_marca')) {
            $query->where('marcas.nome_marca', 'LIKE', '%' . $request->nome_marca . '%');
        }
        if ($request->has('nome_tipo_veiculo')) {
            $query->where('tipos_veiculos.tipo_veiculo', 'LIKE', '%' . $request->nome_tipo_veiculo . '%');
        }
        if ($request->has('nome_modelo')) {
            $query->where('modelos.nome_modelo', 'LIKE', '%' . $request->nome_modelo . '%');
        }

        $modelos = $query->get();
        $dadosPersonalizados = [];

        foreach ($modelos as $modelo) {


            // Personalize os campos conforme necessário
            $dadosPersonalizados[] = [
                'id' => $modelo->id,
                'nome_modelo' => $modelo->nome_modelo,
                'descricaoS' => $modelo->descricao,
                'id_marca' => $modelo->id_marca,
                'nome_marca' => $modelo->nome_marca,
                'id_tipo_veiculo' => $modelo->tipo_veiculo_id,
                'nome_tipo_veiculo' => $modelo->tipo_veiculo,
            ];
        }
        return response()->json($dadosPersonalizados);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    // Definindo as regras de validação
    $rules = [
        'nome_modelo' => 'required|string|max:100',
        'marca_id' => 'required|exists:marcas,id',
        'descricao' => 'nullable|string|max:100',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'exists' => 'O :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Criando um novo modelo
        $modelo = new Modelos;
        $modelo->nome_modelo = $request->nome_modelo;
        $modelo->marca_id = $request->marca_id;
        $modelo->descricao = $request->descricao;

        $modelo->save();

        // Retornando a mensagem de sucesso
        return response()->json(['message' => 'Modelo cadastrado com sucesso'], 200);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response()->json(['message' => implode(', ', $errors)], 422);
    } catch (\Exception $e) {
        // Capturando outras exceções não tratadas
        return response()->json(['message' => $e->getMessage()], 500);
    }
}


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $modelo = Modelos::find($id);
        if(!$modelo){
            return response(['message'=>'Modelo não encontrado'], 404);
        }

        $marca = Marcas::find($modelo->marca_id);
        if(!$marca){
            return response(['message'=>'marca não encontrada'], 404);
        }

        $tipo_veiculo = TiposVeiculos::find($marca->tipo_veiculo_id);
        if(!$tipo_veiculo){
            return response(['message'=>'veiculo não encontrada'], 404);
        }

        $array = [];

        $array = [
            'id' => $modelo->id,
            'nome_modelo' => $modelo->nome_modelo,
            'marca_id' => $modelo->marca_id,
            'descricao' => $modelo->descricao,
            'created_at' => $modelo->created_at,
            'updated_at' => $modelo->updated_at,
            'id_marca' => $marca->id,
            'nome_marca' => $marca->nome_marca,
            'id_tipo_veiculo' => $tipo_veiculo->id,
            'nome_tipo_veiculo' => $tipo_veiculo->tipo_veiculo,
        ];

         return $array;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     public function update(Request $request, $id)
{
    // Definindo as regras de validação
    $rules = [
        'nome_modelo' => 'required|string|max:100',
        'marca_id' => 'required|exists:marcas,id',
        'descricao' => 'nullable|string|max:100',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'exists' => 'O :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Buscando o modelo pelo ID
        $modelo = Modelos::find($id);
        if (!$modelo) {
            return response(['message' => 'Modelo não encontrado'], 404);
        }

        // Verificando se a marca existe
        $marca = Marcas::find($request->marca_id);
        if (!$marca) {
            return response(['message' => 'Marca não encontrada'], 404);
        }

        // Atualizando os campos do modelo
        $modelo->nome_modelo = $request->nome_modelo;
        $modelo->marca_id = $request->marca_id;
        $modelo->descricao = $request->descricao;

        $modelo->save();

        // Retornando a mensagem de sucesso
        return response()->json(['message' => 'Modelo atualizado com sucesso'], 200);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response()->json(['message' => implode(', ', $errors)], 422);
    } catch (\Exception $e) {
        // Capturando outras exceções não tratadas
        return response()->json(['message' => $e->getMessage()], 500);
    }
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Modelos::destroy($id);
        return response(['message'=> 'Modelo Eliminado com sucesso!'], 200);
    }
}
