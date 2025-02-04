<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\appController;
use App\Http\Controllers\ForgotPasswordController;


Route::get('/anuncios/listar_anuncios/{order?}', 'App\Http\Controllers\anunciosController@index');
// Route::get('/anuncios/listar_anuncios_aprovados', 'App\Http\Controllers\anunciosController@anunciosAprovados');
// Route::get('/anuncios/listar_anuncios_destaques', 'App\Http\Controllers\anunciosController@indexDestaque');
// Route::get('/anuncios/listar_anuncios_vetrine', 'App\Http\Controllers\anunciosController@indexVetrine');
Route::get('/anuncios/contadorContacto/{id}', 'App\Http\Controllers\anunciosController@contadorContato');
Route::get('/anuncios/contadorMensagem/{id}', 'App\Http\Controllers\anunciosController@contadorMensagem');
Route::get('/anuncios/visualizar_anuncios/{id}', 'App\Http\Controllers\anunciosController@show');

Route::get('/categorias/listar_categorias', 'App\Http\Controllers\categoriasController@index');

//Listagem fora da autenticação
Route::get('/tipo_veiculo/listar_tipos_veiculos', 'App\Http\Controllers\tipoVeiculoController@index');
Route::get('/marcas/listar_marcas', 'App\Http\Controllers\marcasController@index');
Route::get('/modelos/listar_modelos', 'App\Http\Controllers\modeloController@index');
Route::get('/estados/listar_estados', 'App\Http\Controllers\estadoController@index');
Route::get('/cor/listar_cor', 'App\Http\Controllers\corController@index');
Route::get('/tecnologia/listar_tecnologia', 'App\Http\Controllers\tecnologiaController@index');
Route::get('/opcionais/listar_opcionais', 'App\Http\Controllers\opcionaisController@index');
Route::get('/conforto/listar_confortos', 'App\Http\Controllers\confortoController@index');
Route::get('/fabricante/listar_fabricantes', 'App\Http\Controllers\fabricanteController@index');
Route::get('/cidade/listar_cidades', 'App\Http\Controllers\cidadeController@index');
Route::post('/estados/registar_estados', 'App\Http\Controllers\estadoController@store');
Route::get('/transmissao/listar_transmissao', 'App\Http\Controllers\transmissaoController@index');
Route::get('/combustivel/listar_combustivel', 'App\Http\Controllers\combustivelController@index');
Route::get('/categoria_opcionais/listar_categoria_opcionais', 'App\Http\Controllers\categoriaOpcionaisController@index');
Route::get('/regiao/listar_regiao', 'App\Http\Controllers\regiaoController@index');
Route::get('/anunciantes/encontrar_anunciante/{id}', 'App\Http\Controllers\anuciantesController@encontrarAnunciante');

// Rota teste de WebHook
Route::post('/anunciantes/new_deploy','App\Http\Controllers\anuciantesController@newDeploy');


// Gerando feed XML
Route::get('/anunciantes/{id}/xml', 'App\Http\Controllers\anuciantesController@gerarXml')->name('anunciantes.xml');

