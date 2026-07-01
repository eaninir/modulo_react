function ErrorMessage({ mensaje }) {
  return (
    <div className="error-contenedor">
      <p className="error-icono">⚠️</p>
      <p className="error-texto">{mensaje}</p>
    </div>
  );
}

export default ErrorMessage;
