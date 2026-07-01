<?php

$host = "localhost";
$dbname = "dale_tu_sentido";
$user = "root";
$password = "";

try {
    $conexion = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $user,
        $password
    );

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Error de conexión: " . $e->getMessage()
    ]);
    exit;
}