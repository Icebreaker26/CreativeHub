import Button from 'react-bootstrap/Button';

import previewlinkin1 from "../imagenes/previewlinkin1.png"
import previewradiacion1 from "../imagenes/previewradiacion1.png"
import previewradiacion2 from "../imagenes/previewradiacion2.png"

import previewammunation1 from "../imagenes/previewammunation1.png"
import previewammunation2 from "../imagenes/previewammunation2.png"
import previewammunation3 from "../imagenes/previewammunation3.png"
import previewammunation4 from "../imagenes/previewammunation4.png"
import previewammunation5 from "../imagenes/previewammunation5.png"
import previewammunation6 from "../imagenes/previewammunation6.png"

import previewcove1 from "../imagenes/previewcove1.png"
import previewcove2 from "../imagenes/previewcove2.png"
import previewcove3 from "../imagenes/previewcove3.png"
import previewcove4 from "../imagenes/previewcove4.png"
import previewcove5 from "../imagenes/previewcove5.png"
import previewcove6 from "../imagenes/previewcove6.png"
import previewcove7 from "../imagenes/previewcove7.png"
import previewcove8 from "../imagenes/previewcove8.png"

import previewcampus1 from "../imagenes/previewcampus1.png"
import previewcampus2 from "../imagenes/previewcampus2.jpg"
import previewcampus3 from "../imagenes/previewcampus3.png"
import previewcampus4 from "../imagenes/previewcampus4.png"
import previewcampus5 from "../imagenes/previewcampus5.png"
import previewradio1 from "../imagenes/previewradio1.png"

import previewsuperdiesel1 from "../imagenes/previewsuperdiesel1.png"
import previewsuperdiesel2 from "../imagenes/previewsuperdiesel2.png"
import previewsuperdiesel3 from "../imagenes/previewsuperdiesel3.png"


import { SiChartdotjs, SiReact, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiMysql, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaAngular  } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";

import { IoOpenOutline } from "react-icons/io5";


