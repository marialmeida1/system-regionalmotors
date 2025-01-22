<?php

namespace App\Imports;

use App\Models\TiposVeiculos;
use Maatwebsite\Excel\Concerns\ToModel;

class ImportTiposVeiculos implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new TiposVeiculos([
            'tipo_veiculo' => $row[1],
            'descricao' => $row[1]
        ]);
    }
}
