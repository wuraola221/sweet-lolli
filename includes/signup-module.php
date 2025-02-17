<?php

declare(strict_types=1);
require_once 'dbh-inc.php';

function get_email(object $pdo, string $email) {

    $query = "SELECT email FROM users WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}

function set_user(object $pdo, string $firstname, $lastname, string $pwd, string $email) {

    $query = "INSERT INTO users (firstname, lastname,  pwd, email) VALUES (:firstname, :lastname, :pwd, :email);";
    $stmt = $pdo->prepare($query);

    $options = ['cost => 12'];
    $hashedPwd = password_hash($pwd, PASSWORD_BCRYPT, $options);

    $stmt->bindParam(":firstname", $firstname);
    $stmt->bindParam(":lastname", $lastname);
    $stmt->bindParam(":pwd", $hashedPwd);
    $stmt->bindParam(":email", $email);
    $stmt->execute();
 }