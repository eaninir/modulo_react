import Boton from "./Boton.jsx";

function ProductCard({ imagen, titulo, precio, detalle, categoria, accion }) {
  return (
    <article className="tarjeta-producto">
      {imagen ? (
        <img
          src={imagen}
          alt={titulo}
          className="imagen-producto"
        />
      ) : (
        <div className="imagen-producto imagen-no-encontrada">
          Imagen no encontrada
        </div>
      )}

      <div className="contenido-tarjeta">
        <h2 className="titulo-tarjeta">{titulo}</h2>
        <p className="precio-tarjeta">{precio}</p>
        <p className="detalle-tarjeta">{detalle}</p>
        <p className="categoria-tarjeta">Categoría: {categoria}</p>

        <Boton
          variant="primary"
          onClick={() => alert(`Seleccionaste: ${titulo}`)}
        >
          🛒 {accion}
        </Boton>
      </div>
    </article>
  );
}

export default ProductCard;