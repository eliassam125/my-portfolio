import logo from './logo.svg';
import './App.css';
import  myfoto from './components/img/my_foto_home_page.png';

function App() {
  return (
    <div className='app'>
         <div className='name'>Elias Palavecino</div>
         <div className='titles'>Data Science | Data Analyst | Computer Engineer</div>
         <div className='photo'><img src={myfoto} className='mi_foto'></img></div>
         <div className='translator'>ingles | español</div>
    </div>
  );
}

export default App;
