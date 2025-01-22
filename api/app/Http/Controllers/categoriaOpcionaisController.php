<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\CategoriaOpcionais;

class categoriaOpcionaisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //$catgoriasOpcionais = CategoriaOpcionais::all();
        $catgoriasOpcionais = CategoriaOpcionais::orderBy('nome', 'asc')->get();
        return $catgoriasOpcionais;
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
        'nome' => 'required|string|max:50',
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

        // Criando uma nova categoria opcional
        $categoriaOpcionais = new CategoriaOpcionais;
        $categoriaOpcionais->nome = $request->nome;
        $categoriaOpcionais->save();

        // Retornando a resposta de sucesso
        return response()->json($categoriaOpcionais, 201);
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
        $catgoriasOpcionais = CategoriaOpcionais::find($id);
        if(!$catgoriasOpcionais){
            return response(['message'=>'Categoria Opcionais não encontrada'], 404);
        }
        return $catgoriasOpcionais;
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
        'nome' => 'required|string|max:50',
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

        // Encontrando a categoria opcional existente
        $categoriaOpcionais = CategoriaOpcionais::find($id);
        if (!$categoriaOpcionais) {
            return response()->json(['message' => 'Categoria Opcionais não encontrada'], 404);
        }

        // Atualizando a categoria opcional
        $categoriaOpcionais->nome = $request->nome;
        $categoriaOpcionais->save();

        // Retornando a resposta de sucesso
        return response()->json($categoriaOpcionais, 200);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response()->json(['message' => implode(', ', $errors)], 422);
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
        CategoriaOpcionais::destroy($id);
        return response(['message'=>'Categoria Opcionais Eliminado com sucesso'], 200);
    }
}
