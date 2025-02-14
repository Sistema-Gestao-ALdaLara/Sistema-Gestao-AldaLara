document.addEventListener('DOMContentLoaded', function () {
    const gradeForm = document.getElementById('gradeForm');
    const messageDiv = document.getElementById('message');
    const studentSelect = document.getElementById('student');
    const subjectSelect = document.getElementById('subject');
    const classSelect = document.getElementById('class');

    // Função para carregar alunos
    async function loadStudents() {
        try {
            const response = await fetch('http://localhost/backend/routes.php?action=getStudents');
            const students = await response.json();

            // Limpar opções existentes
            studentSelect.innerHTML = '<option value="">Selecione o aluno</option>';

            // Adicionar alunos ao select
            students.forEach(student => {
                const option = document.createElement('option');
                option.value = student.id_aluno;
                option.textContent = student.nome;
                studentSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Erro ao carregar alunos:', error);
            messageDiv.innerHTML = '<div class="alert alert-danger">Erro ao carregar alunos. Tente novamente.</div>';
        }
    }

    // Função para carregar disciplinas
    async function loadSubjects() {
        try {
            const response = await fetch('http://localhost/backend/routes.php?action=getSubjects');
            const subjects = await response.json();

            // Limpar opções existentes
            subjectSelect.innerHTML = '<option value="">Selecione a disciplina</option>';

            // Adicionar disciplinas ao select
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.id_disciplina;
                option.textContent = subject.nome;
                subjectSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Erro ao carregar disciplinas:', error);
            messageDiv.innerHTML = '<div class="alert alert-danger">Erro ao carregar disciplinas. Tente novamente.</div>';
        }
    }

    // Função para carregar turmas
    async function loadClasses() {
        try {
            const response = await fetch('http://localhost/backend/routes.php?action=getClasses');
            const classes = await response.json();

            // Limpar opções existentes
            classSelect.innerHTML = '<option value="">Selecione a turma</option>';

            // Adicionar turmas ao select
            classes.forEach(classItem => {
                const option = document.createElement('option');
                option.value = classItem.id_turma;
                option.textContent = classItem.nome;
                classSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Erro ao carregar turmas:', error);
            messageDiv.innerHTML = '<div class="alert alert-danger">Erro ao carregar turmas. Tente novamente.</div>';
        }
    }

    // Função para enviar notas
    gradeForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const student = studentSelect.value;
        const subject = subjectSelect.value;
        const grade = document.getElementById('grade').value;
        const trimester = document.getElementById('trimester').value;
        const classId = classSelect.value;

        // Validação dos campos
        if (!student || !subject || !grade || !trimester || !classId) {
            messageDiv.innerHTML = '<div class="alert alert-danger">Preencha todos os campos!</div>';
            return;
        }

        try {
            const response = await fetch('http://localhost/backend/routes.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'addGrade',
                    id_aluno: student,
                    id_disciplina: subject,
                    nota: grade,
                    trimestre: trimester,
                    id_turma: classId, // Novo campo: turma
                }),
            });

            const data = await response.json();

            if (data.success) {
                messageDiv.innerHTML = '<div class="alert alert-success">Nota lançada com sucesso!</div>';
                gradeForm.reset(); // Limpar o formulário
            } else {
                messageDiv.innerHTML = `<div class="alert alert-danger">Erro: ${data.message}</div>`;
            }
        } catch (error) {
            console.error('Erro ao lançar nota:', error);
            messageDiv.innerHTML = '<div class="alert alert-danger">Erro ao lançar nota. Tente novamente.</div>';
        }
    });

    // Carregar alunos, disciplinas e turmas ao iniciar a página
    loadStudents();
    loadSubjects();
    loadClasses();
});
