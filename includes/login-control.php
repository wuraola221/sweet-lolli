<?php

declare(strict_types=1);

function is_input_empty(string $email, string $pwd) {
    if (empty($email) || empty($pwd)) {
        return true;
    } else {
        return false;
    }
}

function is_username_wrong(bool|array $result) {
    if (!$result) {
        return true;
    } else {
        return false;
    }
}

function is_password_wrong(string $pwd, string $hashPwd) {
    if (!password_verify($pwd, $hashPwd)) {
        return true;
    } else {
        return false;
    }
}






