<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marcas extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome_marca',
        'tipo_veiculo_id',
        'descricao'
    ];

    public function tipoVeiculo()
    {
        return $this->belongsTo(TiposVeiculos::class, 'tipo_veiculo_id');
    }

    public function modelos()
    {
        return $this->hasMany(Modelos::class, 'marca_id');
    }
}
