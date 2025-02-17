<?php

declare(strict_types=1);

($_SERVER ["REQUEST_METHOD"] == "POST");

    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

function is_input_empty(string $firstname, string $lastname, string $pwd, string $email) {
    if (empty($firstname)|| empty($lastname) || empty($pwd) || empty($email)) {
        return true;
    } else {
        return false;
    }
}

function is_email_invalid(string $email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

function is_email_registered(object $pdo, string $email) {
    if (get_email($pdo, $email)) {
        return true;
    } else {
        return false;
    }
}

function create_user(object $pdo, string $firstname, string $lastname, string $pwd, string $email) {
    set_user($pdo,  $firstname, $lastname, $pwd, $email);
}