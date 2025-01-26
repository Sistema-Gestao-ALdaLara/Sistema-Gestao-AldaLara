// Função para validar o formulário
function validateForm() {
    // Obter os valores dos campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Obter o elemento de erro
    const errorMessage = document.getElementById("error-message");

    // Limpar a mensagem de erro a cada nova tentativa de envio
    errorMessage.innerHTML = "";

    // Verificar se os campos estão vazios
    if (username === "" || password === "") {
        errorMessage.innerHTML = "Por favor, preencha todos os campos.";
        return false; // Impede o envio do formulário
    }

    // Validar a senha (exemplo simples: mínimo de 6 caracteres)
    if (password.length < 6) {
        errorMessage.innerHTML = "A senha deve ter pelo menos 6 caracteres.";
        return false;
    }

    // Se tudo estiver correto, permite o envio do formulário
    alert("Login realizado com sucesso!");
    return true;
    }
