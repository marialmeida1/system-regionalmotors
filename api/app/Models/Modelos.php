<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modelos extends Model
{
    use HasFactory;


    protected $fillable = [
        'nome_modelo',
        'marca_id',
        'descricao'
    ];

    public function marca()
    {
        return $this->belongsTo(Marcas::class, 'marca_id');
    }
}
