<?php

if ($_SERVER ["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];

    try {
        require_once "dbh-inc.php";

        $query = "UPDATE users SET username = :username , pwd = :pwd 
        WHERE username = :username OR pwd = :pwd;";
        

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":pwd", $pwd);

        $stmt->execute();


        $pdo = null;
        $stmt = null;

        header("Location: ../index.php");

        die();

    } catch (PDOException $e){
        die("Query failed: " . $e->getmessage());
    }

}

else {
    header("Location ../index.php");
}