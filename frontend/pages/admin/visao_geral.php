
<?php
include 'db_connection.php';

// Obter informações gerais do sistema
$total_alunos = $conn->query("SELECT COUNT(*) as total FROM alunos")->fetch_assoc()['total'];
$total_professores = $conn->query("SELECT COUNT(*) as total FROM professores")->fetch_assoc()['total'];
$total_faltas = $conn->query("SELECT COUNT(*) as total FROM faltas")->fetch_assoc()['total'];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visão Geral</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Visão Geral</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="card text-white bg-success mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Total de Alunos</h5>
                        <p class="card-text"><?php echo $total_alunos; ?></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-white bg-warning mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Total de Professores</h5>
                        <p class="card-text"><?php echo $total_professores; ?></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-white bg-danger mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Total de Faltas</h5>
                        <p class="card-text"><?php echo $total_faltas; ?></p>
                    </div>
                </div>
            </div>
        </div>
        <a href="index.php" class="btn btn-primary">Voltar</a>
    </div>
</body>
</html>
