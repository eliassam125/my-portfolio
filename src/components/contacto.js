import './contacto.css'
import  cellphone from "./img/imgContact/smartphone.png";
import  whatsapp from "./img/imgContact/whatsapp.png";
import  gmail from "./img/imgContact/gmail.png";
import  linkedin from "./img/imgContact/linkedin.png";
import  github from "./img/imgContact/github.png";
import  upwork from "./img/imgContact/upwork.png";
import  fiverr from "./img/imgContact/fiverr.png";



function Contacto() {
    return (
      <div className='contacto'>
        <h1 className='titulo'>contacto</h1>
        <div className='telefono-barra'>
          <img src={cellphone} className='social-logo'/> <p className='number'>(+54) 3876-404816 </p> <img src={whatsapp} className='social-logo'/>
        </div>
        <div className='mail-barra'>
          <img src={gmail} className='social-logo'/> <p className='number'>eliaspalavecino125@gmail.com</p> 
        </div>
        <div className='socialmedia-barra'>
          <div className='social-block'>
            <img src={linkedin} className='social-logo'/> <a href="https://linkedin.com/in/elias-samuel-palavecino-34978422b" className='link-text'>LinkedIn</a> 
          </div>
          <div className='social-block'>
            <img src={github} className='social-logo'/> <a href="https://github.com/eliassam125" className='link-text'>Github</a>
          </div>
          <div className='social-block'>
            <img src={upwork} className='social-logo'/> <a href="https://www.upwork.com/freelancers/~01d267d9c66ec8e14e?mp_source=share" className='link-text'>UpWork</a> 
          </div>
          <div className='social-block'>
            <img src={fiverr} className='social-logo'/> <a href="https://www.fiverr.com/elias_sam125" className='link-text'>Fiverr</a> 
          </div>
          
        </div>
        
        




      </div>

  );
}

export default Contacto;