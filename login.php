<?php
session_start();
require_once './includes/dbh-inc.php';
require_once './includes/login-view.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Log In</title>
</head>
<body>
    <div class="login-container">
        <div class="item-1">
            <h2>Login</h2>
            <p>Welcome back <?php output_username();?> </p>
        </div>
        <?php
    if (!isset($_SESSION["user_id"])) { ?>
        <div class="imp">
        </div>
      
        <div class="separator group"> 
        </div>
            
        <form action="includes/login-inc.php" method="post" class="form-2">
          <label for="email" class="group">Email <span class="required">*</span></label>
          <input type="email" id="email" name="email" required>
      
          <label for="password" class="group">Password <span class="required">*</span></label>
          <input type="password" id="password" name="pwd" required>
      
          <a href="#" class="forgot-password">Forgot your password?</a>
      
          <button type="submit" class="login-button">Login</button>
        </form>

        <div class="item-2">
            <h5 class="group">Don't have an account? <a href="signup.html">Sign up</a></h5>
        </div>
         

    <h4 class="echo-error">
    <?php
        check_login_errors();
    ?>  
    </h4>
    </div>
    
    <?php } ?>
    <div class="home-btn">
        <a href="index.html" class="btn-primary">Back To Home</a>
        <a href="includes/logout.inc.php" class="btn-primary">Logout</a>
    </div>
</body>
</html>