<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Segurancas;
use File;
use DB;

class segurancaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $seguranca = Segurancas::all();
        return $seguranca;
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
        'seguranca' => 'required|string|max:100',
        'descricao' => 'required|string|max:100',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute não pode ter mais de :max caracteres.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Criando um novo item de segurança
        $seguranca = new Segurancas;
        $seguranca->seguranca = $request->seguranca;
        $seguranca->descricao = $request->descricao;
        $seguranca->save();

        // Retornando uma resposta de sucesso
        return response(['message' => 'Segurança cadastrada com sucesso!'], 200);
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
        $seguranca = Segurancas::find($id);
        if(!$seguranca){
            return response(['message'=>'seguranca não encontrada'], 404);
        }

        return $seguranca;
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
        'seguranca' => 'required|string|max:100',
        'descricao' => 'required|string|max:100',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute não pode ter mais de :max caracteres.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Verificando se a segurança existe pelo ID
        $seguranca = Segurancas::find($id);
        if (!$seguranca) {
            return response(['message' => 'Segurança não encontrada!'], 404);
        }

        // Atualizando os dados da segurança
        $seguranca->seguranca = $request->seguranca;
        $seguranca->descricao = $request->descricao;
        $seguranca->save();

        // Retornando uma resposta de sucesso
        return response(['message' => 'Segurança atualizada com sucesso!'], 200);
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
        Segurancas::destroy($id);
        return "Segurança Eliminada com sucesso!";
    }
}
