
import './home.css';
import  myfoto from './img/my_foto_home_page.png';

function Home() {
  return (
    <div className='home'>
         <div className='name'>Elias Palavecino</div>
         <div className='titles'>Data Science | Data Analyst | Computer Engineer</div>
         <div className='photo'><img src={myfoto} className='mi_foto'></img></div>
         
    </div>
  );
}

export default Home;