Route::middleware(['auth:sanctum'])->group(
    function () {
        Route::get('/teste', [AuthController::class,'teste']);

        Route::get('/user/listar_user', 'App\Http\Controllers\userController@index');
        Route::get('/user/usuario_logado', 'App\Http\Controllers\userController@usuarioLogado');
        Route::get('/user/anunciante_logado', 'App\Http\Controllers\userController@anuncianteLogado');


//Categorias

Route::post('/categorias/registar_categorias', 'App\Http\Controllers\categoriasController@store');
Route::put('/editar_categorias/update/{id}', 'App\Http\Controllers\categoriasController@update');
Route::get('/categorias/visualizar_categorias/{id}', 'App\Http\Controllers\categoriasController@show');
Route::get('/eliminar_categorias/{id}', 'App\Http\Controllers\categoriasController@destroy');

//Carregar foto da categoria
Route::post('/categorias/fotosCategoria/{id}', 'App\Http\Controllers\categoriasController@uploadFotoCategorias');


//Notícias
Route::get('/noticias/listar_noticias', 'App\Http\Controllers\noticiasController@index');
Route::post('/noticias/registar_noticias', 'App\Http\Controllers\noticiasController@store');
Route::put('/editar_noticias/update/{id}', 'App\Http\Controllers\noticiasController@update');
Route::get('/noticias/visualizar_noticias/{id}', 'App\Http\Controllers\noticiasController@show');
Route::get('/eliminar_noticias/{id}', 'App\Http\Controllers\noticiasController@destroy');
Route::post('/noticias/upload_foto_capa/{id}', 'App\Http\Controllers\noticiasController@foto_capa');
Route::post('/noticias/upload_foto_artigo/{id}', 'App\Http\Controllers\noticiasController@foto_artigo');
Route::delete('/noticias/eliminar_foto_artigo/{id}', 'App\Http\Controllers\noticiasController@destroyFotoArtigo');
Route::delete('/noticias/eliminar_foto_capa/{id}', 'App\Http\Controllers\noticiasController@destroyFotoCapa');


//Anuciantes
Route::get('/anunciantes/listar_anuciantes', 'App\Http\Controllers\anuciantesController@index');
Route::post('/anunciantes/registar_anuciantes', 'App\Http\Controllers\anuciantesController@store');
Route::post('/anunciantes/uploadFoto_anuciantes/{id}', 'App\Http\Controllers\anuciantesController@uploadFotoAnunciantes');
Route::post('/anunciantes/banner_loja_anuciantes/{id}', 'App\Http\Controllers\anuciantesController@uploadBannerLoja');
Route::post('/anunciantes/banner_loja_movel_anuciantes/{id}', 'App\Http\Controllers\anuciantesController@uploadBannerLojaMovel');
//Route::post('/anunciantes/ /{id}', 'App\Http\Controllers\anuciantesController@uploadBannerLojaMovel');
Route::get('/anunciantes/visualizar_anuciantes/{id}', 'App\Http\Controllers\anuciantesController@show');
Route::put('/editar_anuciantes/update/{id}', 'App\Http\Controllers\anuciantesController@update');
Route::delete('/eliminar_anuciante/{id}', 'App\Http\Controllers\anuciantesController@destroy');

Route::delete('/anunciantes/eliminar_foto/{id}', 'App\Http\Controllers\anuciantesController@destroyFoto');


//Anuncios
Route::post('/anuncios/registar_anuncios', 'App\Http\Controllers\anunciosController@store');
Route::post('/anuncios/uploadFoto1_anuncios/{id}', 'App\Http\Controllers\anunciosController@uploadFoto');
Route::put('/editar_anuncios/update/{id}', 'App\Http\Controllers\anunciosController@update');
Route::get('/eliminar_anuncios/{id}', 'App\Http\Controllers\anunciosController@destroy');
Route::get('/anuncios/detalhar_anucios/{id}', 'App\Http\Controllers\anunciosController@detalhar');

//Listar anuncios de seus respectivos anunciantes
Route::get('/anuncios/listar_anunciosAdminSuper', 'App\Http\Controllers\anunciosController@anuncioAdminSuper');
Route::get('/anuncios/listar_anunciosAdmin', 'App\Http\Controllers\anunciosController@anuncioAdmin');
Route::get('/anuncios/eliminar/{id}', 'App\Http\Controllers\anunciosController@destroy');


Route::delete('/anuncios/eliminar_foto1/{id}', 'App\Http\Controllers\anunciosController@destroyFoto1');
Route::delete('/anuncios/eliminar_foto2/{id}', 'App\Http\Controllers\anunciosController@destroyFoto2');
Route::delete('/anuncios/eliminar_foto3/{id}', 'App\Http\Controllers\anunciosController@destroyFoto3');
Route::delete('/anuncios/eliminar_foto4/{id}', 'App\Http\Controllers\anunciosController@destroyFoto4');
Route::delete('/anuncios/eliminar_foto5/{id}', 'App\Http\Controllers\anunciosController@destroyFoto5');
Route::delete('/anuncios/eliminar_foto6/{id}', 'App\Http\Controllers\anunciosController@destroyFoto6');
Route::delete('/anuncios/eliminar_foto7/{id}', 'App\Http\Controllers\anunciosController@destroyFoto7');
Route::delete('/anuncios/eliminar_foto8/{id}', 'App\Http\Controllers\anunciosController@destroyFoto8');
Route::delete('/anuncios/eliminar_foto9/{id}', 'App\Http\Controllers\anunciosController@destroyFoto9');
Route::delete('/anuncios/eliminar_foto10/{id}', 'App\Http\Controllers\anunciosController@destroyFoto10');


//Planos
Route::get('/planos/listar_planos', 'App\Http\Controllers\planosController@index');
Route::post('/planos/registar_planos', 'App\Http\Controllers\planosController@store');
Route::patch('/editar_planos/update/{id}', 'App\Http\Controllers\planosController@update');
Route::get('/planos/visualizar_planos/{id}', 'App\Http\Controllers\planosController@show');
Route::delete('/eliminar_planos/{id}', 'App\Http\Controllers\planosController@destroy');




//Histórico
Route::get('/historicos_planos/listar_historicos_planos', 'App\Http\Controllers\historicoAnunciantesController@index');


//Planos Anuciantes
Route::get('/planos_anuciantes/listar_planos_anuciantes', 'App\Http\Controllers\planosAnuciantesController@index');
Route::post('/planos_anuciantes/registar_planos_anuciantes', 'App\Http\Controllers\planosAnuciantesController@store');
Route::put('/editar_planos_anuciantes/update/{id}', 'App\Http\Controllers\planosAnuciantesController@update');
Route::get('/planos_anuciantes/visualizar_planos_anuciantes/{id}', 'App\Http\Controllers\planosAnuciantesController@show');
Route::get('/eliminar_planos_anuciantes/{id}', 'App\Http\Controllers\planosAnuciantesController@destroy');

//Proposta
Route::get('/propostas/listar_propostas', 'App\Http\Controllers\propostasController@index');
Route::post('/propostas/registar_propostas', 'App\Http\Controllers\propostasController@store');
Route::get('/propostas/visualizar_proposta/{id}', 'App\Http\Controllers\propostasController@show');
Route::put('/editar_proposta/update/{id}', 'App\Http\Controllers\propostasController@update');
Route::get('/eliminar_proposta/{id}', 'App\Http\Controllers\propostasController@destroy');

//Marcas
Route::post('/marcas/registar_marcas', 'App\Http\Controllers\marcasController@store');
Route::get('/marcas/visualizar_marca/{id}', 'App\Http\Controllers\marcasController@show');
Route::put('/editar_marca/update/{id}', 'App\Http\Controllers\marcasController@update');
Route::get('/eliminar_marca/{id}', 'App\Http\Controllers\marcasController@destroy');

//Modelo
Route::post('/modelos/registar_modelos', 'App\Http\Controllers\modeloController@store');
Route::get('/modelos/visualizar_modelo/{id}', 'App\Http\Controllers\modeloController@show');
Route::put('/editar_modelo/update/{id}', 'App\Http\Controllers\modeloController@update');
Route::get('/eliminar_modelo/{id}', 'App\Http\Controllers\modeloController@destroy');

//Tipo de veiculo

Route::post('/tipo_veiculo/registar_tipos_veiculos', 'App\Http\Controllers\tipoVeiculoController@store');
Route::get('/tipo_veiculo/visualizar_tipos_veiculos/{id}', 'App\Http\Controllers\tipoVeiculoController@show');
Route::put('/editar_tipos_veiculos/update/{id}', 'App\Http\Controllers\tipoVeiculoController@update');
Route::get('/eliminar_tipos_veiculos/{id}', 'App\Http\Controllers\tipoVeiculoController@destroy');


//Tecnologia
Route::post('/tecnologia/registar_tecnologia', 'App\Http\Controllers\tecnologiaController@store');
Route::get('/tecnologia/visualizar_tecnologia/{id}', 'App\Http\Controllers\tecnologiaController@show');
Route::put('/editar_tecnologia/update/{id}', 'App\Http\Controllers\tecnologiaController@update');
Route::get('/eliminar_tecnologia/{id}', 'App\Http\Controllers\tecnologiaController@destroy');


//Cor
Route::post('/cor/registar_cor', 'App\Http\Controllers\corController@store');
Route::get('/cor/visualizar_cor/{id}', 'App\Http\Controllers\corController@show');
Route::put('/editar_cor/update/{id}', 'App\Http\Controllers\corController@update');
Route::get('/eliminar_cor/{id}', 'App\Http\Controllers\corController@destroy');


//Combustivel
Route::post('/combustivel/registar_combustivel', 'App\Http\Controllers\combustivelController@store');
Route::get('/combustivel/visualizar_combustivel/{id}', 'App\Http\Controllers\combustivelController@show');
Route::put('/editar_combustivel/update/{id}', 'App\Http\Controllers\combustivelController@update');
Route::get('/eliminar_combustivel/{id}', 'App\Http\Controllers\combustivelController@destroy');


//Transmissão
Route::post('/transmissao/registar_transmissao', 'App\Http\Controllers\transmissaoController@store');
Route::get('/transmissao/visualizar_transmissao/{id}', 'App\Http\Controllers\transmissaoController@show');
Route::put('/editar_transmissao/update/{id}', 'App\Http\Controllers\transmissaoController@update');
Route::get('/eliminar_transmissao/{id}', 'App\Http\Controllers\transmissaoController@destroy');


//Estado
Route::get('/estados/visualizar_estado/{id}', 'App\Http\Controllers\estadoController@show');
Route::put('/editar_estado/update/{id}', 'App\Http\Controllers\estadoController@update');
Route::get('/eliminar_estado/{id}', 'App\Http\Controllers\estadoController@destroy');


//Regiao

Route::post('/regiao/registar_regiao', 'App\Http\Controllers\regiaoController@store');
Route::get('/regiao/visualizar_regiao/{id}', 'App\Http\Controllers\regiaoController@show');
Route::put('/editar_regiao/update/{id}', 'App\Http\Controllers\regiaoController@update');
Route::get('/eliminar_regiao/{id}', 'App\Http\Controllers\regiaoController@destroy');



//Cidade
Route::post('/cidade/registar_cidade', 'App\Http\Controllers\cidadeController@store');
Route::get('/cidade/visualizar_cidade/{id}', 'App\Http\Controllers\cidadeController@show');
Route::put('/editar_cidade/update/{id}', 'App\Http\Controllers\cidadeController@update');
Route::get('/eliminar_cidade/{id}', 'App\Http\Controllers\cidadeController@destroy');

//Fabricante
Route::post('/fabricante/registar_fabricante', 'App\Http\Controllers\fabricanteController@store');
Route::get('/fabricante/visualizar_fabricante/{id}', 'App\Http\Controllers\fabricanteController@show');
Route::put('/editar_fabricante/update/{id}', 'App\Http\Controllers\fabricanteController@update');
Route::get('/eliminar_fabricante/{id}', 'App\Http\Controllers\fabricanteController@destroy');


//Conforto
Route::post('/conforto/registar_conforto', 'App\Http\Controllers\confortoController@store');
Route::get('/conforto/visualizar_conforto/{id}', 'App\Http\Controllers\confortoController@show');
Route::put('/editar_conforto/update/{id}', 'App\Http\Controllers\confortoController@update');
Route::get('/eliminar_conforto/{id}', 'App\Http\Controllers\confortoController@destroy');


//Segurança
Route::get('/seguranca/listar_segurancas', 'App\Http\Controllers\segurancaController@index');
Route::post('/seguranca/registar_seguranca', 'App\Http\Controllers\segurancaController@store');
Route::get('/seguranca/visualizar_seguranca/{id}', 'App\Http\Controllers\segurancaController@show');
Route::put('/editar_seguranca/update/{id}', 'App\Http\Controllers\segurancaController@update');
Route::get('/eliminar_seguranca/{id}', 'App\Http\Controllers\segurancaController@destroy');



//Categorias Opcionais
Route::post('/categoria_opcionais/registar_categoria_opcionais', 'App\Http\Controllers\categoriaOpcionaisController@store');
Route::get('/categoria_opcionais/visualizar_categoria_opcionais/{id}', 'App\Http\Controllers\categoriaOpcionaisController@show');
Route::put('/editar_categoria_opcionais/update/{id}', 'App\Http\Controllers\categoriaOpcionaisController@update');
Route::get('/eliminar_categoria_opcionais/{id}', 'App\Http\Controllers\categoriaOpcionaisController@destroy');



//Opcionais
Route::post('/opcionais/registar_opcionais', 'App\Http\Controllers\opcionaisController@store');
Route::get('/opcionais/visualizar_opcionais/{id}', 'App\Http\Controllers\opcionaisController@show');
Route::put('/editar_opcionais/update/{id}', 'App\Http\Controllers\opcionaisController@update');
Route::get('/eliminar_opcionais/{id}', 'App\Http\Controllers\opcionaisController@destroy');

Route::post('logout', [AuthController::class, 'logout']);
}); // Fim da verificação de autenticação

//login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/anunciantes/buscar_anunciante_por_site', 'App\Http\Controllers\anuciantesController@buscar_anunciante_por_site');
Route::get('/anunciantes/buscar_site_anunciante', 'App\Http\Controllers\anuciantesController@buscar_site_anunciante');

// buscar endereço por CEP
Route::get('/verificar_cep/{id}', [appController::class,'verificar_cep']);

Route::get('/verificar_cnpj/{id}', [appController::class,'verificar_cnpj']);
