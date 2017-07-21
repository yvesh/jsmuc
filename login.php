<?php


$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

// Auf dem Server -> Sicher
if ($username == 'admin' && $password == 'geheim') {
    echo 'Willkommen im sicheren Bereich';
}