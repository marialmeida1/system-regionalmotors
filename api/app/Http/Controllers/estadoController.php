<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Estados;
use File;
use DB;

class estadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $query = DB::table('estados')
       ->select('estados.*')
       ->orderBy('estados.estado', 'asc');

   // Adiciona os filtros conforme os parâmetros passados
   /*
   if (request('estado')) {
       $query->where('estados.estado', 'LIKE', '%' . request('estado') . '%');
   }*/

   $estados = $query->get();
   // Processamento dos dados para personalizar a resposta
   $dadosPersonalizados = [];

   foreach ($estados as $estado) {
       $dadosPersonalizados[] = [
           'id' => $estado->id,
           'uf' => $estado->uf,
           'estado' => $estado->estado,
       ];
    }
    return $dadosPersonalizados;
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
        'uf' => 'required|string|max:4',
        'estado' => 'required|string|max:100',
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

        // Criando um novo estado
        $estado = new Estados;
        $estado->uf = $request->uf;
        $estado->estado = $request->estado;

        $estado->save();

        // Retornando a resposta de sucesso
        return response()->json(['message' => 'Estado cadastrado com sucesso!'], 201);
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
        $estados = Estados::find($id);
        if(!$estados){
            return response(['message'=>'Estado não encontrado'], 404);
        }
        return $estados;
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
        'uf' => 'required|string|max:4',
        'estado' => 'required|string|max:100',
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

        // Buscando o estado pelo ID
        $estado = Estados::find($id);
        if (!$estado) {
            return response(['message' => 'Estado não encontrado'], 404);
        }

        // Atualizando os campos do estado
        $estado->uf = $request->uf;
        $estado->estado = $request->estado;

        $estado->save();

        // Retornando a mensagem de sucesso
        return "Estado atualizado com sucesso";
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
        Estados::destroy($id);
        return "Estado Eliminado";
    }
}
