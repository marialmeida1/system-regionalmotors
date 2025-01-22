<?php

use App\Http\Controllers\importsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\anunciosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

	Route::get('/view_import_tipos_veiculos',[importsController::class,
			'view_import_tipos_veiculos'])->name('view_import_tipos_veiculos');
	Route::post('/import_tipos_veiculos',[importsController::class,
			'import_tipos_veiculos'])->name('import_tipos_veiculos');

    Route::get('/view_import_marcas',[importsController::class,
			'view_import_marcas'])->name('view_import_marcas');
	Route::post('/import_marcas',[importsController::class,
			'import_marcas'])->name('import_marcas');

    Route::get('/view_import_modelos',[importsController::class,
			'view_import_modelos'])->name('view_import_modelos');
	Route::post('/import_modelos',[importsController::class,
			'import_modelos'])->name('import_modelos');


Route::get('/opengraph/{id}', [anunciosController::class, 'opengraph']);
