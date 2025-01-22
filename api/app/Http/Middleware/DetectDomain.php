<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Anunciantes;

class DetectDomain
{
    public function handle(Request $request, Closure $next)
    {
        // Obter o domínio acessado
        $host = $request->getHost();

        // Mapear domínios para IDs de anunciantes
        $domainMapping = [
            'regionalmotors.test' => 1,
            'http://regionalmotors.test' => 2,
            'teste.regionalmotors.com.br/#/' => 3,
            'https://regionalmotors.com.br' => 4,
            'teste.regionalmotors.com.br/#/' => 5,
            'https://teste.regionalmotors.com.br' => 6,
            // Adicione mais mapeamentos conforme necessário
        ];

        // Identificar o anunciante com base no domínio
        $anuncianteId = $domainMapping[$host] ?? null;

        if ($anuncianteId) {
            // Armazenar o ID do anunciante na sessão ou no request
            $request->attributes->set('anunciante_id', $anuncianteId);
        }

        // Para depuração, você pode retornar o valor do domínio e o ID do anunciante
        // return response()->json(['host' => $host, 'anunciante_id' => $anuncianteId]);

        return $next($request);
    }
}
