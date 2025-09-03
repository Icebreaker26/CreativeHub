import Button from 'react-bootstrap/Button';
import { SiChartdotjs, SiReact, SiHtml5, SiCss3, SiBootstrap, SiJavascript } from "react-icons/si";

import previewlinkin1 from "../imagenes/previewlinkin1.png"
import previewlinkin2 from "../imagenes/previewlinkin2.png"
import previewlinkin3 from "../imagenes/previewlinkin3.png"
import previewlinkin4 from "../imagenes/previewlinkin4.png"
import previewlinkin5 from "../imagenes/previewlinkin5.png"

const LinkinTool = ({irAPagina}) => {
    return (
        <>

<svg className="background-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 600" preserveAspectRatio="none">
  <path 
    d="
      M 3 0 
      L 3 75
      C 20 65, 40 85, 60 75
      C 80 65, 100 85, 120 75
      C 140 65, 160 85, 180 75
      C 200 65, 220 85, 240 75
      
      
    " 
    stroke="white" 
    strokeWidth="1" 
    fill="none" 
    vectorEffect="non-scaling-stroke"
  />
</svg>



<div className="section-hero">
        <h1>The Linkin' Tool</h1>
        <div className="divider"></div>
        
        <div className="content">
          <p>
          Es un software diseñado para aplicar los principios de radiopropagación de la Ingeniería de Telecomunicaciones en la planificación de enlaces punto a punto. A través de cálculos precisos, permite evaluar la viabilidad de una conexión considerando factores como la distancia, el terreno y posibles obstáculos. De esta manera, ofrece una herramienta confiable para proyectar enlaces eficientes y garantizar una buena calidad en las comunicaciones.
          </p>
          <div className="btn-container">
            <Button variant="outline-light" style={{ width: "30%" }}   onClick={() => window.open("https://icebreaker26.github.io/thelinkintool/", "_blank")}
>
              Abrir Web
            </Button>
             <Button variant="outline-light" style={{ width: "40%", whiteSpace: "nowrap" }} onClick={() => irAPagina("Principal")}>
              Volver a Inicio
            </Button>
          </div>
        </div>
      </div>

      <div className="sectionLink" >

        <h1 style={{fontWeight:"700"}}>Stack Tecnológico</h1>
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
  <div>
    <SiChartdotjs size={40} />
    <p>Chart.js</p>
  </div>

  
</div>

        <h1 style={{fontWeight:"700"}}>Previews</h1>

    <img src={previewlinkin1} alt="Preview 1" style={{ width: "90%", marginTop: "2vh", marginBottom: "2vh", borderRadius: "8px" }} />

      <p style={{
        width: "90%",
        textAlign: "justify",
        fontStyle: "italic",
        color: "gray"
      }}>
        Sección destinada para ingresar las coordenadas y características de los puntos A y B de los enlaces. 
        Los parámetros a ajustar incluyen latitud, longitud, altura de la antena respecto al suelo, potencia 
        de transmisión (Tx) en dBm, y ganancia de la antena Tx en dBi. A partir de estos datos, y considerando 
        la ganancia de recepción (Rx) en dBi, es posible calcular la potencia recibida por la antena de Rx en dBm.
    </p>

          <img src={previewlinkin2} alt="Preview 1" style={{ width: "40%", marginTop: "2vh", marginBottom: "2vh", borderRadius: "8px", display: "block", margin: "0 auto" }} />

    <p style={{
        width: "90%",
        textAlign: "justify",
        fontStyle: "italic",
        color: "gray"
      }}>
       En la sección central se añaden parámetros como la frecuencia, la zona de Fresnel a calcular (1, 2, 3, etc.), y las pérdidas adicionales que puedan presentarse en el sistema (como atenuaciones debido a las condiciones del sitio). Próximamente, estas pérdidas se podrán calcular de forma automatizada. Esta información permite determinar la distancia máxima entre ambas antenas, según los parámetros del horizonte de radio

       </p>

<img src={previewlinkin3} alt="Preview 1" style={{ width: "90%", marginTop: "2vh", marginBottom: "2vh", borderRadius: "8px" }} />

    <div
  style={{
    width: "90%",
    textAlign: "justify",
    fontStyle: "italic",
    color: "gray",
    paddingTop: "2vh"
  }}
>
  <p>
    Estos botones nos permiten ejecutar diversas acciones, que se dividen en las siguientes funciones:
  </p>
  <ul style={{ paddingLeft: "1.2rem" }}>
    <li>
      📌 <strong>Mostrar Mapa:</strong> Calcula los puntos intermedios entre ambas coordenadas y los grafica según la elevación del terreno.
    </li>
    <li>
      📌 <strong>Mostrar Línea de Vista:</strong> Traza una línea recta entre ambas antenas considerando la altura proporcionada, lo que permite evaluar visualmente si existen interferencias en el terreno.
    </li>
    <li>
      📌 <strong>Mostrar Zona de Fresnel:</strong> Calcula el radio de la zona de Fresnel para cada punto de la línea de vista, con el fin de determinar si el enlace operará en condiciones óptimas o si se presentarán atenuaciones debido a interferencias en el terreno.
    </li>
    <li>
      📌 <strong>Reset:</strong> Permite borrar los datos del gráfico.
    </li>
  </ul>
</div>


<img src={previewlinkin4} alt="Preview 1" style={{ width: "90%", marginTop: "2vh", marginBottom: "2vh", borderRadius: "8px" }} />

      <div
  style={{
    width: "90%",
    textAlign: "justify",
    fontStyle: "italic",
    color: "gray",
    paddingTop: "2vh"
  }}
>
  <p>
    En este ejemplo podemos identificar tres series de datos:
  </p>
  <ul style={{ paddingLeft: "1.2rem" }}>
    <li>
      🔹 <strong>Puntos de elevación:</strong> Representan el terreno entre las coordenadas A y B.
    </li>
    <li>
      🔹 <strong>Línea de vista:</strong> Conecta directamente los puntos A y B, mostrando la trayectoria libre entre ambas antenas.
    </li>
    <li>
      🔹 <strong>Zona de Fresnel:</strong> Representada por una elipse que indica el radio para cada punto de la línea de vista (en este caso, calculada con una frecuencia de <em>7&nbsp;MHz</em>).
    </li>
  </ul>
</div>


    <img src={previewlinkin5} alt="Preview 1" style={{ width: "90%", marginTop: "2vh", marginBottom: "2vh", borderRadius: "8px" }} />

      <p style={{
        width: "90%",
        textAlign: "justify",
        fontStyle: "italic",
        color: "gray"
      }}>
       Permite visualizar en el mapa la ubicación de ambas antenas (para lo cual es necesario proporcionar la latitud y longitud de cada una en el primer apartado), así como su línea de vista sobre el terreno.


         </p>
       
      </div>
        </>
    
  
  )
}

export default LinkinTool;