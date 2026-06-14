function Header({ logo }) {
  return (
    <header className="tienda-header">
      <div className="barra-superior">
        <span>🔥 Envíos a todo Chile</span>

        <div className="barra-superior-links">
          <span>Instagram</span>
          <span>Tienda Física Colón 666 La Serena</span>
          <span>📞 WhatsApp 9 3339 3222</span>
        </div>
      </div>

      <div className="barra-principal">
        <div className="marca-tienda">
          <img src={logo} alt="Dale tu Sentido" className="logo-tienda" />

          <div className="texto-marca">
            <h1>DALE TU SENTIDO</h1>
            <p>CHILE</p>
          </div>
        </div>

        <nav className="menu-tienda">
          <a href="#">Día del Padre</a>
          <a href="#">Rosas de Jabón</a>
          <a href="#">Bandejas</a>
        </nav>

        <div className="acciones-header">
          <div className="buscador">
            <input type="text" placeholder="Buscar productos..." />
            <button>🔍</button>
          </div>

          <span>👤</span>
          <span>🛒</span>
          <span>☀️</span>
        </div>
      </div>
    </header>
  );
}

export default Header;