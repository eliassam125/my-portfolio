import './code.css'
import Gallery from './gallery';
import uni1 from './img/estudios-uni1.png'
import uni2 from './img/estudios-uni2.png'
import uni3 from './img/estudios-uni3.png'
import leetcode from './img/imgCode/LeetCode_Logo.png'
import excercism from './img/imgCode/Exercism-logo.png'


function Code() {
  
  
  
  return ( 
  <div className='code'>
    <h1>projectos de codigo</h1>
    <div className='excercise-container'>
      <div className='excercise-site'>
        <img src={leetcode} className='excercise-img'/>
        <p className='excercise-text'>
        <a href='https://leetcode.com/u/EliasSam125/'>link a mi perfil</a>  
        <br/>
        ejercicios resueltos : 5</p>
      </div>
      <div className='excercise-site'>
        <img src={excercism} className='excercise-img'/>        
        <p className='excercise-text'>
        <a href='https://exercism.org/profiles/Elias125'>link a mi perfil</a>  
        <br/>
        ejercicios resueltos : 15</p>
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