<?php

declare(strict_types=1);

function output_username() {
    if (isset($_SESSION["user_firstname"])) {
        echo $_SESSION["user_firstname"];
    } else {
        echo "Guest";
    }
}

function check_login_errors() {
    if (isset($_SESSION["errors_login"])) {
        $errors = $_SESSION["errors_login"];

        echo "<br>";

        foreach ($errors as $error) {
            echo '<p class="form-error">' . $error . '</p>';
        }

        unset($_SESSION['errors_login']);
    }

    elseif (isset($_GET['login']) && $_GET['login'] === "success") {
        echo '<br>';
        echo '<p class="form-error">Login success!</p>';
    }
}