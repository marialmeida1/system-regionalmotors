<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Confortos;
use File;
use DB;

class confortoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $conforto = Confortos::all();
        return $conforto;
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
            'conforto' => 'required|string|max:100',
            'descricao' => 'required|string|max:100',
        ];

        // Definindo as mensagens personalizadas
        $messages = [
            'required' => 'O campo :attribute é obrigatório.',
            'string' => 'O campo :attribute deve ser uma string.',
            'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        ];

        try {
            // Executando a validação
            $request->validate($rules, $messages);

            // Criando um novo conforto
            $conforto = new Confortos;
            $conforto->conforto = $request->conforto;
            $conforto->descricao = $request->descricao;

            $conforto->save();

            // Retornando a mensagem de sucesso
            return "Conforto cadastrado com sucesso";
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
        $conforto = Confortos::find($id);
        if(!$conforto){
            return response(['message'=>'conforto não encontrada'], 404);
        }

        return $conforto;
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
        'conforto' => 'required|string|max:100',
        'descricao' => 'required|string|max:100',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Buscando o conforto pelo ID
        $conforto = Confortos::find($id);
        if (!$conforto) {
            return response(['message' => 'Conforto não encontrado'], 404);
        }

        // Atualizando os campos do conforto
        $conforto->conforto = $request->conforto;
        $conforto->descricao = $request->descricao;

        $conforto->save();

        // Retornando a mensagem de sucesso
        return "Conforto editado com sucesso";
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
        Confortos::destroy($id);
        return "Conforto Eliminado com sucesso!";
    }
}
