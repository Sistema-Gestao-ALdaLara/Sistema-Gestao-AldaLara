<?php
include 'config.php';
function query($sql) {
 global $conn;
 return $conn->query($sql);
}
?>