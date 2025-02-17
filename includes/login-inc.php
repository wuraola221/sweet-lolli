<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    $firstname = $_POST["firstname"];
    $pwd = $_POST["pwd"];

    try {
        require_once 'dbh-inc.php';
        require_once 'login-module.php';
        require_once 'login-control.php';

        // ERROR HANDLERS
        $errors = [];

        if (is_input_empty($email, $pwd)) {
            $errors["empty_input"] = "Fill in all fields!";
        }

        $result = get_user($pdo, $email);

        if (is_username_wrong($result)) {
            $errors["login_incorrect"] = "Incorrect login info!";
        }

        if (!is_username_wrong($result) && is_password_wrong($pwd, $result["pwd"])) {
            $errors["login_incorrect"] = "Incorrect login info!";
        }

        if ($errors) {
            $_SESSION["errors_login"] = $errors;
            header("Location: ../login.php?loginerror");
            die();
        }

        require_once "configsession.php";

        $newSessionId = session_create_id();
        $sessionId = $newSessionId . "_" . $result["id"];
        session_id($sessionId);

        $_SESSION["user_id"] = $result["id"];
        $_SESSION["user_firstname"] = htmlspecialchars($result["firstname"]);
        $_SESSION["email"] = $result["email"]; // Add this line to set the email in the session
        $_SESSION["last_regeneration"] = time();

        header("Location: ../index.html?login=success");

        $pdo = null;
        $statement = null;

        die();

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {
    header("Location: ../index.html");
    die();
}
?>