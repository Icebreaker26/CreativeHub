import Button from 'react-bootstrap/Button';

import previewcoop1 from "../imagenes/previewcoop1.png"
import previewcoop2 from "../imagenes/previewcoop2.png"
import previewcoop3 from "../imagenes/previewcoop3.png"
import previewcoop4 from "../imagenes/previewcoop4.png"
import previewcoop5 from "../imagenes/previewcoop5.png"
import previewcoop6 from "../imagenes/previewcoop6.png"
import previewcoop7 from "../imagenes/previewcoop7.png"
import previewcoop8 from "../imagenes/previewcoop8.png"
import previewcoop9 from "../imagenes/previewcoop9.png"
import previewcoop10 from "../imagenes/previewcoop10.png"
import previewcoop11 from "../imagenes/previewcoop11.png"
import previewcoop12 from "../imagenes/previewcoop12.png"
import previewcoop13 from "../imagenes/previewcoop13.png"
import previewcoop14 from "../imagenes/previewcoop14.png"


const Cooperativa = ({irAPagina}) => {
    return (
        <>

<div className="section-hero">
        <h1> Cooperativa Progresemos</h1>
        <div className="divider"></div>
        
        <div className="content">
          <p>
          El desarrollo de este sitio web tuvo como objetivo modernizar la presencia digital de la Cooperativa Progresemos, una entidad financiera enfocada en ofrecer servicios de ahorro, crédito y apoyo a comunidades, especialmente en sectores rurales. La plataforma fue diseñada para transmitir los valores de confianza, cercanía y progreso que caracterizan a la cooperativa, brindando a los usuarios una experiencia clara, accesible y adaptada a distintos dispositivos.
          </p>
          <div className="btn-container">
            
             <Button variant="outline-light" style={{ width: "30%" }}   onClick={() => window.open("https://www.cooperativaprogresemos.coop/", "_blank")}>
              Abrir Web
            </Button>
             <Button variant="outline-light" style={{ width: "40%", whiteSpace: "nowrap" }} onClick={() => irAPagina("Principal")}>
              Volver a Inicio
            </Button>

          </div>
        </div>
      </div>

             <div className="sectionLink" >
       <div style={{backgroundColor:"white", padding:"2vh", borderRadius:"8px", marginTop:"2vh", marginBottom:"2vh"}}>  

        <h5 style={{fontWeight:"300", fontStyle:"italic", whiteSpace:"nowrap"}}>WWW.COOPERATIVAPROGRESEMOS.COOP</h5>
        <h3 style={{fontWeight:"700"}}>Previews</h3>


                    <img className='preview' src={previewcoop1} alt="Preview 1" />
                    <img className='preview' src={previewcoop2} alt="Preview 1" />
                    <img className='preview' src={previewcoop3} alt="Preview 1" />
                    <img className='preview' src={previewcoop4} alt="Preview 1" />
                    <img className='preview' src={previewcoop5} alt="Preview 1" />
                    <img className='preview' src={previewcoop6} alt="Preview 1" />
                    <img className='preview' src={previewcoop7} alt="Preview 1" />
                    <img className='preview' src={previewcoop8} alt="Preview 1" />
                    <img className='preview' src={previewcoop9} alt="Preview 1" />
                    <img className='preview' src={previewcoop10} alt="Preview 1" />
                    <img className='preview' src={previewcoop11} alt="Preview 1" />
                    <img className='preview' src={previewcoop12} alt="Preview 1" />
                    <img className='preview' src={previewcoop13} alt="Preview 1" />
                    <img className='preview' src={previewcoop14} alt="Preview 1" />


                    

        </div>
      </div>

        </>
    )
}

export default Cooperativa;