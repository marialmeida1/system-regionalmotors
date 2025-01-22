<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Cor;


class corController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $cor = Cor::orderBy('cor', 'asc')->get();
        return $cor;
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
        'cor' => 'required|string|max:100',
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

        // Criando uma nova cor
        $cor = new Cor;
        $cor->cor = $request->cor;
        $cor->descricao = $request->descricao;

        $cor->save();

        // Retornando a cor criada
        return $cor;
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
        $cor = Cor::find($id);
        if(!$cor){
            return response(['message'=>'Tipo de veiculo não encontrado'], 404);
        }
        return $cor;
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
        'cor' => 'required|string|max:100',
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

        // Buscando a cor pelo ID
        $cor = Cor::find($id);
        if (!$cor) {
            return response(['message' => 'Cor não encontrada'], 404);
        }

        // Atualizando os campos da cor
        $cor->cor = $request->cor;
        $cor->descricao = $request->descricao;

        $cor->save();

        // Retornando a cor atualizada
        return $cor;
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
        Cor::destroy($id);

    }
}
