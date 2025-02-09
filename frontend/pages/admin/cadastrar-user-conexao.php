<?php
$host = "localhost";  // Altere se necessário
$dbname = "IPIAL_DB";
$usuario = "root";  // Altere para o usuário do seu MySQL
$senha = "";  // Se houver senha, adicione aqui

$conexao = new mysqli($host, $usuario, $senha, $dbname);

if ($conexao->connect_error) {
    die("Erro de conexão: " . $conexao->connect_error);
}
?>
