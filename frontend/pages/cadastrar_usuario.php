<?php
session_start();
include 'database.php'; // Inclua a conexão com o banco de dados

// Verifica se o método da requisição é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['password'];
    $confirma_senha = $_POST['confirmsenha'];
    $tipo = $_POST['tipo'];

    // Verifica se as senhas são iguais
    if ($senha !== $confirma_senha) {
        $_SESSION['erro'] = 'As senhas não coincidem.';
        header('Location: cadastrar_usuario.html');
        exit();
    }

    // Verificar se o email já está registrado
    $query = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
    $query->bind_param("s", $email);
    $query->execute();
    $result = $query->get_result();

    if ($result->num_rows > 0) {
        $_SESSION['erro'] = 'O email já está registrado.';
        header('Location: cadastrar_usuario.html');
        exit();
    }

    // Criptografar a senha
    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    // Inserir o usuário no banco de dados
    $query = $conn->prepare("INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)");
    $query->bind_param("ssss", $nome, $email, $senha_hash, $tipo);

    if ($query->execute()) {
        $_SESSION['sucesso'] = 'Usuário cadastrado com sucesso!';
        header('Location: cadastrar_usuario.html');
        exit();
    } else {
        $_SESSION['erro'] = 'Erro ao cadastrar o usuário.';
        header('Location: cadastrar_usuario.html');
        exit();
    }
} else {
    // Caso o acesso não seja via POST
    header('Location: cadastrar_usuario.html');
    exit();
}
?>
