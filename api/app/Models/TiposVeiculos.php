<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TiposVeiculos extends Model
{
    use HasFactory;


    protected $fillable = [
        'tipo_veiculo',
        'descricao'
    ];

    public function marcas()
    {
        return $this->hasMany(Marcas::class, 'tipo_veiculo_id');
    }
}
