
import './home.css';
import  myfoto from './img/imgHome/my_foto_home_page.png';

function Home() {
  return (
    <div className='home'>
         <div className='name'>Elias Palavecino</div>
         <div className='titles'>Data Science | Web developer | Computer Engineer</div>
         <div className='photo'><img src={myfoto} className='mi_foto'></img></div>
         
    </div>
  );
}

export default Home;
