import './contacto.css'
import  telefono from "./img/mail-contact.png";
import  whatsapp from "./img/mail-contact.png";


function Contacto() {
    return (
      <div className='contacto'>
        <h1 className='titulo'>contacto</h1>
        <div className='telefono-barra'>
          <img src={telefono}/> <p className='number'>3876404816</p> <img src={whatsapp}/>
        </div>
        




      </div>

  );
}

export default Contacto;