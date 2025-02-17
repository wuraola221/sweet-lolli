<?php

if ($_SERVER ["REQUEST_METHOD"] == "POST") {

  $firstname = $_POST["firstname"];
  $lastname = $_POST["lastname"];
  $pwd = $_POST["pwd"];
  $email = $_POST["email"];

    try{

        require_once "dbh-inc.php";
        require_once "signup-control.php";
        require_once "signup-module.php";
        require_once "signup-view.php";

        //ERROR HANDLERS
        $errors = [];

        if (is_input_empty($pwd, $firstname, $lastname, $email)) {
            $errors["empty_input"] = "Fill in all fields!";
        }

       if (is_email_invalid($email)) {
            $errors["invalid_email"] = "Invalid email used!";
        }

         if (is_email_registered($pdo, $email)) {
            $errors["email_used"] = "Email already registered!";
          }
          
          if (empty($errors)) {
            echo "Signup successful!";
        }



          require_once "configsession.php";

          if ($errors) {
            $_SESSION["errors_signup"] = $errors;

            header("Location: ../signup.html?error");

            $signupData = [
              "email" => $email
            ];
            $_SESSION["signup_data"] = $signupData;

            header("Location: ../signup.html?error");
            die();
          }

          create_user($pdo, $firstname, $lastname, $pwd, $email);

          header ("Location: ../index.html?signupsuccess");

          
          $pdo = null;
          $stmt = null;

          
          die();
        
        } catch (PDOException $e) {
            die ("Query failed: "  . $e->getmessage());
        }
      }

      else {
        header ("Location: ../index.html");
        die();
      }
