import './about.css';
import Button from 'react-bootstrap/Button';
import { SiChartdotjs, SiReact, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiMysql, SiPython, SiMongodb, SiJupyter } from "react-icons/si";
import { FaNodeJs, FaGithub, FaUniversity, FaLinkedin   } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { DiScrum } from "react-icons/di";
import { CgInfinity } from "react-icons/cg";
import { RiFileExcel2Line } from "react-icons/ri";
import { PiBankBold } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";
import { CgMail } from "react-icons/cg";


import ProgressBar from 'react-bootstrap/ProgressBar';


const About = ({irAPagina}) => {
    return (
        <>

<div className="section-hero">
        <h1>¡Hola! Soy Alejandro Torres</h1>
        <div className="divider"></div>
        
        <div className="content">
          <p>
          
          Estudiante de Ingeniería de Sistemas y Telecomunicaciones. Me apasiona la tecnología, el desarrollo de software y la forma en que las herramientas digitales pueden transformar la vida de las personas. A lo largo de mis proyectos he combinado mi interés por la programación, la innovación y el trabajo en equipo para crear soluciones prácticas con impacto real.

          </p>
          <div className="btn-container">
            <Button variant="outline-light" style={{ width: "30%" }} onClick={() => irAPagina("Principal")}>
              Volver a Inicio
            </Button>
          </div>
        </div>
      </div>

      <div className="sectionLink" >
        <h1 style={{fontWeight:"700"}}>Skills</h1>
        <h2 style={{fontWeight:"400"}}>Desarrollo Frontend</h2>

  <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", paddingTop:"3vh", paddingBottom:"3vh" }}>
  <div>
    <SiHtml5 size={40} />
    <p>HTML5</p>
  </div>
  <div>
    <SiCss3 size={40} />
    <p>CSS3</p>
  </div>
  <div>
    <SiBootstrap size={40} />
    <p>Bootstrap</p>
  </div>
  <div>
    <SiJavascript size={40} />
    <p>JavaScript</p>
  </div>
  <div>
    <SiReact size={40} />
    <p>React</p>
  </div>

</div>

  <h2 style={{fontWeight:"400"}}>Desarrollo Backend</h2>

  <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", paddingTop:"3vh", paddingBottom:"3vh" }}>
  <div>
  <FaNodeJs size={40} />
    <p>Node JS</p>
  </div>
  <div>
    <SiMongodb size={40} />
    <p>MONGO DB</p>
  </div>
  <div>
    <SiMysql size={40} />
    <p>SQL</p>
  </div>
  <div>
    <SiPython size={40} />
    <p>Python</p>
  </div>
  <div>
    <AiOutlineApi size={40} />
    <p>API REST</p>
  </div>
  
</div>

        <h2 style={{fontWeight:"400"}}>Gestión de Proyectos</h2>

  <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", paddingTop:"3vh", paddingBottom:"3vh" }}>
  <div>
    <FaGithub size={40} />
    <p>GIT</p>
  </div>
  <div>
    <DiScrum size={40} />
    <p>SCRUM</p>
  </div>
  <div>
    <CgInfinity size={40} />
    <p>DevOps</p>
  </div>
  
</div>

<h2 style={{fontWeight:"400"}}>Análisis de Datos</h2>

  <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", paddingTop:"3vh", paddingBottom:"3vh" }}>
  <div>
    <SiJupyter size={40} />
    <p>Jupyter Notebook</p>
  </div>
  <div>
    <RiFileExcel2Line size={40} />
    <p>EXCEL</p>
  </div>

  
</div>
        
</div>  
<div className='formacionAcademica' style={{width:"100vw", backgroundColor:"#001d3d", paddingTop:"3vh", paddingBottom:"3vh", marginTop:"5vh", color:"white", paddingLeft:"2vw", paddingRight:"2vw"}}>
              <h1 style={{fontWeight:"700", paddingLeft:"8vw"}}>Formación Académica</h1>
                      <div className="dividerFor"></div>
                      <div style={{textAlign:"center", paddingTop:"3vh", paddingBottom:"3vh"}}>

                      <FaUniversity size={60} />
              <h4 style={{fontWeight:"300"}}>Ingeniería de Sistemas y Telecomunicaciones</h4> 
              <h5 style={{fontWeight:"100", fontStyle:"italic"}}>Universidad Católica de Pereira</h5> 
              <h5 style={{fontWeight:"100", fontStyle:"italic"}}>2022 - Presente</h5>

                      </div>

                      <div className="dividerFor"></div>
                      <div style={{textAlign:"center", paddingTop:"3vh", paddingBottom:"3vh"}}>

                      <PiBankBold size={60} />
              <h4 style={{fontWeight:"300"}}>Técnico en Asesoría Comercial y Operaciones de Entidades Financieras </h4> 
              <h5 style={{fontWeight:"100", fontStyle:"italic"}}>SENA</h5> 
              <h5 style={{fontWeight:"100", fontStyle:"italic"}}>2020 - 2021</h5>

                      </div>
                      <div className="dividerFor"></div>
                      <div style={{textAlign:"center", paddingTop:"3vh", paddingBottom:"3vh"}}>

                      <IoSchool size={60} />
              <h4 style={{fontWeight:"300"}}>Bachiller Comercial </h4> 
              <h5 style={{fontWeight:"100", fontStyle:"italic"}}>Institución Educativa Nuestra Señora de la Presentación</h5> 
              <h5 style={{fontWeight:"100", fontStyle:"italic"}}>2010 - 2021</h5>

                      </div>


</div>

      <div className="sectionLink" >
        <h1 style={{fontWeight:"700"}}>Idiomas</h1>
        <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", paddingTop:"3vh", paddingBottom:"3vh" }}>
  <div style={{width:"40%"}}>
        <h2 style={{fontWeight:"400"}}>Ingles B2</h2>
    <ProgressBar now={80} size={70}/>
  </div>
  <div style={{width:"40%"}}>
        <h2 style={{fontWeight:"400", whiteSpace: "nowrap" }}>Español Nativo</h2>
    <ProgressBar now={100} size={70}/>
  </div>
  
</div>

        <h1 style={{fontWeight:"700", paddingTop:"5vh"}}>Contacto</h1>
        <h3 style={{fontWeight:"400", fontStyle:"italic", textAlign:"center"}}>¿Quieres ponerte en contacto conmigo?</h3>
<p style={{fontWeight:"200", textAlign:"center", width:"80%", marginLeft:"10%", marginRight:"10%", color:"black"}}>
Si quieres conocer más sobre mi trabajo, colaborar en un proyecto o simplemente intercambiar ideas, estaré encantado de escucharte.
Puedes escribirme directamente por correo o conectarte conmigo en mis redes profesionales.</p>
      <div style={{textAlign:"center", paddingTop:"3vh", paddingBottom:"3vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>

        <a 
          href="mailto:alejandro.torres0826@gmail.com?subject=Contacto&body=Hola%20Alejandro"
          target="_blank"
          style={{ 
            textDecoration: "none", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            color: "inherit" 
          }}
        >
          <CgMail size={60} />
          <h4 style={{ fontWeight: 300, textAlign: "center", margin: "0.5rem 0 0" }}>
            alejandro.torres0826@gmail.com
          </h4>
        </a>


      <a 
          href="https://www.linkedin.com/in/alejandrotorres26/"
          target="_blank"
          style={{ 
            textDecoration: "none", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            color: "inherit", 
            paddingTop:"3vh"
          }}
        >
          <FaLinkedin size={60} />
          <h4 style={{ fontWeight: 300, textAlign: "center", margin: "0.5rem 0 0" }}>
            alejandrotorres26
          </h4>
        </a>


      </div>
      </div>

        </>
    )
}

export default About;