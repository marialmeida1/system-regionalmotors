<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Noticias;
use App\Models\Categorias;
use File;
use DB;

class noticiasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $noticias = DB::table('noticias')
        ->join('categorias','categorias.id','noticias.categoria_id')
        ->select('noticias.*', 'categorias.nome as nome_categoria','categorias.id as id_categorias')
        ->get();

        if (request('nome_categoria')) {
            $query->where('anuncios.nome_categoria', request('nome_categoria'));
        }
//$noticias = Noticias::all();

// Personalização dos campos da base de dados
$dadosPersonalizados = [];

foreach ($noticias as $noticias) {
    // Personalize os campos conforme necessário
    $dadosPersonalizados[] = [
        'id' => $noticias->id,
        'titulo' => $noticias->titulo,
        'subtitulo' => $noticias->subtitulo,
        'foto_capa' => $noticias->foto_capa ? env('URL_BASE_SERVIDOR') . $noticias->foto_capa : null,
        'foto_artigo' => $noticias->foto_artigo ? env('URL_BASE_SERVIDOR') . $noticias->foto_artigo : null,
        'resumo' => $noticias->resumo,
        'status' => $noticias->status,
        'nome_categoria' => $noticias->nome_categoria,
        'id_categorias' => $noticias->id,
        'descricao' => $noticias->descricao,
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
        'titulo' => 'required|string|max:100',
        'subtitulo' => 'required|string|max:100',
        'resumo' => 'required|string|max:100',
        'status' => 'boolean',
        'categoria_id' => 'required|exists:categorias,id',
        'descricao' => 'required|string',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'boolean' => 'O campo :attribute deve ser verdadeiro ou falso.',
        'exists' => 'O :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Criando uma nova notícia
        $noticia = new Noticias;
        $noticia->titulo = $request->titulo;
        $noticia->subtitulo = $request->subtitulo;
        $noticia->resumo = $request->resumo;
        $noticia->status = $request->status ?? true; // Default para true se não especificado
        $noticia->categoria_id = $request->categoria_id;
        $noticia->descricao = $request->descricao;

        $noticia->save();

        // Retornando a resposta de sucesso
        return response()->json($noticia, 201);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Capturando a exceção de validação e formatando a resposta
        $errors = $e->validator->errors()->all();
        return response()->json(['message' => implode(', ', $errors)], 422);
    } catch (\Exception $e) {
        // Capturando outras exceções não tratadas
        return response()->json(['message' => $e->getMessage()], 500);
    }
}


    public function foto_artigo(Request $request, $id)
    {
        $noticias = Noticias::find($id);
        if($request->foto_artigo){
            $foto_artigo = $request->foto_artigo;
            $extensaoimg = $foto_artigo->getClientOriginalExtension();
            if($extensaoimg !='jpg' && $extensaoimg != 'jpg' && $extensaoimg != 'png'){
                return back()->with('Erro', 'imagem com formato inválido');
            }
        }

        $noticias->save();

        if ($request->foto_artigo) {
            File::move($foto_artigo, public_path().'/imagens_de_artigo/imagens'.$noticias->id.'.'.$extensaoimg);
            $noticias->foto_artigo = '/imagens_de_artigo/imagens'.$noticias->id.'.'.$extensaoimg;

            $noticias->save();
        }

        return "Foto de artigo carregada com sucesso";
    }

    public function foto_capa(Request $request, $id)
    {
        $noticias = Noticias::find($id);
        if($request->foto_capa){
            $foto_capa = $request->foto_capa;
            $extensaoimg = $foto_capa->getClientOriginalExtension();
            if($extensaoimg !='jpg' && $extensaoimg != 'jpg' && $extensaoimg != 'png'){
                return back()->with('Erro', 'imagem com formato inválido');
            }
        }

        $noticias->save();

        if ($request->foto_capa) {
            File::move($foto_capa, public_path().'/imagens_de_capa/imagens'.$noticias->id.'.'.$extensaoimg);
            $noticias->foto_capa = '/imagens_de_capa/imagens'.$noticias->id.'.'.$extensaoimg;

            $noticias->save();
        }

        return "Foto de Capa carregada com sucesso";
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
        $noticia = Noticias::find($id);
        $dadosPersonalizados = [];
        if(!$noticia){
            return response(['message'=>'Notícias não encontrada'], 404);
        }
        // Personalização dos campos da base de dados
    // Personalize os campos conforme necessário
    $dadosPersonalizados[] = [
        'id' => $noticia->id,
        'titulo' => $noticia->titulo,
        'subtitulo' => $noticia->subtitulo,
        'foto_capa' => $noticia->foto_capa ? env('URL_BASE_SERVIDOR') . $noticia->foto_capa : null,
        'foto_artigo' => $noticia->foto_artigo ? env('URL_BASE_SERVIDOR') . $noticia->foto_artigo : null,
        'status' => $noticia->status,
        'categoria_id' => $noticia->categoria_id,
        'descricao' => $noticia->descricao,
        // Adicione mais campos personalizados conforme necessário
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
        'subtitulo' => 'required|string|max:100',
        'resumo' => 'required|string|max:100',
        'status' => 'boolean',
        'categoria_id' => 'required|exists:categorias,id',
        'descricao' => 'required|string',
    ];

    // Definindo as mensagens personalizadas
    $messages = [
        'required' => 'O campo :attribute é obrigatório.',
        'string' => 'O campo :attribute deve ser uma string.',
        'max' => 'O campo :attribute deve ter no máximo :max caracteres.',
        'boolean' => 'O campo :attribute deve ser verdadeiro ou falso.',
        'exists' => 'O :attribute selecionado não existe.',
    ];

    try {
        // Executando a validação
        $request->validate($rules, $messages);

        // Buscando a notícia pelo ID
        $noticia = Noticias::find($id);
        if (!$noticia) {
            return response(['message' => 'Notícia não encontrada'], 404);
        }

        // Atualizando os campos da notícia
        $noticia->titulo = $request->titulo;
        $noticia->subtitulo = $request->subtitulo;
        $noticia->resumo = $request->resumo;
        $noticia->status = $request->status ?? true; // Default para true se não especificado
        $noticia->categoria_id = $request->categoria_id;
        $noticia->descricao = $request->descricao;

        $noticia->save();

        // Retornando a resposta de sucesso
        return response()->json(['message' => 'Notícia atualizada com sucesso'], 200);
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
        Noticias::destroy($id);
        return response(['message'=> 'Notícia eliminado com sucesso!'], 200);
    }




    public function destroyFotoArtigo($id)
{
    $noticia = Noticias::find($id);

    if (!$noticia) {
        return response()->json(['message' => 'Notícia não encontrada'], 404);
    }

    // Para achar o caminho da foto
    $pathFoto = public_path() .  $noticia->foto_artigo;
    //return $pathFoto;
    // Verificar se o arquivo existe
    if (File::exists($pathFoto)) {
        // Deletar o arquivo
        File::delete($pathFoto);

        // Atualizar ou zerar a coluna da foto no banco de dados
        $noticia->foto_artigo = '';
        $noticia->save();

        return response()->json(['message' => 'Foto do artigo eliminada com sucesso'], 200);

    }

    else {
        return response()->json(['message' => 'Foto não encontrada'], 404);
    }
}


public function destroyFotoCapa($id)
{
    $noticia = Noticias::find($id);

    if (!$noticia) {
        return response()->json(['message' => 'Notícia não encontrada'], 404);
    }

    // Para achar o caminho da foto
    $pathFoto = public_path() .  $noticia->foto_capa;
    //return $pathFoto;
    // Verificar se o arquivo existe
    if (File::exists($pathFoto)) {
        // Deletar o arquivo
        File::delete($pathFoto);

        // Atualizar ou zerar a coluna da foto no banco de dados
        $noticia->foto_capa = '';
        $noticia->save();

        return response()->json(['message' => 'Foto de capa eliminada com sucesso'], 200);

    }

    else {
        return response()->json(['message' => 'Foto não encontrada'], 404);
    }
}
}
