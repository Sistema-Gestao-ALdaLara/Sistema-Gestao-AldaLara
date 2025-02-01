
function processNames() {
    const input = document.getElementById('student-names').value;
    const resultDiv = document.getElementById('result');

    if (!input.trim()) {
        resultDiv.innerHTML = '<p>Por favor, insira os nomes dos alunos.</p>';
        return;
    }

    const names = input.split(',').map(name => name.trim()).filter(name => name);
    if (names.length === 0) {
        resultDiv.innerHTML = '<p>Nenhum nome válido encontrado.</p>';
        return;
    }

    const sortedNames = names.sort();
    resultDiv.innerHTML = `
        <h3>Lista de Nomes Processada</h3>
        <ul>
            ${sortedNames.map(name => `<li>${name}</li>`).join('')}
        </ul>
    `;
}
