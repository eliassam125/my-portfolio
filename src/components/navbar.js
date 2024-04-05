
import './navbar.css';
import  homelogo from "./img/home (1).png";
import  estudioslogo from "./img/hot-coffee.png";
import  codelogo from "./img/statistics.png";
import  maillogo from "./img/mail-contact.png";

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
                <a href="/my-portfolio"
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
                <p className='texto'>Estudios Universitarios, Lecturas Destacadas, Cursos en Línea, Idiomas y Otros Logros.
                <a href="/my-portfolio/Estudios"
                className='link-texto'> click</a>
                </p>
             </a>
            </li>
          </div>
          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={codelogo}
                className='logo'/>
                <p className='texto'>Projectos de Codigo de Ciencias de Datos, Analisis de Datos e Ingenieria, asi como Ejercicios.
                <a href="/my-portfolio/Code"
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
                <p className='texto'>Comunícate conmigo: Mail, Whatsapp, LinkedIn, Workana, Fiverr y más.
                <a href="/my-portfolio/Contacto"
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
