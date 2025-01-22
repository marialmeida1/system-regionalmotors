<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planos extends Model
{
    use HasFactory;
    public function historico()
    {
        return $this->hasMany(HistoricoAnunciantes::class);
    }
}
