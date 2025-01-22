<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Planos;
use File;
use DB;
use App\Models\HistoricoAnunciantes;

class planosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $planos = Planos::all();

        return $planos;
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
        'nome' => 'required|string|max:100',
        'activo' => 'required|boolean',
        'quantidade_anuncios' => 'required|integer',
        'valor' => 'required',
        'tipo' => 'required|string',
        'anuncio_destaque' => 'required|boolean',
        'quantidade_anuncio_destaque' => 'required|integer',
        'quantidade_anuncio_vitrine' => 'required|integer',
        'dias_publicacao' => 'required|integer',
        'texto_plano' => 'required|string|max:200',
        'quantidade_fotos' => 'required|integer',
        'link_pagamento' => 'nullable|string|max:100',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'integer' => 'O campo :attribute deve ser um número inteiro.',
        'boolean' => 'O campo :attribute deve ser verdadeiro ou falso.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Criando um novo plano
        $plano = new Planos;
        $plano->nome = $request->nome;
        $plano->activo = $request->activo;
        $plano->quantidade_anuncios = $request->quantidade_anuncios;
        $plano->valor = $request->valor;
        $plano->tipo = $request->tipo;
        $plano->anuncio_destaque = $request->anuncio_destaque;
        $plano->quantidade_anuncio_destaque = $request->quantidade_anuncio_destaque;
        $plano->quantidade_anuncio_vitrine = $request->quantidade_anuncio_vitrine;
        $plano->dias_publicacao = $request->dias_publicacao;
        $plano->texto_plano = $request->texto_plano;
        $plano->quantidade_fotos = $request->quantidade_fotos;
        $plano->link_pagamento = $request->link_pagamento;

        $plano->save();

        // Retornando a resposta de sucesso
        return response()->json($plano, 201);
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
        $planos = Planos::find($id);
        if(!$planos){
            return response(['message'=>'Plano não encontrado'], 404);
        }

        return $planos;
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
        'nome' => 'required|string|max:100',
        'activo' => 'required|boolean',
        'quantidade_anuncios' => 'required|integer',
        'valor' => 'required',
        'tipo' => 'required|string',
        'anuncio_destaque' => 'required|boolean',
        'quantidade_anuncio_destaque' => 'required|integer',
        'quantidade_anuncio_vitrine' => 'required|integer',
        'dias_publicacao' => 'required|integer',
        'texto_plano' => 'required|string|max:200',
        'quantidade_fotos' => 'required|integer',
        'link_pagamento' => 'nullable|string|max:100',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'integer' => 'O campo :attribute deve ser um número inteiro.',
        'boolean' => 'O campo :attribute deve ser verdadeiro ou falso.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Verificando se o plano existe pelo ID
        $plano = Planos::find($id);
        if (!$plano) {
            return response()->json(['message' => 'Plano não encontrado'], 404);
        }

        // Atualizando os campos do plano
        $plano->nome = $request->nome;
        $plano->activo = $request->activo;
        $plano->quantidade_anuncios = $request->quantidade_anuncios;
        $plano->valor = $request->valor;
        $plano->tipo = $request->tipo;
        $plano->anuncio_destaque = $request->anuncio_destaque;
        $plano->quantidade_anuncio_destaque = $request->quantidade_anuncio_destaque;
        $plano->quantidade_anuncio_vitrine = $request->quantidade_anuncio_vitrine;
        $plano->dias_publicacao = $request->dias_publicacao;
        $plano->texto_plano = $request->texto_plano;
        $plano->quantidade_fotos = $request->quantidade_fotos;
        $plano->link_pagamento = $request->link_pagamento;

        $plano->save();

        // Retornando a resposta de sucesso
        return response()->json(['message' => 'Plano atualizado com sucesso'], 200);
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
        try {
            // Verifica se o registro existe
            $plano = Planos::find($id);

            if (!$plano) {
                return response()->json(['message' => 'Plano não encontrado!'], 404);
            }

            // Tenta excluir o registro
            $plano->delete();

            // Retorna uma resposta de sucesso
            return response()->json(['message' => 'Plano eliminado com sucesso!'], 200);

        } catch (\Illuminate\Database\QueryException $e) {
            // Captura exceções específicas de consulta do banco de dados

            // Verifica se é uma violação de chave estrangeira
            if ($e->getCode() == '23000') {
                return response()->json([
                    'message' => 'Não é possível eliminar o plano porque ele está sendo referenciado em outros registros. Por favor, verifique as dependências e tente novamente.'
                ], 409); // 409 Conflict
            }

            // Caso seja outro erro de banco de dados
            return response()->json([
                'message' => 'Erro ao eliminar o plano!',
                'error' => $e->getMessage()
            ], 500);

        } catch (\Exception $e) {
            // Captura e trata outras exceções
            return response()->json([
                'message' => 'Ocorreu um erro inesperado ao tentar eliminar o plano.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


}
