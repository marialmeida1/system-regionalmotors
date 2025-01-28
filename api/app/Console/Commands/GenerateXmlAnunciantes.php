<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Anunciantes;
use Illuminate\Support\Facades\Log;

class GenerateXmlAnunciantes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:xml-anunciantes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gera um XML com os anúncios de todos os anunciantes e salva na pasta public';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $anunciantes = Anunciantes::all();

        foreach ($anunciantes as $anunciante) {
            try {
                if (empty($anunciante->id)) {
                    $this->error("ID do anunciante inválido.");
                    continue;
                }

                $response = Http::get('https://api.regionalmotors.com.br/api/anunciantes' . '/' . $anunciante->id . '/xml');
                
                if ($response->successful()) {
                    $filePath = public_path("xmls/rev_{$anunciante->id}.xml");
                    file_put_contents($filePath, $response->body());
                    $this->info("XML gerado para o anunciante {$anunciante->id} e salvo em $filePath");
                } else {
                    // Log detalhado para erro
                    $this->error("Falha ao gerar o XML para o anunciante {$anunciante->id}");
                    $this->line("Código de status: " . $response->status());
                    $this->line("Corpo da resposta: " . $response->body());
                    $this->line("URL que gerou erro: " . url('/anunciantes' . '/' . $anunciante->id . '/xml'));

                }
            } catch (\Exception $e) {
                $this->error("Erro ao gerar XML para o anunciante {$anunciante->id}: " . $e->getMessage());
            }
        }        
        return 0;
    }

}
