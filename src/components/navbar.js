
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
                <p className='texto'>hola la rechoncha de tu hermana
                <a href="/"
                className='link-texto'>link</a>
                </p>
              </a>
            </div>
          </div>

          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={estudioslogo}
                className='logo'/>
                <p className='texto'>hola la rechoncha de tu hermana
                <a href="/Estudios"
                className='link-texto'>link</a>
                </p>
             </a>
            </li>
          </div>
          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={codelogo}
                className='logo'/>
                <p className='texto'>hola la rechoncha de tu hermana
                <a href="/Code"
                className='link-texto'>link</a>
                </p>
              </a>
            </li>
          </div>
          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={maillogo}
                className='logo'/>
                <p className='texto'>hola la rechoncha de tu hermana
                <a href="/Contacto"
                className='link-texto'>link</a>
                </p>
              </a>
            </li>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
