import './estudios.css'
import escudo from './img/imgEstudios/escudo-uni.png'
import percentage31 from './img/imgEstudios/31-percentage.png'
import Gallery from './gallery';
import uni1 from './img/imgEstudios/universidad-1.png'
import uni2 from './img/imgEstudios/universidad-2.png'
import uni3 from './img/imgEstudios/universidad-3.png'
import kagglelogo from './img/imgEstudios/kaggle-logo.png'
function Estudios() {
    return (
      <div className='estudios'>
        <h1 className='titulo'>Estudios</h1>
        <div className='estudios-uni'>
          <img src={escudo} className='escudo'/><p className='text-uni'>Estudio Ingeniería en Computación en la Universidad Nacional de Cordoba,
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
          <div className='gallery'>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
          </div>
        </div>
        <div className='site-container'>
          <img src={kagglelogo} className='site-logo'/>
          <div className='gallery'>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
          </div>
        </div>
        <div className='site-container'>
          <img src={kagglelogo} className='site-logo'/>
          <div className='gallery'>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
          </div>
        </div>
        <div className='site-container'>
          <img src={kagglelogo} className='site-logo'/>
          <div className='gallery'>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
          </div>
        </div>

      </div>
  );
}

export default Estudios;