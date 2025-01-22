<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Cidades;
use File;
use DB;

class cidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //
        $query = DB::table('cidades')
            ->join('regioes', 'regioes.id', 'cidades.regiao_id')
            ->join('estados', 'estados.id', 'regioes.estado_id')
            ->select('cidades.*', 'regioes.regiao',
            'regioes.id as id_regiao', 'regioes.regiao',
            'estados.id as id_estado', 'estados.estado');
            
        // Adiciona os filtros conforme os parâmetros passados
        if (request('regiao')) {
            $query->where('regioes.regiao', 'LIKE', '%' . request('regiao') . '%');
        }
        if (request('regiao_id')) {
            $query->where('cidades.regiao_id', 'LIKE', '%' . request('regiao_id') . '%');
        }
        if (request('id_estado')) {
            $query->where('estados.id', 'LIKE', '%' . request('id_estado') . '%');
        }
        if (request('cidade')) {
            $query->where('cidades.cidade', 'LIKE', '%' . request('cidade') . '%');
        }
        if (request('estado')) {
            $query->where('estados.estado', 'LIKE', '%' . request('estado') . '%');
        }

        $cidades = $query->get();
        $dadosPersonalizados = [];

        foreach ($cidades as $cidade) {
            // Personalize os campos conforme necessário
            $dadosPersonalizados[] = [
                'id' => $cidade->id,
                'regiao' => $cidade->regiao,
                'cidade' => $cidade->cidade,
                'regiao_id' => $cidade->regiao_id,
                'nome_regiao' => $cidade->regiao,
                'id_estado' => $cidade->id_estado,
                'nome_estado' => $cidade->estado,
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
        'regiao_id' => 'required|exists:regioes,id',
        'cidade' => 'required|string|max:255',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'exists' => 'A :attribute selecionada não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Criando uma nova cidade
        $cidade = new Cidades;
        $cidade->regiao_id = $request->regiao_id;
        $cidade->cidade = $request->cidade;

        $cidade->save();

        // Retornando a resposta de sucesso
        return response()->json(['message' => 'Cidade cadastrada com sucesso!'], 201);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response()->json(['message' => implode(', ', $errors)], 422);
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
        $cidade = Cidades::find($id);
        if (!$cidade) {
            return response(['message' => 'Cidades não encontrada!'], 404);
        }
        return $cidade;
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
        'regiao_id' => 'required|exists:regioes,id',
        'cidade' => 'required|string|max:255',
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

        // Buscando a cidade pelo ID
        $cidade = Cidades::find($id);
        if (!$cidade) {
            return response(['message' => 'Cidade não encontrada!'], 404);
        }

        // Atualizando os campos da cidade
        $cidade->regiao_id = $request->regiao_id;
        $cidade->cidade = $request->cidade;

        $cidade->save();

        // Retornando a resposta de sucesso
        return response(['message' => 'Cidade atualizada com sucesso!']);
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
        Cidades::destroy($id);
        return "Cidade Eliminada";
    }
}
