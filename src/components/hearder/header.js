
import './header.css'

function Header() {
  return (
    <div className='container header'>
      <div className='header-logo'>
        <a className='link' href='#'><h1 >LOGO</h1></a>


      </div>

      <nav class="header-nav">

        <a className='link' href="#">Inicio</a>
        <a className='link' href="Nosotros">Nosotros</a>
        <a className='link' href="Contacto">Contacto</a>
        <a className='link' href="Carrito">Carrito</a>

      </nav>
    </div>

  );
}

export default Header;