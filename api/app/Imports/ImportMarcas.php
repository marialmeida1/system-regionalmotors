<?php

namespace App\Imports;

use App\Models\Marcas;
use Maatwebsite\Excel\Concerns\ToModel;

class ImportMarcas implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Marcas([
            'id' => $row[0],
            'nome_marca' => $row[1],
            'tipo_veiculo_id' => $row[2],
            'descricao' => $row[1]
        ]);
    }
}
