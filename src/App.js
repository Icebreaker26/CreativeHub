import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { FaGithub } from "react-icons/fa";
import Principal from './components/Principal.js';

import { useState } from 'react';

import './App.css';
import About from './components/About.js';
import Cooperativa from './components/Cooperativa.js';
import LinkinTool from './components/LinkinTool.js';
import DataScience from './components/DataScience.js';
import Pruebas from './components/Pruebas.js';
import Contacto from './components/Contacto.js';

function App() {
  
      
      const [paginaActiva, setPaginaActiva] = useState("Principal");

      // Función para cambiar de página
        const irAPagina = (pagina) => {
          setPaginaActiva(pagina);
        };
  
  

  
  return (
    <>

      {paginaActiva === "Principal" && <Principal irAPagina={irAPagina} />}
      {paginaActiva === "About" && <About irAPagina={irAPagina} />}
      {paginaActiva === "Cooperativa" && <Cooperativa irAPagina={irAPagina} />}
      {paginaActiva === "LinkinTool" && <LinkinTool irAPagina={irAPagina} />}
      {paginaActiva === "DataScience" && <DataScience irAPagina={irAPagina} />}
      {paginaActiva === "Pruebas" && <Pruebas irAPagina={irAPagina} />}
      {paginaActiva === "Contacto" && <Contacto irAPagina={irAPagina} />}
    </>
  );
}

export default App;
