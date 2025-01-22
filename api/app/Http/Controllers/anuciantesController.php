<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Anunciantes;
use App\Models\Anuncios;
use App\Models\Marcas;
use App\Models\Modelos;
use App\Models\Combustivel;
use App\Models\Transmissao;
use App\Models\Categorias;
use App\Models\Cor;
use App\Models\Estados;
use App\Models\Regioes;
use App\Models\Cidades;
use App\Models\HistoricoAnunciantes;
use App\Models\PlanosAnunciantes;
use App\Models\User;
use File;
use DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Response;

class anuciantesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $anunciantes = Anunciantes::all();
        // Personalização dos campos da base de dados
        $query = DB::table('anunciantes')
            ->join('estados', 'estados.id', '=', 'anunciantes.estado_id')
            ->join('regioes', 'regioes.id', '=', 'anunciantes.regiao_id')
            ->join('cidades as cidade_principal', 'cidade_principal.id', '=', 'anunciantes.cidade_id')
            ->join('users', 'users.id', '=', 'anunciantes.usuario_id')
            ->join('cidades as cidade_comercial', 'cidade_comercial.id', '=', 'anunciantes.cidade_comercial_id')
            ->select(
                'anunciantes.*',
                'estados.estado as estado',
                'estados.id as estado_id',
                'regioes.regiao as regiao',
                'regioes.id as regiao_id',
                'cidade_principal.cidade as cidade',
                'cidade_principal.id as cidade_id',
                'cidade_comercial.cidade as cidade_Comercial',
                'cidade_comercial.id as cidade_comercial_id',
                'users.id as user_id'
            );

        if (request('nome_empresa')) {
            $query->where('anunciantes.nome_empresa', 'LIKE', '%' . request('nome_empresa') . '%');
        }
        if (request('tipo_anunciante')) {
            $query->where('anunciantes.tipo_anunciante', 'LIKE', '%' . request('tipo_anunciante') . '%');
        }
        if (request('estado')) {
            $query->where('estados.estado', 'LIKE', '%' . request('estado') . '%');
        }
        if (request('regiao')) {
            $query->where('regioes.regiao', 'LIKE', '%' . request('regiao') . '%');
        }
        if (request('cidade')) {
            $query->where('cidade_comercial.cidade', 'LIKE', '%' . request('cidade') . '%');
        }
        if (request('status')) {
            $query->where('anunciantes.status', request('status'));
        }

        $anunciantes = $query->get();
        $dadosPersonalizados = [];
        foreach ($anunciantes as $anunciante) {
            $dadosPersonalizados[] = [
                'id' => $anunciante->id,
                'nome_empresa' => $anunciante->nome_empresa,
                'Pessoal_responsavel' => $anunciante->pessoal_responsavel,
                'tipo_anunciante' => $anunciante->tipo_anunciante,
                'cnpj' => $anunciante->cnpj,
                'telefone' => $anunciante->telefone,
                'celular' => $anunciante->celular,
                'whatsapp' => $anunciante->whatsapp,
                'site' => $anunciante->site,
                'instagram' => $anunciante->instagram,
                'facebook' => $anunciante->facebook,
                'email' => $anunciante->email,
                'password' => $anunciante->password,
                'cep' => $anunciante->cep,
                'endereco' => $anunciante->endereco,
                'numero' => $anunciante->numero,
                'complemento' => $anunciante->complemento,
                'longitude' => $anunciante->longitude,
                'latitude' => $anunciante->latitude,
                'bairro' => $anunciante->bairro,
                'cep_comercial' => $anunciante->cep_comercial,
                'endereco_comercial' => $anunciante->endereco_comercial,
                'numero_comercial' => $anunciante->numero_comercial,
                'complemento_comercial' => $anunciante->complemento_comercial,
                'bairro_comercial' => $anunciante->bairro_comercial,


                'regiao_id' => $anunciante->regiao_id,
                'regiao' => $anunciante->regiao,
                'estado_id' => $anunciante->estado_id,
                'estado' => $anunciante->estado,
                'cidade_id' => $anunciante->cidade_id,
                'cidade' => $anunciante->cidade,
                'cidade_comercial_id' => $anunciante->cidade_comercial_id,
                'cidade_comericial' => $anunciante->cidade_Comercial,
                'status' => $anunciante->status,
                'observacao' => $anunciante->observacao,
                'foto' => $anunciante->foto ? env('URL_BASE_SERVIDOR') . '/' . $anunciante->foto : null,
                'banner_loja' => $anunciante->banner_loja ? env('URL_BASE_SERVIDOR') . '/' . $anunciante->banner_loja : null,
                'banner_loja_movel' => $anunciante->banner_loja_movel ? env('URL_BASE_SERVIDOR') . '/' . $anunciante->banner_loja_movel : null,
                'user_id' => $anunciante->user_id,
                // Adicione mais campos personalizados conforme necessário
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
        'nome_empresa' => 'required|string|max:50',
        'pessoal_responsavel' => 'required|string|max:50',
        'tipo_anunciante' => 'required|string|max:50',
        'cnpj' => 'required|string|max:50',
        'telefone' => 'required|string|max:50',
        'celular' => 'required|string|max:50',
        'whatsapp' => 'required|string|max:50',
        'email' => 'required|string|email|max:50|unique:anunciantes,email',
        'password' => 'required|string|max:50',
        'status' => 'required|integer',
        'site' => 'required|string|max:50',
        'cep' => 'required|string|max:50',
        'endereco' => 'required|string|max:50',
        'numero' => 'required|string|max:50',
        'complemento' => 'nullable|string|max:50',
        'longitude' => 'nullable|string|max:255',
        'latitude' => 'nullable|string|max:255',
        'bairro' => 'required|string|max:50',
        'endereco_comercial' => 'required|string|max:50',
        'numero_comercial' => 'required|string|max:50',
        'complemento_comercial' => 'nullable|string|max:50',
        'bairro_comercial' => 'required|string|max:50',
        'cep_comercial' => 'required|string|max:50',
        'estado_id' => 'required|exists:estados,id',
        'cidade_id' => 'required|exists:cidades,id',
        'cidade_comercial_id' => 'required|exists:cidades,id',
        'regiao_id' => 'required|exists:regioes,id',
        'observacao' => 'nullable|string',
        'instagram' => 'nullable|string',
        'facebook' => 'nullable|string',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'email' => 'O campo :attribute deve ser um endereço de e-mail válido.',
        'unique' => 'O campo :attribute já está em uso.',
        'exists' => 'O campo :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Verifica se o email já existe na tabela de anunciantes
        $emailExistente = Anunciantes::where('email', $request->email)->exists();

        // Se o email já existe, retorna uma mensagem em JSON
        if ($emailExistente) {
            return response()->json(['message' => 'Este email já existe no banco de dados'], 409); // 409 é o código de status para conflito
        }

        // Criando a instância do modelo Anunciantes
        $anunciantes = new Anunciantes;
        $anunciantes->nome_empresa = $request->nome_empresa;
        $anunciantes->pessoal_responsavel = $request->pessoal_responsavel;
        $anunciantes->tipo_anunciante = $request->tipo_anunciante;
        $anunciantes->cnpj = $request->cnpj;
        $anunciantes->telefone = $request->telefone;
        $anunciantes->celular = $request->celular;
        $anunciantes->whatsapp = $request->whatsapp;
        $anunciantes->email = $request->email;
        $anunciantes->password = $request->password;
        $anunciantes->status = $request->status;
        $anunciantes->site = $request->site;
        $anunciantes->cep = $request->cep;
        $anunciantes->endereco = $request->endereco;
        $anunciantes->numero = $request->numero;
        $anunciantes->complemento = $request->complemento;
        $anunciantes->longitude = $request->longitude;
        $anunciantes->latitude = $request->latitude;
        $anunciantes->bairro = $request->bairro;
        $anunciantes->endereco_comercial = $request->endereco_comercial;
        $anunciantes->numero_comercial = $request->numero_comercial;
        $anunciantes->complemento_comercial = $request->complemento_comercial;
        $anunciantes->bairro_comercial = $request->bairro_comercial;
        $anunciantes->cep_comercial = $request->cep_comercial;
        $anunciantes->estado_id = $request->estado_id;
        $anunciantes->cidade_id = $request->cidade_id;
        $anunciantes->cidade_comercial_id = $request->cidade_comercial_id;
        $anunciantes->regiao_id = $request->regiao_id;
        $anunciantes->observacao = $request->observacao;
        $anunciantes->instagram = $request->instagram;
        $anunciantes->facebook = $request->facebook;


        // Salvando os dados no banco de dados -> Salva na Tabelas de Anunciantes
        $anunciantes->save();

        // Agora irá criar um usuário com as informações inseridas
        $usuario = new User();
        $usuario->name = $anunciantes->nome_empresa;
        $usuario->email = $anunciantes->email;
        $usuario->password = Hash::make($anunciantes->password);
        $usuario->save();

        // Salva em anunciantes o id criado na tabela usuários
        $anunciantes->usuario_id = $usuario->id;
        $anunciantes->save();

        // Retornando a resposta de sucesso
        return response()->json(['message' => 'Anunciante cadastrado com sucesso'], 201);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response()->json(['message' => implode(', ', $errors)], 422);
    }
}



    public function uploadFotoAnunciantes(Request $request, $id)
    {
        $anunciante = Anunciantes::find($id);
        if (!$anunciante) {
            return response(['message' => 'Anunciante não encontrado'], 404);
        }

        if ($request->hasFile('foto')) {
            // Excluir o arquivo antigo, se existir
            if ($anunciante->foto && file_exists(public_path($anunciante->foto))) {
                unlink(public_path($anunciante->foto));
            }
            // Processar o novo arquivo
            $file = $request->file('foto');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/anunciantes/perfil/', $filename);
            $anunciante->foto = 'uploads/anunciantes/perfil/' . $filename;
            $anunciante->save();
        }

        return response()->json(['message' => 'Foto do anunciante enviada com sucesso'], 200);
    }


    public function uploadBannerLoja(Request $request, $id)
    {
        $anunciante = Anunciantes::find($id);
        if (!$anunciante) {
            return response(['message' => 'Anunciante não encontrado'], 404);
        }

        if ($request->hasFile('banner_loja')) {
            // Excluir o arquivo antigo, se existir
            if ($anunciante->banner_loja && file_exists(public_path($anunciante->banner_loja))) {
                unlink(public_path($anunciante->banner_loja));
            }
            // Processar o novo arquivo
            $file = $request->file('banner_loja');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/anunciantes/loja/', $filename);
            $anunciante->banner_loja = 'uploads/anunciantes/loja/' . $filename;
            $anunciante->save();
        }

        return response()->json(['message' => 'Foto da loja do anunciante enviada com sucesso'], 200);
    }


    public function uploadBannerLojaMovel(Request $request, $id)
    {
        $anunciante = Anunciantes::find($id);
        if (!$anunciante) {
            return response(['message' => 'Anunciante não encontrado'], 404);
        }

        if ($request->hasFile('banner_loja_movel')) {
            // Excluir o arquivo antigo, se existir
            if ($anunciante->banner_loja_movel && file_exists(public_path($anunciante->banner_loja_movel))) {
                unlink(public_path($anunciante->banner_loja_movel));
            }
            // Processar o novo arquivo
            $file = $request->file('banner_loja_movel');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/anunciantes/loja_movel/', $filename);
            $anunciante->banner_loja_movel = 'uploads/anunciantes/loja_movel/' . $filename;
            $anunciante->save();
        }

        return response()->json(['message' => 'Foto da loja movel do anunciante enviada com sucesso'], 200);
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
        $anunciante = Anunciantes::find($id);
        $dadosPersonalizados = [];
        if (!$anunciante) {
            return response(['message' => 'Anunciante não encontrado'], 404);
        }


        $estado = Estados::find($anunciante->estado_id);
        $regiao = Regioes::find($anunciante->regiao_id);
        $cidade = Cidades::find($anunciante->cidade_id);
        // Personalize os campos conforme necessário
        $dadosPersonalizados[] = [
            'id' => $anunciante->id,
            'nome_empresa' => $anunciante->nome_empresa,
            'pessoal_anunciante' => $anunciante->pessoal_anunciante,
            'tipo_anunciante' => $anunciante->tipo_anunciante,
            'cnpj' => $anunciante->cnpj,
            'telefone' => $anunciante->telefone,
            'celular' => $anunciante->celular,
            'whatsapp' => $anunciante->whatsapp,
            'email' => $anunciante->email,
            'site' => $anunciante->site,
            'instagram' => $anunciante->instagram,
            'facebook' => $anunciante->facebook,
            'cep' => $anunciante->cep,
            'endereco' => $anunciante->endereco,
            'numero' => $anunciante->numero,
            'complemento' => $anunciante->complemento,
            'longitude' => $anunciante->longitude,
            'latitude' => $anunciante->latitude,
            'bairro' => $anunciante->bairro,
            'cep_comercial' => $anunciante->cep_comercial,
            'endereco_comercial' => $anunciante->endereco_comercial,
            'numero_comercial' => $anunciante->numero_comercial,
            'complemento_comercial' => $anunciante->complemento_comercial,
            'bairro_comercial' => $anunciante->bairro_comercial,
            'regiao' => $regiao->regiao,
            'estado' => $estado->estado,
            'cidade' => $cidade->cidade,
            'status' => $anunciante->status,
            'observacao' => $anunciante->observacao,
            'foto' => $anunciante->foto ? env('URL_BASE_SERVIDOR') . '/' . $anunciante->foto : null,
            'banner_loja' => $anunciante->banner_loja ? env('URL_BASE_SERVIDOR') . '/' . $anunciante->banner_loja : null,
            'banner_loja_movel' => $anunciante->banner_loja_movel ? env('URL_BASE_SERVIDOR') . '/' . $anunciante->banner_loja_movel : null,
            // Adicione mais campos personalizados conforme necessário
        ];
        return response()->json($dadosPersonalizados);
    }

    public function buscar_anunciante_por_site(Request $request)
    {
        //

        $anunciante = Anunciantes::where('site', 'LIKE', '%' . $request->site . '%')->first();
        $dadosPersonalizados = [];
        if (!$anunciante) {
            return response(['message' => 'Anunciante não encontrado'], 404);
        }


        return response()->json($anunciante);
    }

    public function buscar_site_anunciante()
    {
        $anunciantes = Anunciantes::select('id', 'site')->get();

        if ($anunciantes->isEmpty()) {
            return response(['message' => 'Nenhum anunciante encontrado'], 404);
        }

        return response()->json($anunciantes);
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
    $anunciantes = Anunciantes::findOrFail($id);

    // Definindo as regras de validação
    $rules = [
        'nome_empresa' => 'sometimes|required|string|max:50',
        'pessoal_responsavel' => 'sometimes|required|string|max:50',
        'tipo_anunciante' => 'sometimes|required|string|max:50',
        'cnpj' => 'sometimes|required|string|max:50',
        'telefone' => 'sometimes|required|string|max:50',
        'celular' => 'sometimes|required|string|max:50',
        'whatsapp' => 'sometimes|required|string|max:50',
        'email' => [
            'sometimes',
            'required',
            'string',
            'email',
            'max:50',
            Rule::unique('anunciantes', 'email')->ignore($anunciantes->id),
        ],
        'password' => 'sometimes|required|string|max:50',
        'status' => 'sometimes|required|integer',
        'site' => 'sometimes|required|string|max:50',
        'cep' => 'sometimes|required|string|max:50',
        'endereco' => 'sometimes|required|string|max:50',
        'numero' => 'sometimes|required|string|max:50',
        'complemento' => 'nullable|string|max:50',
        'longitude' => 'nullable|string|max:255',
        'latitude' => 'nullable|string|max:255',
        'bairro' => 'required|string|max:50',
        'endereco_comercial' => 'sometimes|required|string|max:50',
        'numero_comercial' => 'sometimes|required|string|max:50',
        'complemento_comercial' => 'sometimes|nullable|string|max:50',
        'bairro_comercial' => 'sometimes|required|string|max:50',
        'cep_comercial' => 'sometimes|required|string|max:50',
        'estado_id' => 'sometimes|required|exists:estados,id',
        'cidade_id' => 'sometimes|required|exists:cidades,id',
        'cidade_comercial_id' => 'sometimes|required|exists:cidades,id',
        'regiao_id' => 'sometimes|required|exists:regioes,id',
        'observacao' => 'sometimes|nullable|string',
        'instagram' => 'sometimes|nullable|string',
        'facebook' => 'sometimes|nullable|string',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'unique' => 'O campo :attribute já está em uso.',
        'exists' => 'O campo :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Procurando o anunciante pelo ID
        if (!$anunciantes) {
            return response()->json(['message' => 'Anunciante não encontrado'], 404);
        }

        // Atualizando os valores
        $anunciantes->nome_empresa = $request->nome_empresa;
        $anunciantes->pessoal_responsavel = $request->pessoal_responsavel;
        $anunciantes->tipo_anunciante = $request->tipo_anunciante;
        $anunciantes->cnpj = $request->cnpj;
        $anunciantes->telefone = $request->telefone;
        $anunciantes->celular = $request->celular;
        $anunciantes->whatsapp = $request->whatsapp;
        $anunciantes->email = $request->email;
        $anunciantes->password = $request->password;
        $anunciantes->status = $request->status;
        $anunciantes->site = $request->site;
        $anunciantes->cep = $request->cep;
        $anunciantes->endereco = $request->endereco;
        $anunciantes->numero = $request->numero;
        $anunciantes->complemento = $request->complemento;
        $anunciantes->longitude = $request->longitude;
        $anunciantes->latitude = $request->latitude;
        $anunciantes->bairro = $request->bairro;
        $anunciantes->endereco_comercial = $request->endereco_comercial;
        $anunciantes->numero_comercial = $request->numero_comercial;
        $anunciantes->complemento_comercial = $request->complemento_comercial;
        $anunciantes->bairro_comercial = $request->bairro_comercial;
        $anunciantes->cep_comercial = $request->cep_comercial;
        $anunciantes->estado_id = $request->estado_id;
        $anunciantes->cidade_id = $request->cidade_id;
        $anunciantes->cidade_comercial_id = $request->cidade_comercial_id;
        $anunciantes->regiao_id = $request->regiao_id;
        $anunciantes->observacao = $request->observacao;
        $anunciantes->instagram = $request->instagram;
        $anunciantes->facebook = $request->facebook;

        // Salvando os dados no banco de dados
        $anunciantes->save();

        $usuario = User::where('id', $anunciantes->usuario_id)->first();

        if (!$usuario) {
            return response()->json(['message' => 'Usuário não encontrado!'], 409);
        }

        $usuario->name = $anunciantes->nome_empresa;
        $usuario->email = $anunciantes->email;
        $usuario->password = Hash::make($anunciantes->password);
        $usuario->save();

        // Retornando a resposta de sucesso
        return response()->json($anunciantes, 200);
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
         try {
             // Verifica se o anunciante existe
             $anunciante = Anunciantes::findOrFail($id);

             // Obtém o ID do usuário associado ao anunciante
             $userId = $anunciante->usuario_id;

             // Exclui os anúncios relacionados ao anunciante
             $anunciosExcluidos = Anuncios::where('anunciante_id', $id)->delete();

             // Busca todos os planos de anunciantes relacionados ao anunciante
             $planosAnunciantes = PlanosAnunciantes::where('anunciante_id', $id)->get();

             foreach ($planosAnunciantes as $plano) {
                 // Exclui os registros relacionados na tabela 'historico_anunciantes' para cada plano
                 HistoricoAnunciantes::where('plano_anunciante_id', $plano->id)->delete();

                 // Exclui o plano do anunciante
                 $plano->delete();
             }

             // Finalmente, exclui o anunciante
             $anunciante->delete();

             // Exclui o usuário associado ao anunciante
             $usuarioExcluido = User::where('id', $userId)->delete();

             // Retorna uma mensagem de sucesso com detalhes
             return response()->json([
                 'message' => 'Anunciante, seus anúncios, planos, históricos relacionados e usuário associado eliminados com sucesso.',
                 'anunciante_id' => $id,
                 'anunciosExcluidos' => $anunciosExcluidos,
                 'planosExcluidos' => $planosAnunciantes->count(),
                 'usuarioExcluido' => $usuarioExcluido
             ], 200);

         } catch (ModelNotFoundException $e) {
             // Retorna uma mensagem de erro se o anunciante não for encontrado
             return response()->json([
                 'message' => 'Anunciante não encontrado.',
                 'error' => $e->getMessage()
             ], 404);

         } catch (\Exception $e) {
             // Retorna uma mensagem de erro genérica para outras exceções
             return response()->json([
                 'message' => 'Ocorreu um erro ao tentar eliminar o anunciante.',
                 'error' => $e->getMessage()
             ], 500);
         }
     }





    public function destroyFoto($id)
    {
        $anunciantes = Anunciantes::find($id);

        if (!$anunciantes) {
            return response()->json(['message' => 'Anunciantes não encontrado'], 404);
        }

        // Para achar o caminho da foto
        $pathFoto = public_path() .  $anunciantes->foto;
        // Verificar se o arquivo existe
        if (File::exists($pathFoto)) {
            // Deletar o arquivo
            File::delete($pathFoto);

            // Atualizar ou zerar a coluna da foto no banco de dados
            $anunciantes->foto = '';
            $anunciantes->save();

            return response()->json(['message' => 'Foto eliminada com sucesso'], 200);
        } else {
            return response()->json(['message' => 'Foto não encontrada'], 404);
        }
    }

    public function encontrarAnunciante($id) {
        $anunciante = DB::table('anunciantes')
        ->join('estados', 'anunciantes.estado_id', '=', 'estados.id')
        ->join('cidades', 'anunciantes.cidade_id', '=', 'cidades.id')
        ->join('regioes', 'anunciantes.regiao_id', '=', 'regioes.id')
        ->select(
            'anunciantes.id',
            'anunciantes.nome_empresa',
            'anunciantes.pessoal_responsavel',
            'anunciantes.tipo_anunciante',
            'anunciantes.telefone',
            'anunciantes.celular',
            'anunciantes.whatsapp',
            'anunciantes.email',
            'anunciantes.foto',
            'anunciantes.banner_loja',
            'anunciantes.banner_loja_movel',
            'anunciantes.site',
            'anunciantes.endereco_comercial',
            'anunciantes.numero_comercial',
            'anunciantes.complemento_comercial',
            'anunciantes.bairro_comercial',
            'anunciantes.cep_comercial',
            'anunciantes.instagram',
            'anunciantes.facebook',
            'anunciantes.longitude',
            'anunciantes.latitude',
            'estados.estado as estado_nome',
            'cidades.cidade as cidade_nome',
            'regioes.regiao as regiao_nome'
        )
        ->where('anunciantes.id', $id)
        ->first(); 

        if ($anunciante) {
            return response()->json([
                'success' => true,
                'data' => $anunciante
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Anunciante não encontrado.'
            ], 404);
        }
    }

    public function gerarXml($id){

        $anuncios = Anuncios::where('anunciante_id', $id)->where('status_publicacao', 2)->get();
        $anunciante = Anunciantes::find($id);
        
        if($anuncios == null){
            return responde()->json(['message' => 'Nenhum anúncio encotrado!']);
        }

        if($anunciante == null){
            return responde()->json(['message' => 'Nenhum anunciante encotrado!']);
        }

        $xml = new \SimpleXMLElement('<listings/>');
        $xml->addChild('title', "Feed de Veículos " . $anunciante->nome_empresa);
        $link = $xml->addChild('link');
        $link->addAttribute('href', "https://" . $anunciante->site);
        $link->addAttribute('rel', 'self');

        foreach ($anuncios as $anuncio) {
            $listing = $xml->addChild('listing');

            // VEÍCULO ID: Ano / idRevenda / idAnuncio
            $anoAtual = date("Y"); 
            $listing->addChild("vehicle_id", $anoAtual . $anunciante->id . $anuncio->id);


            // TITULO
            $marca = Marcas::find($anuncio->marca_id);
            if($marca == null){
                return responde()->json(['message' => 'Nenhuma marca encotrado!']);
            }

            $modelo = Modelos::find($anuncio->modelo_id);
            if($modelo == null){
                return responde()->json(['message' => 'Nenhum modelo encotrado!']);
            }

            $listing->addChild("title", $marca->nome_marca . " " . $modelo->nome_modelo . " " . $anuncio->ano_modelo);

            // DESCRICAO
            $cor = Cor::find($anuncio->cor_id);
            if($cor == null){
                return responde()->json(['message' => 'Nenhuma cor encotrada!']);
            }
            $combustivel = Combustivel::find($anuncio->combustivel_id);
            if($combustivel == null){
                return responde()->json(['message' => 'Nenhum combustível encotrado!']);
            }
            $transmissao = Transmissao::find($anuncio->transmissao_id);
            if($transmissao == null){
                return responde()->json(['message' => 'Nenhuma transmissao encotrada!']);
            }
            $description = $cor->cor . ", " . $combustivel->combustivel . " e " . $transmissao->transmissao;
            $listing->addChild("description", mb_strtoupper(mb_substr(mb_strtolower($description, 'UTF-8'), 0, 1), 'UTF-8') . mb_substr(mb_strtolower($description, 'UTF-8'), 1));

            // URL:  https:// | url | /verveiculo?id= | id
            $listing->addChild("url", "https://" . $anunciante->site .  "/verveiculorevenda?id=" . $anuncio->id);

            // MARCA:
            $listing->addChild("make", $marca->nome_marca);

            // FOTO
            $imagem = $listing->addChild('image');
            $imagem->addChild('url', 'https://api.regionalmotors.com.br/uploads/anuncios/foto1' . '/' . $anuncio->id . '/detalhe.jpg');


            // MODELO:
            $listing->addChild("model", $modelo->nome_modelo);


            // ANO MODELO:
            $listing->addChild('year', $anuncio->ano_modelo);


            // Kilometros
            $miliage = $listing->addChild('mileage');
            if (is_null($anuncio->km)) {
                $miliage->addChild('value', 0);
            } else {
                $miliage->addChild('value', $anuncio->km);
            }
            $miliage->addChild('unit', 'KM');

            
            // CATEGORIA:
            $categoria = Categorias::find($anuncio->categoria_id);
            if ($categoria == null) {
                return response()->json(['message' => 'Nenhuma categoria encontrada!']);
            }
            $categoryMap = [
                "HATCH" => "HATCHBACK",
                "PICAPE" => "PICKUP",
                "SEDAN" => "SEDAN",
                "SUV" => "SUV",
            ];

            if (array_key_exists($categoria->nome, $categoryMap)) {
                $bodyStyle = $categoryMap[$categoria->nome];
            } else {
                $bodyStyle = "OTHER";
            }

            $listing->addChild("body_style", $bodyStyle);


            // COMBUSTÍVEL
            $fuel_type = "";
            switch ($combustivel->combustivel) {
                case 'DIESEL':
                    $fuel_type = "DIESEL"; 
                    break;
                case 'ELÉTRICO':
                    $fuel_type = "ELETRIC";
                    break;
                case 'FLEX':
                    $fuel_type = "FLEX";
                    break;
                case 'GASOLINA':
                    $fuel_type = "GASOLINE"; 
                    break;
                case 'HÍBRIDO':
                    $fuel_type = "HYBRID";
                    break;  
                default:
                    $fuel_type = "OTHER";
                    break;
            }

            $listing->addChild("fuel_type", $fuel_type);


            // TRANSMISSAO
            $transmissao_value = "";
            if($transmissao->transmissao == "AUTOMÁTICO"){
                $transmissao_value = "AUTOMATIC";
            } else {
                $transmissao_value = "MANUAL";
            }
            $listing->addChild("transmission", $transmissao_value);


            // PREÇO
            $valor = $anuncio->valor_preco;
            $valor_formatt = str_replace('.', '', $valor);
            $valor_brl = $valor_formatt . " BRL";
            $listing->addChild('price', $valor_brl);


            // ENDEREÇO | Rua / Cidade / Estado / Brasil / Cep
            $adress = $listing->addChild('address');
            $adress->addAttribute('format', 'simple'); // Adicionando o atributo format

            // Adicionando componentes com nomes específicos
            $adress->addChild('component', $anunciante->endereco . ", " . $anunciante->numero . " " . $anunciante->bairro)->addAttribute('name', 'addr1');

            $cidade = Cidades::find($anunciante->cidade_id);
            if ($cidade == null) {
                return response()->json(['message' => 'Nenhuma cidade encontrada!']);
            }
            $adress->addChild('component', $cidade->cidade)->addAttribute('name', 'city');

            $estado = Estados::find($anunciante->estado_id);
            if ($estado == null) {
                return response()->json(['message' => 'Nenhum estado encontrado!']);
            }
            $adress->addChild('component', $estado->estado)->addAttribute('name', 'region');

            $adress->addChild('component', 'BRASIL')->addAttribute('name', 'country');

            $adress->addChild('component', $anunciante->cep_comercial)->addAttribute('name', 'postal_code');


            // LATITUDE E LONGITUDE
            $listing->addChild('latitude', $anunciante->latitude);
            $listing->addChild('longitude', $anunciante->longitude);


            // COR
            $listing->addChild("exterior_color", $cor->cor);


            // SITUAÇÃO
            if($anuncio->situacao_veiculo == "1"){
                $listing->addChild("state_of_vehicle", "NEW");
            } else if($anuncio->situacao_veiculo == "2"){
                $listing->addChild("state_of_vehicle", "USED");
            }
        }

        return Response::make($xml->asXML(), 200)->header('Content-Type', 'application/xml');
    }
}
