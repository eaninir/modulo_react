import { useState } from "react";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarUsuario = async (e) => {
    e.preventDefault();

    try {
const respuesta = await fetch("https://www.daletusentido.cl/api/registro.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await respuesta.json();

      setMensaje(data.message);

      if (data.success) {
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <section className="registro">
      <h2>Crear acceso</h2>

      <form onSubmit={registrarUsuario} className="formulario-registro">
        <input
          type="email"
          placeholder="Ingrese su correo"
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

        <button type="submit">Crear cuenta</button>
      </form>

      {mensaje && <p className="mensaje-registro">{mensaje}</p>}
    </section>
  );
}

export default Registro;