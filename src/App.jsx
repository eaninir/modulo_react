import { useState } from "react";
import "./App.css";
import HeaderTienda from "./components/HeaderTienda.jsx";
import Tarjeta from "./components/Tarjeta.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Footer from "./components/Footer.jsx";
import logo from "./assets/logo.png";
import productos from "./data/productos.json";

const imagenes = import.meta.glob(
  "./assets/img/*.{png,jpg,jpeg,gif,webp,svg,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

function obtenerImagen(nombreImagen) {
  return imagenes[`./assets/img/${nombreImagen}`];
}

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const categorias = [
    "Todos",
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === "Todos" ||
      producto.categoria === categoriaSeleccionada;

    const textoBusqueda = busqueda.toLowerCase();

    const coincideBusqueda =
      producto.titulo.toLowerCase().includes(textoBusqueda) ||
      producto.detalle.toLowerCase().includes(textoBusqueda) ||
      producto.categoria.toLowerCase().includes(textoBusqueda);

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <>
      <HeaderTienda logo={logo} />

      <main className="pagina">
        <h1 className="titulo-principal">Productos</h1>

        <section className="barra-filtros">
          <div className="filtro-categoria">
            <label htmlFor="categoria">Filtrar por categoría:</label>

            <select
              id="categoria"
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>

          <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
        </section>

        <div className="contenedor-tarjetas">
          {productosFiltrados.map((producto) => (
            <Tarjeta
              key={producto.id}
              imagen={obtenerImagen(producto.imagen)}
              titulo={producto.titulo}
              precio={producto.precio}
              detalle={producto.detalle}
              categoria={producto.categoria}
              accion={producto.accion}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;