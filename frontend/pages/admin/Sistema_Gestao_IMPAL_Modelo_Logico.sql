
-- Criando o banco de dados
CREATE DATABASE IF NOT EXISTS impal_gestao_escolar;
USE impal_gestao_escolar;

-- Tabela de Alunos
CREATE TABLE Aluno (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    curso ENUM('Desenhador Projetista', 'Técnico de Obras', 'Técnico de Informática', 'Técnico de Energia e Instalações Elétricas') NOT NULL,
    turno ENUM('Manhã', 'Tarde', 'Noite') NOT NULL
);

-- Tabela de Professores
CREATE TABLE Professor (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela de Disciplinas
CREATE TABLE Disciplina (
    id_disciplina INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    curso ENUM('Desenhador Projetista', 'Técnico de Obras', 'Técnico de Informática', 'Técnico de Energia e Instalações Elétricas') NOT NULL,
    carga_horaria INT NOT NULL
);

-- Tabela de Turmas
CREATE TABLE Turma (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    curso ENUM('Desenhador Projetista', 'Técnico de Obras', 'Técnico de Informática', 'Técnico de Energia e Instalações Elétricas') NOT NULL,
    turno ENUM('Manhã', 'Tarde', 'Noite') NOT NULL
);

-- Tabela de Frequência
CREATE TABLE Frequencia (
    id_frequencia INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_disciplina INT NOT NULL,
    data DATE NOT NULL,
    presenca BOOLEAN NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);

-- Tabela de Notas
CREATE TABLE Nota (
    id_nota INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_disciplina INT NOT NULL,
    avaliacao VARCHAR(50) NOT NULL,
    nota DECIMAL(5, 2) NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);

-- Tabela de Alocação de Professores
CREATE TABLE Alocacao (
    id_alocacao INT AUTO_INCREMENT PRIMARY KEY,
    id_professor INT NOT NULL,
    id_turma INT NOT NULL,
    id_disciplina INT NOT NULL,
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor),
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma),
    FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);
