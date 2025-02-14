document.addEventListener('DOMContentLoaded', function () {
    const gradesByTrimester = document.getElementById('gradesByTrimester');
    const messageDiv = document.getElementById('message');
    const id_aluno = 1; // Substitua pelo ID do aluno logado

    // Função para carregar as notas do aluno
    async function loadStudentGrades() {
        try {
            const response = await fetch(`http://localhost/backend/routes.php?action=getStudentGrades&id_aluno=${id_aluno}`);
            const grades = await response.json();

            if (grades.length > 0) {
                // Agrupar notas por trimestre
                const gradesByTrimesterData = {};

                grades.forEach(grade => {
                    if (!gradesByTrimesterData[grade.trimestre]) {
                        gradesByTrimesterData[grade.trimestre] = [];
                    }
                    gradesByTrimesterData[grade.trimestre].push(grade);
                });

                // Exibir as notas por trimestre
                gradesByTrimester.innerHTML = '';
                for (const trimestre in gradesByTrimesterData) {
                    const trimestreDiv = document.createElement('div');
                    trimestreDiv.className = 'trimestre';
                    trimestreDiv.innerHTML = `
                        <h3>${trimestre}º Trimestre</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Disciplina</th>
                                    <th>Nota</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${gradesByTrimesterData[trimestre].map(grade => `
                                    <tr>
                                        <td>${grade.nome_disciplina}</td>
                                        <td>${grade.nota}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    `;
                    gradesByTrimester.appendChild(trimestreDiv);
                }
            } else {
                messageDiv.innerHTML = '<div class="alert alert-info">Nenhuma nota encontrada.</div>';
            }
        } catch (error) {
            console.error('Erro ao carregar notas:', error);
            messageDiv.innerHTML = '<div class="alert alert-danger">Erro ao carregar notas. Tente novamente.</div>';
        }
    }

    // Carregar as notas ao iniciar a página
    loadStudentGrades();
});
