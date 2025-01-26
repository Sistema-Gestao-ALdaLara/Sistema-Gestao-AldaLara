function adicionarTurma() {
    const nomeTurma = document.getElementById('nomeTurma').value;
    const disciplina = document.getElementById('disciplina').value;
    const periodo = document.getElementById('periodo').value;

    if (nomeTurma && disciplina && periodo) {
        const table = document.getElementById('turmaTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = nomeTurma;
        cell2.textContent = disciplina;
        cell3.textContent = periodo;

        document.getElementById('turmaForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
