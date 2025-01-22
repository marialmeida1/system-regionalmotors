<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Regioes;
use File;
use DB;

class regiaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $query = DB::table('regioes')
            ->join('estados', 'estados.id', 'regioes.estado_id')
            ->select('regioes.*', 'estados.estado', 'estados.id as id_estado');
        // Adiciona os filtros conforme os parâmetros passados
        if (request('estado')) {
            $query->where('estados.estado', 'LIKE', '%' . request('estado') . '%');
        }
        if (request('regiao')) {
            $query->where('regioes.regiao', 'LIKE', '%' . request('regiao') . '%');
        }
        if (request('estado_id')) {
            $query->where('regioes.estado_id', 'LIKE', '%' . request('estado_id') . '%');
        }

        $regiaos = $query->get();
        $dadosPersonalizados = [];

        foreach ($regiaos as $regiao) {
            // Personalize os campos conforme necessário
            $dadosPersonalizados[] = [
                'id' => $regiao->id,
                'estado' => $regiao->estado,
                'regiao' => $regiao->regiao,
                'estado_id' => $regiao->estado_id,
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
        'estado_id' => 'required|exists:estados,id',
        'regiao' => 'required|string|max:255',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'exists' => 'O :attribute selecionado não existe.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute não pode ter mais de :max caracteres.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Criando uma nova região
        $regiao = new Regioes;
        $regiao->estado_id = $request->estado_id;
        $regiao->regiao = $request->regiao;
        $regiao->save();

        // Retornando uma resposta de sucesso
        return response(['message' => 'Região cadastrada com sucesso!'], 200);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response(['message' => implode(', ', $errors)], 422);
    } catch (\Exception $e) {
        // Capturando outras exceções não tratadas
        return response(['message' => $e->getMessage()], 500);
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
        $regiao = Regioes::find($id);
        if (!$regiao) {
            return response(['message' => 'Região não encontrado!'], 404);
        }
        return $regiao;
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
        'estado_id' => 'required|exists:estados,id',
        'regiao' => 'required|string|max:255',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'exists' => 'O :attribute selecionado não existe.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute não pode ter mais de :max caracteres.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Verificando se a região existe pelo ID
        $regiao = Regioes::find($id);
        if (!$regiao) {
            return response(['message' => 'Região não encontrada!'], 404);
        }

        // Atualizando os dados da região
        $regiao->estado_id = $request->estado_id;
        $regiao->regiao = $request->regiao;
        $regiao->save();

        // Retornando uma resposta de sucesso
        return response(['message' => 'Região atualizada com sucesso!'], 200);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response(['message' => implode(', ', $errors)], 422);
    } catch (\Exception $e) {
        // Capturando outras exceções não tratadas
        return response(['message' => $e->getMessage()], 500);
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
        Regioes::destroy($id);
        return "Região Eliminada";
    }
}
