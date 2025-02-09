<?php
session_start();
if (!isset($_SESSION['tipo']) || $_SESSION['tipo'] != "Administrador") {
    die("Acesso negado! Somente administradores podem cadastrar novos usuários.");
}
?>
