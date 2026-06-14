function HeaderTienda({ logo }) {
  return (
    <header className="header-tienda">
      <div className="barra-superior">
        <span>🔥 Envíos a todo Chile</span>

        <div className="links-superiores">
          <span>Instagram</span>
          <span>Tienda Física Colón 666 La Serena</span>
          <span>📞 WhatsApp 9 3339 3222</span>
        </div>
      </div>

      <div className="barra-principal">
        <div className="marca">
          <img src={logo} alt="Logo Dale tu Sentido" className="logo-header" />

          <div>
            <h1>DALE TU SENTIDO</h1>
            <p>CHILE</p>
          </div>
        </div>

    
      </div>
    </header>
  );
}

export default HeaderTienda;