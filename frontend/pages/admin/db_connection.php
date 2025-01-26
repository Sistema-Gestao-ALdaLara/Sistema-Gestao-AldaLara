
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistema_gestao_escolar";

// Conexão ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
