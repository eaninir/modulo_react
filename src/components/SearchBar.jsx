function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="searchbar-productos">
      <label htmlFor="busqueda">Buscar producto:</label>

      <input
        id="busqueda"
        type="text"
        placeholder="Escribe el nombre del producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;