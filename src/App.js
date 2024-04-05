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
        <Route path='' element={<Code/>}/>
        <Route path='' element={<Estudios/>}/>
        <Route path='' element={<Contacto/>}/>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