const Pruebas = ({irAPagina}) => {
    return (
        <>

  

<div className="section-hero">
        <h1>Pruebas de Concepto</h1>
        <div className="divider"></div>
        
        <div className="content">
          <p>
          
          Esta sección está dedicada a recopilar distintos demos y prototipos desarrollados en el ámbito del desarrollo web y la programación. Aquí encontrarás ejemplos prácticos que buscan explorar nuevas ideas, validar funcionalidades, experimentar con tecnologías emergentes y poner a prueba diferentes enfoques de solución. El propósito es mostrar procesos en construcción, donde cada proyecto funciona como un laboratorio de aprendizaje y un espacio para transformar conceptos en experiencias interactivas.

          </p>
          <div className="btn-container">
            <Button variant="outline-light" style={{ width: "40%", whiteSpace: "nowrap" }} onClick={() => irAPagina("Principal")}>
              Volver a Inicio
            </Button>
          </div>
        </div>
      </div>

       <div className="sectionLink" >
       <div style={{backgroundColor:"#FFEBEE", padding:"2vh", borderRadius:"8px", marginTop:"2vh", marginBottom:"2vh"}}>  

        <h3 style={{fontWeight:"700"}}>Sistema de Evaluación Térmica Basado en Radiación Infrarroja</h3>

              <h3 style={{fontWeight:"500"}}>Stack Tecnológico</h3>
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
                  <FaNodeJs size={40} />
                  <p>Node JS</p>
                </div>
                <div>
                  <SiReact size={40} />
                  <p>React</p>
                </div>
                <div>
                  <SiMysql size={40} />
                  <p>My SQL</p>
                </div>
              </div>

      <p style={{
            width: "100%",
            textAlign: "justify",
            fontStyle: "italic",
            color: "gray"
          }}>
            
            Esta plataforma web fue diseñada para el análisis de imágenes obtenidas en estudios térmicos con radiación infrarroja. El sistema implementa todas las operaciones CRUD y permite gestionar de manera eficiente los datos experimentales.

La aplicación procesa imágenes capturadas en un experimento donde distintos materiales fueron calentados y fotografiados en intervalos de tiempo para evaluar la evolución de la temperatura. Posteriormente, durante la fase de enfriamiento, se registraron imágenes periódicas con el fin de analizar la disipación térmica.

La plataforma no solo organiza la información, sino que también genera gráficas interactivas que muestran la variación de la temperatura en el tiempo, además de comparaciones entre diferentes materiales, ofreciendo una herramienta integral para la visualización y análisis de resultados experimentales.
            
            </p>

            <img className='preview' src={previewradiacion1} alt="Preview 1" />
            <img className='preview' src={previewradiacion2} alt="Preview 1" />
        </div>
       <div style={{backgroundColor:"#E3F2FD", padding:"2vh", borderRadius:"8px", marginTop:"2vh", marginBottom:"2vh"}}>  
        <h3 style={{fontWeight:"700"}}>Interfaz Web Inspirada en la Ammu-Nation de GTA V</h3>

        <h3 style={{fontWeight:"500"}}>Stack Tecnológico</h3>
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
                  <FaNodeJs size={40} />
                  <p>Node JS</p>
                </div>
                <div>
                  <FaAngular size={40} />
                  <p>Angular</p>
                </div>
                <div>
                  <SiMongodb size={40} />
                  <p>Mongo DB</p>
                </div>
              </div>

              <p style={{
            width: "100%",
            textAlign: "justify",
            fontStyle: "italic",
            color: "gray"
          }}>
            
          Esta aplicación web recrea la experiencia de un catálogo digital inspirado en la clásica tienda Ammu-Nation de GTA V.

La plataforma permite a los usuarios navegar por el catálogo de productos, aplicar filtros por categorías, realizar búsquedas por nombre y agregar nuevos artículos al sistema, integrando operaciones CRUD completas sobre la base de datos.

Este proyecto combina diseño atractivo y usabilidad con una arquitectura moderna basada en Angular para el frontend y Node.js + MongoDB para el backend, ofreciendo una experiencia interactiva y dinámica en la gestión de productos.
             
            </p>

            <img className='preview' src={previewammunation1} alt="Preview 1"  />
            <img className='preview' src={previewammunation2} alt="Preview 1"  />
            <img className='preview' src={previewammunation3} alt="Preview 1"  />
            <img className='preview' src={previewammunation4} alt="Preview 1"  />
            <img className='preview' src={previewammunation5} alt="Preview 1"  />
            <img className='preview' src={previewammunation6} alt="Preview 1"  />

</div>

       <div style={{backgroundColor:"#F3E5F5", padding:"2vh", borderRadius:"8px", marginTop:"2vh", marginBottom:"2vh"}}>  

        <h3 style={{fontWeight:"700"}}>COVE | Plataforma Web para Venta de Carros</h3>

        <h3 style={{fontWeight:"500"}}>Stack Tecnológico</h3>
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
                  <FaNodeJs size={40} />
                  <p>Node JS</p>
                </div>
                <div>
                  <SiReact size={40} />
                  <p>React</p>
                </div>
                <div>
                  <SiMongodb size={40} />
                  <p>Mongo DB</p>
                </div>
              </div>

              <p style={{
            width: "100%",
            textAlign: "justify",
            fontStyle: "italic",
            color: "gray"
          }}>
            
          La plataforma está diseñada tanto para usuarios finales como para administradores. Los clientes tienen la posibilidad de registrarse, iniciar sesión, explorar un catálogo de automóviles, realizar búsquedas, filtrar opciones y consultar sus órdenes de compra. Además, el sistema permite agregar nuevos vehículos a la plataforma, garantizando una experiencia interactiva y dinámica en el proceso de adquisición.

Por otro lado, la aplicación cuenta con un panel de administración avanzado, el cual centraliza la gestión del negocio. Desde allí es posible controlar el stock de autos disponibles, administrar las órdenes de compra, registrar y gestionar empleados, así como supervisar la base de clientes, todo en un entorno seguro y de fácil uso.

La arquitectura del proyecto se basa en un frontend moderno en React, que asegura una interfaz rápida y responsiva, junto con un backend robusto en Node.js, encargado de procesar las operaciones del sistema. La persistencia de datos está gestionada con MongoDB, lo que permite un almacenamiento flexible, escalable y confiable.    
            </p>
            <img className='preview' src={previewcove1} alt="Preview 1"  />
            <img className='preview' src={previewcove2} alt="Preview 1"  />
            <img className='preview' src={previewcove3} alt="Preview 1"  />
            <img className='preview' src={previewcove4} alt="Preview 1"  />
            <img className='preview' src={previewcove5} alt="Preview 1"  />
            <img className='preview' src={previewcove6} alt="Preview 1"  />
            <img className='preview' src={previewcove7} alt="Preview 1"  />
            <img className='preview' src={previewcove8} alt="Preview 1"  />
</div>
       <div style={{backgroundColor:"#E0F7FA", padding:"2vh", borderRadius:"8px", marginTop:"2vh", marginBottom:"2vh"}}>  

        <h3 style={{fontWeight:"700"}}>Plataforma Experimental de Visualización 3D y AR para Espacios Académicos</h3>                    
            <Button variant="outline-dark" style={{ width: "20%", textAlign:"center", float:"right", marginRight:"3vw" }}   onClick={() => window.open("https://icebreaker26.github.io/inmersivecampusucp/index.html", "_blank")}>
              <IoOpenOutline />

            </Button>
             <h3 style={{fontWeight:"500"}}>Stack Tecnológico</h3>
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
                 <TbBrandThreejs size={40} />
                  <p>ThreeJS</p>
                </div>
                <div>
                  <SiJavascript size={40} />
                  <p>AR JS</p>
                </div>
                
              </div>
             <p style={{
            width: "100%",
            textAlign: "justify",
            fontStyle: "italic",
            color: "gray"
          }}>
            
         La plataforma permite visualizar un modelo 3D de la universidad directamente en el navegador, aprovechando la potencia de Three.js para el renderizado en tiempo real. Además, incorpora funcionalidades de realidad aumentada mediante AR.js, posibilitando la proyección de diferentes modelos digitales sobre el entorno físico del campus a través de la cámara de un dispositivo.

El objetivo principal de este desarrollo es explorar nuevas formas de interacción y visualización en espacios educativos, ofreciendo una experiencia inmersiva que combina lo digital y lo real. Al permitir observar objetos tridimensionales en el contexto del campus, se abre la posibilidad de implementar casos de uso como la planificación de infraestructura, recorridos virtuales, visualización de proyectos académicos o actividades interactivas para estudiantes y visitantes.

          </p>
            <img className='preview' src={previewcampus1} alt="Preview 1"  />
            <img className='preview' src={previewcampus2} alt="Preview 1"  />
            <img className='preview' src={previewcampus3} alt="Preview 1"  />
            <img className='preview' src={previewcampus4} alt="Preview 1"  />
            <img className='preview' src={previewcampus5} alt="Preview 1"  />
            <img className='preview' src={previewradio1} alt="Preview 1"  />
    </div>
        <div style={{backgroundColor:"#F1F8E9", padding:"2vh", borderRadius:"8px", marginTop:"2vh", marginBottom:"2vh"}}>  

        <h3 style={{fontWeight:"700"}}>Sitio Web Corporativo para Taller Automotriz Especializado en Diésel</h3>

            <Button variant="outline-dark" style={{ width: "20%", textAlign:"center", float:"right", marginRight:"3vw" }}   onClick={() => window.open("https://icebreaker26.github.io/SuperDieseldelCafe/", "_blank")}>
              <IoOpenOutline />

            </Button>

        <h3 style={{fontWeight:"500"}}>Stack Tecnológico</h3>
                
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
                
              </div>

               <p style={{
            width: "100%",
            textAlign: "justify",
            fontStyle: "italic",
            color: "gray"
          }}>

        Este proyecto consiste en el desarrollo de un sitio web informativo para un taller automotriz especializado en servicios para vehículos diésel. La plataforma fue construida utilizando HTML5, CSS3 y Bootstrap, priorizando un diseño moderno, limpio y responsivo, accesible desde cualquier dispositivo.

El sitio tiene como objetivo comunicar la identidad de la empresa, sus servicios y valores, ofreciendo a los clientes una experiencia clara y confiable al momento de conocer la organización. Incluye secciones dedicadas a la presentación del taller, portafolio de servicios, información de contacto y ubicación, con una estructura visual intuitiva que facilita la navegación.    
        
         </p>
            <img className='preview' src={previewsuperdiesel1} alt="Preview 1"  />
            <img className='preview' src={previewsuperdiesel2} alt="Preview 1"  />
            <img className='preview' src={previewsuperdiesel3} alt="Preview 1"  />

      
        </div>

        
        

        </div>

        </>
    )
}

export default Pruebas;