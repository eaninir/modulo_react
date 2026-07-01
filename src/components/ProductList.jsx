import ProductCard from "./ProductCard.jsx";

function ProductList({ productos }) {
  return (
    <div className="contenedor-tarjetas">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          imagen={producto.thumbnail}
          titulo={producto.title}
          precio={`$${producto.price}`}
          detalle={producto.description}
          categoria={producto.category}
          accion="Agregar al carrito"
        />
      ))}
    </div>
  );
}

export default ProductList;