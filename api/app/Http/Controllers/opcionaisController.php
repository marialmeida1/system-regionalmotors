<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Opcionais;
use App\Models\CategoriaOpcionais;
use File;
use DB;

class opcionaisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
{
    // Inicia a construção da consulta ao banco de dados
    $query = DB::table('opcionais')
        ->join('categoria_opcionais', 'categoria_opcionais.id', '=', 'opcionais.categoria_opcional_id')
        ->select('opcionais.*', 'categoria_opcionais.nome as nome_categoria', 'categoria_opcionais.id as id_categorias')
        ->orderBy('opcionais.nome', 'asc'); // Corrigido para especificar que 'nome' é de 'opcionais'

    // Filtro dinâmico para 'nome_categoria' (caso exista no request)
    if ($nomeCategoria = request('nome_categoria')) {
        $query->where('categoria_opcionais.nome', 'LIKE', '%' . $nomeCategoria . '%');
    }

    // Executa a consulta
    $opcionais = $query->get();
    $dadosPersonalizados = [];

    // Processamento dos dados para personalizar a resposta
    foreach ($opcionais as $opcional) {
        $dadosPersonalizados[] = [
            'id' => $opcional->id,
            'nome_categoria' => $opcional->nome_categoria,
            'categoria_opcional_id' => $opcional->id_categorias,
            'nome' => $opcional->nome,
            // Adicione mais campos conforme necessário
        ];
    }

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
        'categoria_opcional_id' => 'required|exists:categoria_opcionais,id',
        'nome' => 'required|string|max:50',
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

        // Verificando se a categoria opcional existe
        $categoriaOpcional = CategoriaOpcionais::find($request->categoria_opcional_id);
        if (!$categoriaOpcional) {
            return response()->json(['message' => 'A Categoria selecionada não existe'], 404);
        }

        // Criando um novo opcional
        $opcional = new Opcionais;
        $opcional->categoria_opcional_id = $request->categoria_opcional_id;
        $opcional->nome = $request->nome;

        $opcional->save();

        // Retornando a resposta de sucesso
        return response()->json($opcional, 201);
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
        $opcionais = Opcionais::find($id);
        if(!$opcionais){
            return response(['message'=>'Opcionais não encontrada'], 404);
        }
        $categoria_opcional = CategoriaOpcionais::find($opcionais->categoria_opcional_id);

        $dadosPersonalizados[] = [
            'id' => $opcionais->id,
            'categoria_opcional' => $categoria_opcional->nome,
            'nome' => $opcionais->nome,
        ];

        // Retorna a resposta JSON com os dados personalizados
        return response()->json($dadosPersonalizados);
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
        'categoria_opcional_id' => 'required|exists:categoria_opcionais,id',
        'nome' => 'required|string|max:50',
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

        // Verificando se o opcional existe pelo ID
        $opcional = Opcionais::find($id);
        if (!$opcional) {
            return response()->json(['message' => 'Opcional não encontrado'], 404);
        }

        // Verificando se a categoria opcional existe
        $categoriaOpcional = CategoriaOpcionais::find($request->categoria_opcional_id);
        if (!$categoriaOpcional) {
            return response()->json(['message' => 'A Categoria selecionada não existe'], 404);
        }

        // Atualizando os campos do opcional
        $opcional->categoria_opcional_id = $request->categoria_opcional_id;
        $opcional->nome = $request->nome;

        $opcional->save();

        // Retornando a resposta de sucesso
        return response()->json(['message' => 'Opcional atualizado com sucesso'], 200);
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
        Opcionais::destroy($id);
        return response(['message'=> 'Opcional Eliminado com sucesso!'], 200);
    }
}
