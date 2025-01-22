<?php

namespace App\Http\Controllers;

use App\Imports\ImportMarcas;
use App\Imports\ImportModelos;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ImportTiposVeiculos;

class importsController extends Controller
{
    //

    public function view_import_tipos_veiculos(Request $request){
        return view('imports.view_import_tipos_veiculos');
    }

    public function import_tipos_veiculos(Request $request){
        Excel::import(new ImportTiposVeiculos,
                      $request->file('file')->store('files'));
        return redirect()->back();
    }

    public function view_import_marcas(Request $request){
        return view('imports.view_import_marcas');
    }

    public function import_marcas(Request $request){
        Excel::import(new ImportMarcas,
                      $request->file('file')->store('files'));
        return redirect()->back();
    }

    public function view_import_modelos(Request $request){
        return view('imports.view_import_modelos');
    }

    public function import_modelos(Request $request){
        Excel::import(new ImportModelos,
                      $request->file('file')->store('files'));
        return redirect()->back();
    }
}
