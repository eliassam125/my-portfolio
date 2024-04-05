import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Code from './components/code';
import Estudios from './components/estudios';
import Contacto from './components/contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/my-portfolio' element={<Home/>}/>
        <Route path='/my-portfolio/Code' element={<Code/>}/>
        <Route path='/my-portfolio/Estudios' element={<Estudios/>}/>
        <Route path='/my-portfolio/Contacto' element={<Contacto/>}/>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
