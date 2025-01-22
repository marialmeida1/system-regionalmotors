<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Marcas;
use App\Models\TiposVeiculos;
use File;
use DB;

class marcasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
{
    // Começa a construir a consulta ao banco de dados
    $query = DB::table('marcas')
        ->join('tipos_veiculos', 'tipos_veiculos.id', '=', 'marcas.tipo_veiculo_id')
        ->select('marcas.*', 'tipos_veiculos.id as tipo_veiculo_id', 'tipos_veiculos.tipo_veiculo')
        ->orderByRaw('CASE WHEN marcas.principal = 1 THEN 0 ELSE 1 END')
        ->orderBy('marcas.nome_marca', 'asc');

    // Adiciona os filtros conforme os parâmetros passados
    if ($request->has('nome_marca')) {
        $query->where('marcas.nome_marca', 'LIKE', '%' . $request->nome_marca . '%');
    }

    if ($request->has('tipo_veiculo_id')) {
        $query->where('marcas.tipo_veiculo_id', $request->tipo_veiculo_id);
    }

    if ($request->has('tipo_veiculo')) {
        $query->where('tipos_veiculos.tipo_veiculo', 'LIKE', '%' . $request->tipo_veiculo . '%');
    }

    // Executa a consulta
    $marcas = $query->get();

    // Processamento dos dados para personalizar a resposta
    $dadosPersonalizados = $marcas->map(function ($marca) {
        return [
            'id' => $marca->id,
            'tipo_veiculo_id' => $marca->tipo_veiculo_id,
            'tipo_veiculo' => $marca->tipo_veiculo,
            'nome_marca' => $marca->nome_marca,
            'descricao' => $marca->descricao ?? 'N/A', // Assume descrição opcional
        ];
    });

    // Retorna a resposta JSON com os dados personalizados
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
        'nome_marca' => 'required|string|max:100',
        'tipo_veiculo_id' => 'required|exists:tipos_veiculos,id',
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

        // Criando uma nova marca
        $marca = new Marcas;
        $marca->nome_marca = $request->nome_marca;
        $marca->tipo_veiculo_id = $request->tipo_veiculo_id;
        $marca->descricao = $request->descricao;

        $marca->save();

        // Retornando a mensagem de sucesso
        return response()->json(['message' => 'Marca cadastrada com sucesso'], 200);
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
        $marca = Marcas::find($id);
        if(!$marca){
            return response(['message'=>'Marca não encontrada'], 404);
        }

        return $marca;
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
        'nome_marca' => 'required|string|max:100',
        'tipo_veiculo_id' => 'required|exists:tipos_veiculos,id',
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

        // Buscando a marca pelo ID
        $marca = Marcas::find($id);
        if (!$marca) {
            return response(['message' => 'Marca não encontrada'], 404);
        }

        // Atualizando os campos da marca
        $marca->nome_marca = $request->nome_marca;
        $marca->tipo_veiculo_id = $request->tipo_veiculo_id;
        $marca->descricao = $request->descricao;

        $marca->save();

        // Retornando a mensagem de sucesso
        return response()->json(['message' => 'Marca atualizada com sucesso'], 200);
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
        Marcas::destroy($id);
        return response(['message'=> 'Marca Eliminada com sucesso!'], 200);
    }
}
