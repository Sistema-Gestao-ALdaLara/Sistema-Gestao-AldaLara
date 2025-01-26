

function saveGrade(studentId) {
    const inputId = `nota${studentId}`;
    const nota = document.getElementById(inputId).value;

    if (nota === "" || nota < 0 || nota > 20) {
        alert("Por favor, insira uma nota válida (entre 0 e 10).")
        return;
    }

    // Aqui você pode adicionar lógica para salvar a nota em um backend.

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 2000);
}
