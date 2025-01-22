<?php

namespace App\Imports;

use App\Models\Modelos;
use Maatwebsite\Excel\Concerns\ToModel;

class ImportModelos implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Modelos([
            'nome_modelo' => $row[2],
            'marca_id' => $row[0],
            'descricao' => $row[2]
        ]);
    }
}
