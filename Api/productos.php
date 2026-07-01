<?php

header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$dbname ="daletus1_Tienda";
$user = "daletus1";
$password = "qdV87(5,H8";

try {
    $conexion = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $user,
        $password
    );

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $consulta = $conexion->prepare("
        SELECT id, titulo, precio, detalle, categoria, accion, imagen
        FROM productos
        ORDER BY id ASC
    ");

    $consulta->execute();

    $productos = $consulta->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($productos, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {
    http_response_code(500);

    echo json_encode([
        "error" => "Error en productos.php",
        "mensaje" => $e->getMessage(),
        "archivo" => $e->getFile(),
        "linea" => $e->getLine()
    ], JSON_UNESCAPED_UNICODE);
}