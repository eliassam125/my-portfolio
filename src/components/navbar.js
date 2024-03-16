
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
                <span></span>
              </a>
            </div>
          </div>

          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={estudioslogo}
                className='logo'/>
                <span></span>
             </a>
            </li>
          </div>
          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={codelogo}
                className='logo'/>
                <span></span>
              </a>
            </li>
          </div>
          <div className='nav'>
            <li className='item'>
              <a className='link'>
                <img src={maillogo}
                className='logo'/>
                <span></span>
              </a>
            </li>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
