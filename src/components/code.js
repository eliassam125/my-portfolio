import './code.css'
import Gallery from './gallery';
import uni1 from './img/estudios-uni1.png'
import uni2 from './img/estudios-uni2.png'
import uni3 from './img/estudios-uni3.png'


function Code() {
  
  
  
  return ( 
  <div className='code'>
    <h1>projectos de codigo</h1>
    <div className='excercise-container'>
      <div className='excercise-site'>
        <img src={uni1} className='excercise-img'/><p className='excercise-text'>5</p>
      </div>
      <div className='excercise-site'>
        <img src={uni1} className='excercise-img'/><p className='excercise-text'>5</p>
      </div>
    </div>
    <div className='pro-container'>
          <img src={uni1} className='pro-logo'/>
          <div className='gallery'>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
          </div>
          <img src={uni1} className='pro-logo'/>
          <div className='gallery'>
          <Gallery slideImages={[uni1,uni2,uni3]}/>
          </div>
    </div>

    
  </div>
)

}

export default Code;