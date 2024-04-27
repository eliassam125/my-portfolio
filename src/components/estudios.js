import './estudios.css'
import escudo from './img/escudo-uni.png'
import percentage31 from './img/31-percentage.png'
import Gallery from './gallery';
import uni1 from './img/estudios-uni1.png'
import uni2 from './img/estudios-uni2.png'
import uni3 from './img/estudios-uni3.png'
import kagglelogo from './img/kaggle-logo.png'
function Estudios() {
    return (
      <div className='estudios'>
        <h1 className='titulo'>Estudios</h1>
        <div className='estudios-uni'>
          <img src={escudo}/><p className='text-uni'>Estudio Ingeniería en Computación en la Universidad Nacional de Cordoba,
             es una carrera que integra conocimientos de ciencias electrónicas, tecnología de la información,
             matemáticas y física. Va más allá de la programación, abarcando el diseño y desarrollo de software,
             así como la implementación de soluciones tecnológicas avanzadas. Genera un espectro de habilidades para abordar
             proyectos con rigurosidad técnica, apoyados en una base sólida de conocimientos en ciencia.</p>
        </div>
        <div className='gallery-percentage'>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
          <img className='percentage' src={percentage31}/>
        </div>
        <div className='site-container'>
          <img src={kagglelogo} className='site-logo'/>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
        </div>
        <div className='site-container'>
          <img src={kagglelogo} className='site-logo'/>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
        </div>
        <div className='site-container'>
          <img src={kagglelogo} className='site-logo'/>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
        </div>
        <div className='site-container'>
          <img src={kagglelogo} className='site-logo'/>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
        </div>

      </div>
  );
}

export default Estudios;