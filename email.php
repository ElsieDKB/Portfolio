<?php

$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $nom = isset($_POST['nom']) ? strip_tags(trim($_POST['nom'])) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Validation des champs
    if (empty($nom)) {
        $errors[] = "Le nom n'est pas inséré";
    }

    if (empty($email)) {
        $errors[] = "Vous n'avez pas entré votre email";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "L'email n'est pas valide";
    }

    if (empty($message)) {
        $errors[] = "Votre message est vide";
    }

    if (empty($errors)) {
        $monMail = "elsiebrunache@gmail.com";
        $subject = "Message de $nom";
        $headers = [
            "From: $nom <$email>",
            "Reply-To: $email",
            "Content-Type: text/plain; charset=UTF-8", 
        ];

        if (mail($monMail, $subject, $message, implode("\r\n", $headers))) {
            echo "Votre mail a été envoyé !";
        } else {
            echo "Une erreur interne a empêché l'envoi du mail";
        }
    } 
}
?>
