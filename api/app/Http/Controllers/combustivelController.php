<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Combustivel;

class combustivelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $combustivel = Combustivel::all();
        return $combustivel;
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
        'combustivel' => 'required|string|max:100',
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

        // Criando um novo combustível
        $combustivel = new Combustivel;
        $combustivel->combustivel = $request->combustivel;
        $combustivel->descricao = $request->descricao;

        $combustivel->save();

        // Retornando o combustível criado
        return response()->json($combustivel, 201);
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
        $combustivel = Combustivel::find($id);
        if(!$combustivel){
            return response(['message'=>'combustivel não encontrado'], 404);
        }
        return $combustivel;
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
        'combustivel' => 'required|string|max:100',
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

        // Buscando o combustível pelo ID
        $combustivel = Combustivel::find($id);
        if (!$combustivel) {
            return response(['message' => 'Combustível não encontrado'], 404);
        }

        // Atualizando os campos do combustível
        $combustivel->combustivel = $request->combustivel;
        $combustivel->descricao = $request->descricao;

        $combustivel->save();

        // Retornando o combustível atualizado
        return response()->json($combustivel);
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
        Combustivel::destroy($id);
    }
}
