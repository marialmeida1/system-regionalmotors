<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Propostas;
use App\Models\Anuncios;
use File;
use DB;

class propostasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $propostas = Propostas::all();

        $propostas = DB::table('propostas')
        ->join('anuncios','anuncios.id','propostas.anuncio_id')
        ->select('propostas.*', 'anuncios.titulo as anuncio', 'anuncios.id as id_anuncios')
        ->get();

$dadosPersonalizados = [];

foreach ($propostas as $proposta) {
    // Personalize os campos conforme necessário
    $dadosPersonalizados[] = [
        'id' => $proposta->id,
        'titulo' => $proposta->titulo,
        'id_anuncios' => $proposta->id_anuncios,
        'anuncio' => $proposta->anuncio,
        'nome' => $proposta->nome,
        'email' => $proposta->email,
        'ddd' => $proposta->ddd,
        'telefone' => $proposta->telefone,
        'mensagem' => $proposta->mensagem,
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
        'titulo' => 'required|string|max:100',
        'anuncio_id' => 'required|exists:anuncios,id',
        'nome' => 'required|string|max:100',
        'email' => 'required|email|max:50',
        'ddd' => 'required|string|max:5',
        'telefone' => 'required|string|max:20',
        'mensagem' => 'required|string',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'email' => 'O campo :attribute deve ser um endereço de e-mail válido.',
        'exists' => 'O :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Verificando se o anúncio existe pelo ID
        $anuncio = Anuncios::find($request->anuncio_id);
        if (!$anuncio) {
            return response()->json(['message' => 'O Anúncio selecionado não existe'], 404);
        }

        // Criando uma nova proposta
        $proposta = new Propostas;
        $proposta->titulo = $request->titulo;
        $proposta->anuncio_id = $request->anuncio_id;
        $proposta->nome = $request->nome;
        $proposta->email = $request->email;
        $proposta->ddd = $request->ddd;
        $proposta->telefone = $request->telefone;
        $proposta->mensagem = $request->mensagem;
        $proposta->save();

        // Retornando a proposta criada
        return response()->json($proposta, 201);
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
        $proposta = Propostas::find($id);
        if(!$proposta){
            return response(['message'=>'Proposta não encontrada'], 404);
        }
        $anuncio = Anuncios::find($proposta->anuncio_id);
            // Personalize os campos conforme necessário
            $dadosPersonalizados[] = [
                'id' => $proposta->id,
                'titulo' => $proposta->titulo,
                'id_anuncios' => $proposta->anuncio_id,
                'anuncio' => $anuncio->titulo,
                'nome' => $proposta->nome,
                'email' => $proposta->email,
                'ddd' => $proposta->ddd,
                'telefone' => $proposta->telefone,
                'mensagem' => $proposta->mensagem,
            ];
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
        'titulo' => 'required|string|max:100',
        'anuncio_id' => 'required|exists:anuncios,id',
        'nome' => 'required|string|max:100',
        'email' => 'required|email|max:50',
        'ddd' => 'required|string|max:5',
        'telefone' => 'required|string|max:20',
        'mensagem' => 'required|string',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'email' => 'O campo :attribute deve ser um endereço de e-mail válido.',
        'exists' => 'O :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Verificando se o anúncio existe pelo ID
        $anuncio = Anuncios::find($request->anuncio_id);
        if (!$anuncio) {
            return response()->json(['message' => 'O Anúncio selecionado não existe'], 404);
        }

        // Verificando se a proposta existe pelo ID
        $proposta = Propostas::find($id);
        if (!$proposta) {
            return response()->json(['message' => 'Proposta não encontrada'], 404);
        }

        // Atualizando os campos da proposta
        $proposta->titulo = $request->titulo;
        $proposta->anuncio_id = $request->anuncio_id;
        $proposta->nome = $request->nome;
        $proposta->email = $request->email;
        $proposta->ddd = $request->ddd;
        $proposta->telefone = $request->telefone;
        $proposta->mensagem = $request->mensagem;
        $proposta->save();

        // Retornando a proposta atualizada
        return response()->json($proposta, 200);
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
        Propostas::destroy($id);
        return response()->json("Proposta eliminada com sucesso!");
    }
}
