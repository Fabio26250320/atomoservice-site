<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    $to = "atomoserviceinformatica@gmail.com";
    $subject = "Contato pelo site - Átomo Service Informática";

    $body = "Nome: $nome\n";
    $body .= "Email: $email\n\n";
    $body .= "Mensagem:\n$mensagem";

    $headers = "From: site@atomoserviceinformatica.com\r\n";
    $headers .= "Reply-To: $email";

    mail($to, $subject, $body, $headers);

    header("Location: obrigado.html");
}
?>
