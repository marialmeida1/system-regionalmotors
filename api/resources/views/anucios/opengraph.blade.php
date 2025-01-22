<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Loop para adicionar as tags Open Graph -->
    @foreach ($openGraphData as $property => $content)
        <meta property="{{ $property }}" content="{{ $content }}">
    @endforeach
</head>
<body>
</body>
</html>
