<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conexion = new mysqli("localhost", "USUARIO_BD", "CLAVE_BD", "NOMBRE_BD");

if ($conexion->connect_error) {
    echo json_encode(["success" => false, "message" => "Error de conexión"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

if (empty($email) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
    exit;
}

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conexion->prepare("INSERT INTO usuarios (email, password) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $passwordHash);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Usuario registrado correctamente"]);
} else {
    echo json_encode(["success" => false, "message" => "El email ya existe o hubo un error"]);
}

$stmt->close();
$conexion->close();
?>