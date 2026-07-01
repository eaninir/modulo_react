<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once "conexion.php";

try {
    $consulta = $conexion->prepare("
        SELECT id, titulo, precio, detalle, categoria, accion, imagen
        FROM productos
        ORDER BY id ASC
    ");

    $consulta->execute();

    $productos = $consulta->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($productos, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Error al obtener productos: " . $e->getMessage()
    ]);
}