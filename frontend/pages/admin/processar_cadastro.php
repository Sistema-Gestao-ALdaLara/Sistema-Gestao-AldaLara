<?php
session_start();
include("conexao.php");

// Verifica se o usuário é admin
if (!isset($_SESSION['tipo']) || $_SESSION['tipo'] != "Administrador") {
    die("Acesso negado! Apenas administradores podem cadastrar usuários.");
}

// Pegando os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Criptografando a senha
$tipo = $_POST['tipo'];

// Verificando se o e-mail já está cadastrado
$sql_check = "SELECT id_usuario FROM Usuarios WHERE email = ?";
$stmt_check = $conexao->prepare($sql_check);
$stmt_check->bind_param("s", $email);
$stmt_check->execute();
$stmt_check->store_result();

if ($stmt_check->num_rows > 0) {
    die("Erro: O email já está cadastrado.");
}
$stmt_check->close();

// Inserindo no banco de dados
$sql = "INSERT INTO Usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)";
$stmt = $conexao->prepare($sql);
$stmt->bind_param("ssss", $nome, $email, $senha, $tipo);

if ($stmt->execute()) {
    echo "Usuário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar usuário: " . $stmt->error;
}

$stmt->close();
$conexao->close();
?>
