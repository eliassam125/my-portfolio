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
        <Route index element={<Home/>}/>
        <Route path='/Code' element={<Code/>}/>
        <Route path='/Estudios' element={<Estudios/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
