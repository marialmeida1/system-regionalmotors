<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Transmissao;

class transmissaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $transmissao = Transmissao::all();
        return $transmissao;
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
    // Validando os dados recebidos
    $validatedData = $request->validate([
        'transmissao' => 'required|string|max:100',
        'descricao' => 'required|string|max:100',
    ]);

    // Criando uma nova instância de Transmissao
    $transmissao = new Transmissao;
    $transmissao->transmissao = $validatedData['transmissao'];
    $transmissao->descricao = $validatedData['descricao'];
    $transmissao->save();

    // Retornando a transmissao criada
    return $transmissao;
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
        $transmissao = Transmissao::find($id);
        if(!$transmissao){
            return response(['message'=>'transmissao não encontrado'], 404);
        }
        return $transmissao;
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
    // Validando os dados recebidos
    $validatedData = $request->validate([
        'transmissao' => 'required|string|max:100',
        'descricao' => 'required|string|max:100',
    ]);

    // Buscando a transmissao pelo ID
    $transmissao = Transmissao::find($id);
    if (!$transmissao) {
        return response(['message' => 'Transmissão não encontrada'], 404);
    }

    // Atualizando os dados da transmissao
    $transmissao->transmissao = $validatedData['transmissao'];
    $transmissao->descricao = $validatedData['descricao'];
    $transmissao->save();

    // Retornando a transmissao atualizada
    return $transmissao;
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
        Transmissao::destroy($id);
    }
}
