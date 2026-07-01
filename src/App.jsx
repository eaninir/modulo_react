import { useEffect, useState } from "react";
import "./App.css";
import HeaderTienda from "./components/HeaderTienda.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./components/ProductList.jsx";
import logo from "./assets/logo.png";
import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

function App() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos");
        }
        return respuesta.json();
      })
      .then((data) => {
        setProductos(data.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  const categorias = [
    "Todos",
    ...new Set(productos.map((producto) => producto.category)),
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === "Todos" ||
      producto.category === categoriaSeleccionada;

    const textoBusqueda = busqueda.toLowerCase();

    const coincideBusqueda =
      producto.title.toLowerCase().includes(textoBusqueda) ||
      producto.description.toLowerCase().includes(textoBusqueda) ||
      producto.category.toLowerCase().includes(textoBusqueda);

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <>
      <HeaderTienda logo={logo} />

      <main className="pagina">
        <h1 className="titulo-principal">Productos</h1>
        <p className="subtitulo-principal">Explora nuestra colección y encuentra lo que buscas</p>

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

        {cargando && <Loader />}

        {error && <ErrorMessage mensaje={error} />}

        {!cargando && !error && (
          <ProductList productos={productosFiltrados} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;