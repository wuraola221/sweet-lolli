<?php
session_start();
header('Content-Type: application/json');
echo json_encode(['email' => $_SESSION['email']]);
?>