<?php
$host = 'localhost';
$db = 'impal_gestao_escolar';
$user = 'root';
$password = '';
$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) die('Erro de conexão: ' . $conn->connect_error);
?>