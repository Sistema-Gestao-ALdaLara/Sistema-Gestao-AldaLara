<?php
header("Content-Type: application/json");
require_once 'database.php'; // Arquivo de conexão com o banco de dados

// Função para buscar alunos
function getStudents() {
    global $db;
    $result = $db->query("SELECT id_aluno, nome FROM Alunos");
    $students = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $students[] = $row;
    }
    return $students;
}

// Função para buscar disciplinas
function getSubjects() {
    global $db;
    $result = $db->query("SELECT id_disciplina, nome FROM Disciplinas");
    $subjects = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $subjects[] = $row;
    }
    return $subjects;
}
// Função para buscar turmas
function getClasses() {
    global $db;
    $result = $db->query("SELECT id_turma, nome FROM Turmas");
    $classes = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $classes[] = $row;
    }
    return $classes;
}
// Função para adicionar uma nota
function addGrade($id_aluno, $id_disciplina, $nota, $trimestre) {
    global $db;
    $stmt = $db->prepare("
        INSERT INTO Notas (id_aluno, id_disciplina, nota, trimestre)
        VALUES (:id_aluno, :id_disciplina, :nota, :trimestre)
    ");
    $stmt->bindValue(':id_aluno', $id_aluno, SQLITE3_INTEGER);
    $stmt->bindValue(':id_disciplina', $id_disciplina, SQLITE3_INTEGER);
    $stmt->bindValue(':nota', $nota, SQLITE3_FLOAT);
    $stmt->bindValue(':trimestre', $trimestre, SQLITE3_INTEGER);
    return $stmt->execute();
}

// Rotas
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data['action'] === 'addGrade') {
        $success = addGrade($data['id_aluno'], $data['id_disciplina'], $data['nota'], $data['trimestre']);
        echo json_encode(['success' => $success, 'message' => $success ? 'Nota lançada com sucesso!' : 'Erro ao lançar nota.']);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_GET['action'] === 'getStudents') {
        echo json_encode(getStudents());
    } elseif ($_GET['action'] === 'getSubjects') {
        echo json_encode(getSubjects());
    }
}
?>
