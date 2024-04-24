import './estudios.css'
import escudo from './img/escudo-uni.png'
import Gallery from './gallery';
function Estudios() {
    return (
      <div className='estudios'>
        <h1 className='titulo'>Estudios</h1>
        <div className='estudios-uni'>
          <img src={escudo}/><p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='gallery-percentage'>
          <Gallery/>
          <Gallery/>
          <Gallery/>
          <Gallery/>

          <img className='percentage' src={escudo}/>
        </div>
        <Gallery/>
          <Gallery/>
          <Gallery/>
          <Gallery/>
       
      </div>
  );
}

export default Estudios;