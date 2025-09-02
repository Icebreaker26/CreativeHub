import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { FaGithub } from "react-icons/fa";


import './App.css';

function App() {
  return (
    <>
      <div className="section-hero">
        <h1>¡Hola! Soy Alejandro Torres</h1>
        <div className="divider"></div>
        
        <div className="content">
          <p>
            ¡Bienvenido a mi portafolio profesional! <br />
            Aquí encontrarás una selección de proyectos en programación,
            desarrollo web, análisis de datos e ingeniería de sistemas, que
            reflejan mis habilidades técnicas, capacidad de resolución de
            problemas y experiencia en la creación de soluciones digitales
            integrales.
          </p>
          <div className="btn-container">
            <Button variant="outline-light" style={{ width: "30%" }}>
              Sobre Mi
            </Button>
          </div>
        </div>
      </div>

  <svg className="background-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 600" preserveAspectRatio="none">
  <path 
  d="M 3 0 L 3 190 L 99 190 L 99 418 L 2 418 L 2 600" 
  stroke="white" 
  strokeWidth="1" 
  fill="none" 
  vectorEffect="non-scaling-stroke"
  />

  </svg>

  

      <div className="section section-1">
        <div className="left">

          <h3 className="project-title">Cooperativa Progresemos</h3>
          <div className="divider"></div>
          
          <p className="project-subtitle">WordPress y Análisis de Datos</p>
          <p className="project-tech">WordPress + Elementor + Excel + Jupyter Notebook</p>


        </div>
        <div className="right">
          <h3 className="project-title">The Linkin' Tool</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Software para la planificación de enlaces PTP</p>
          <p className="project-tech">React JS + HTML5 + CSS + API + Ingeniería Telecomunicaciones</p>

        </div>
      </div>

      <div className="section section-2">
        <div className="left">
          <h3 className="project-title">Data Analyst</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Exploración de datos históricos sobre la penetración de Internet en Colombia entre 2016 y 2023</p>
          <p className="project-tech">Python + Pandas + Jupyter Notebook + Matplotlib</p>
        </div>
        <div className="right">
          
          <h3 className="project-title">Pruebas de Concepto</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Una colección de experimentos y proyectos que exploran diversas áreas.</p>
          <p className="project-tech">React JS + HTML5 + CSS + API + Python + Jupyter Notebook </p>


        </div>
      </div>

      <div className="section section-3">
        <div className="left">
       <h3 className="project-title">Pereira En Guerra</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Demo de videojuego 2D estilo Run and Gun ambientado en Pereira post apocalíptica. </p>
          <p className="project-tech">Unity (EN DESARROLLO)</p>


          </div>
        <div className="right">

         <h3 className="project-title">Optimización de Producción Ganadera con ML y Visión por Computador</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Plataforma de análisis y visualización de datos para mejorar la producción de carne mediante modelos predictivos y control inteligente.</p>
          <p className="project-tech">JavaScript + Python + Machine Learning + Computer Vision (EN DESARROLLO)</p>


        </div>
      </div>

      
        <footer>
          <p>Alejandro Torres</p>
            <a 
          href="https://github.com/Icebreaker26" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "2vw", textDecoration: "none" }}
        >
          <FaGithub/> Icebreaker26
        </a>
        </footer> 
      
    </>
  );
}

export default App;
