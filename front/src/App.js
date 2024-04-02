import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 

import Main from "./pages/Main"

import Menu from "./pages/Menu_page.jsx"
import About from "./pages/About"
function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Main />}/>
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
