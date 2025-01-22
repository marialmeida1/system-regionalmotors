<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Tecnologia;
use Illuminate\Support\Facades\DB;

class tecnologiaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $query = DB::table('tecnologias')
       ->select('tecnologias.*')
       ->orderBy('tecnologias.tecnologia', 'asc');

   // Adiciona os filtros conforme os parâmetros passados
   /*
   if (request('tecnologia')) {
       $query->where('tecnologias.tecnologia', 'LIKE', '%' . request('tecnologia') . '%');
   }*/

   $tecnologias = $query->get();
   // Processamento dos dados para personalizar a resposta
   $dadosPersonalizados = [];

   foreach ($tecnologias as $tecnologia) {
       $dadosPersonalizados[] = [
           'id' => $tecnologia->id,
           'tecnologia' => $tecnologia->tecnologia,
           'descricao' => $tecnologia->descricao,
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
        'tecnologia' => 'required|string|max:100',
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

        // Criando uma nova tecnologia
        $tecnologia = new Tecnologia;
        $tecnologia->tecnologia = $request->tecnologia;
        $tecnologia->descricao = $request->descricao;
        $tecnologia->save();

        // Retornando uma resposta de sucesso
        return response(['message' => 'Tecnologia cadastrada com sucesso!'], 200);
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
        $tecnologia = Tecnologia::find($id);
        if(!$tecnologia){
            return response(['message'=>'Tecnologia não encontrado'], 404);
        }
        return $tecnologia;
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
        'tecnologia' => 'required|string|max:100',
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

        // Verificando se a tecnologia existe pelo ID
        $tecnologia = Tecnologia::find($id);
        if (!$tecnologia) {
            return response(['message' => 'Tecnologia não encontrada!'], 404);
        }

        // Atualizando os dados da tecnologia
        $tecnologia->tecnologia = $request->tecnologia;
        $tecnologia->descricao = $request->descricao;
        $tecnologia->save();

        // Retornando uma resposta de sucesso
        return response(['message' => 'Tecnologia atualizada com sucesso!'], 200);
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
        Tecnologia::destroy($id);
    }
}
