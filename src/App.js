import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { FaGithub } from "react-icons/fa";


import './App.css';

function App() {
  return (
    <>
      <div className="section-hero">
        <h1>¡Hola! mi nombre es Alejandro Torres</h1>
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

          <h3 className="project-title">The Linkin' Tool</h3>
          <div className="divider"></div>
          
          <p className="project-subtitle">Software para la planificación de enlaces PTP</p>
          <p className="project-tech">React JS + HTML5 + CSS + API + Ingeniería Telecomunicaciones</p>


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
          <h3 className="project-title">The Linkin' Tool</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Software para la planificación de enlaces PTP</p>
          <p className="project-tech">React JS + HTML5 + CSS + API + Ingeniería Telecomunicaciones</p>
        </div>
        <div className="right">
          
          <h3 className="project-title">The Linkin' Tool</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Software para la planificación de enlaces PTP</p>
          <p className="project-tech">React JS + HTML5 + CSS + API + Ingeniería Telecomunicaciones</p>


        </div>
      </div>

      <div className="section section-3">
        <div className="left">
       <h3 className="project-title">The Linkin' Tool</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Software para la planificación de enlaces PTP</p>
          <p className="project-tech">React JS + HTML5 + CSS + API + Ingeniería Telecomunicaciones</p>


          </div>
        <div className="right">

         <h3 className="project-title">The Linkin' Tool</h3>
          <div className="divider"></div>
          <p className="project-subtitle">Software para la planificación de enlaces PTP</p>
          <p className="project-tech">React JS + HTML5 + CSS + API + Ingeniería Telecomunicaciones</p>


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
