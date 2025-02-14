<?php
header("Content-Type: application/json");
require_once 'database.php'; // Arquivo de conexão com o banco de dados

// Função para buscar as notas de um aluno
function getStudentGrades($id_aluno) {
    global $db;
    $stmt = $db->prepare("
        SELECT Disciplinas.nome AS nome_disciplina, Notas.nota, Notas.trimestre
        FROM Notas
        JOIN Disciplinas ON Notas.id_disciplina = Disciplinas.id_disciplina
        WHERE Notas.id_aluno = :id_aluno
    ");
    $stmt->bindValue(':id_aluno', $id_aluno, SQLITE3_INTEGER);
    $result = $stmt->execute();
    $grades = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $grades[] = $row;
    }
    return $grades;
}

// Rotas
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_GET['action'] === 'getStudentGrades' && isset($_GET['id_aluno'])) {
        echo json_encode(getStudentGrades($_GET['id_aluno']));
    }
}
?>
