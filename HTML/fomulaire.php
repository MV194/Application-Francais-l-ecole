<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
</head>
<body>
<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $classe = htmlspecialchars($_POST["classe"]);
    $pourcentage = filter_var($_POST["pourcentage"], FILTER_VALIDATE_INT, [
        "options" => ["min_range" => 0, "max_range" => 100]
    ]);

    if ($pourcentage !== false) {
        $file = "data.json";
        $data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

        // Add new entry (you could also limit to last X entries)
        $data[] = ["date" => date("Y-m-d"), "classe" => $classe, "pourcentage" => $pourcentage];

        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

        echo "Données enregistrées avec succès!";
    } else {
        echo "Erreur: Pourcentage invalide.";
    }
}
    ?>
    
    <form method="POST">
    <label for="name">Classe: </label>
    <input type="text" id="classe" name="classe" required>
    
    <label for="pourcentage">Pourcentage de français: </label>
    <input type="number" id="pourcentage" name="pourcentage" min="0" max="100" required>
    
    <button type="submit">Soummetre</button>
</form>
    
    
</body>
</html>
