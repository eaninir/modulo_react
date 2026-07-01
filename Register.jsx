import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarUsuario = async (e) => {
    e.preventDefault();

    const respuesta = await fetch("https://tudominio.com/api/registro.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await respuesta.json();
    setMensaje(data.message);

    if (data.success) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="contenedor">
      <form onSubmit={registrarUsuario} className="formulario">
        <h2>Crear acceso</h2>

        <input
          type="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Registrarme</button>

        {mensaje && <p>{mensaje}</p>}
      </form>
    </div>
  );
}

export default Register;