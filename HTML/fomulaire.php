<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
    <style>
        html {
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #6A245F, #87BD23, #F8A001, #C52C14);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
}

body {
  background-color: rgba(246, 197, 16, 0.95); /* #F6C510 with transparency */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  max-width: 500px;
  height: auto;
  margin: 2rem;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 25px rgba(106, 36, 95, 0.4);
  opacity: 0;
  animation: fadeIn 1.2s ease-in forwards;
  transition: all 0.4s ease;
  border: 3px solid #6A245F;
  backdrop-filter: blur(10px);
}

input, button {
  background-color: #F8A001;
  border: 2px solid #6A245F;
  border-radius: 0.75rem;
  padding: 0.85rem 1.75rem;
  margin: 0.75rem;
  font-size: 1.1rem;
  transition: all 0.4s ease;
  color: #333;
  font-weight: 500;
  letter-spacing: 0.5px;
  width: 100%; /* Set to 100% to make the input field take up the full width of the container */
  max-width: 400px; /* Optional: Adjust the maximum width as needed */
}


input:hover {
  background-color: #F16B0D;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(106, 36, 95, 0.3);
}
 
button:hover{
   cursor:pointer;
   background-color: #F16B0D;
   transform: translateY(-3px);
   box-shadow: 0 4px 8px rgba(106, 36, 95, 0.3);
}

input:focus {
  outline: none;
  border-color: #87BD23;
  box-shadow: 0 0 0 4px rgba(135, 189, 35, 0.3);
  transform: scale(1.02);
}

button:active {
  transform: translateY(1px);
  background-color: #C52C14;
  color: white;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}
    </style>
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
    <label for="name">Classe/Nom de l'enseignant: </label>
    <input type="text" id="classe" name="classe" required>
    <br>
    <label for="pourcentage">Pourcentage de français: </label>
    <input type="number" id="pourcentage" name="pourcentage" min="0" max="100" required>
    
    <button type="submit">Soummetre</button>
</form>
    
    
</body>
</html>
