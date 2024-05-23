
import './navbar.css';
import  homelogo from "./img/imgNavbar/home (1).png";
import  estudioslogo from "./img/imgNavbar/hot-coffee.png";
import  codelogo from "./img/imgNavbar/statistics.png";
import  maillogo from "./img/imgNavbar/mail-contact.png";

function Navbar() {
  return (
    <div>
        <nav className="navbar">
          <div className='nav'>
            <div className='item'>
              <a className='link'>
                <img src={homelogo}
                className='logo'/>
                <p className='texto'>Pagina de Inicio / Home Page.
                <a href="/my-portfolio/#/Home"
                className='link-texto'> click</a>
                </p>
              </a>
            </div>
          </div>

          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={estudioslogo}
                className='logo'/>
                <p className='texto'>Estudios Universitarios, Cursos, Idiomas y Otros Logros.
                <a href="/my-portfolio/#/Estudios"
                className='link-texto'> click</a>
                </p>
             </a>
            </li>
          </div>
          <div className='nav'>
            <li className='item' >
              <a className='link' >
                <img src={codelogo} 
                className='logo'/>
                <p className='texto'>Projectos de Codigo e Ingenieria, asi como Ejercicios.
                <a href="/my-portfolio/#/Code"
                className='link-texto'> click</a>
                </p>
              </a>
            </li>
          </div>
          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={maillogo}
                className='logo'/>
                <p className='texto'>Comunícate conmigo: Mail, Whatsapp y más.
                <a href="/my-portfolio/#/Contacto"
                className='link-texto'> click</a>
                </p>
              </a>
            </li>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
