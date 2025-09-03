import Button from 'react-bootstrap/Button';


const DataScience = ({irAPagina}) => {
    return (
        <>

<div className="section-hero">
        <h1>DataScience</h1>
        <div className="divider"></div>
        
        <div className="content">
          <p>
           Apasionado por la tecnología y la innovación. <br />
En esta sección conocerás más sobre mi trayectoria, mis intereses en desarrollo web, análisis de datos e ingeniería de sistemas, y mi enfoque en crear soluciones digitales eficientes y creativas. <br />
Mi objetivo es combinar conocimientos técnicos con pensamiento estratégico para llevar proyectos desde la idea hasta la implementación exitosa.

          </p>
          <div className="btn-container">
            <Button variant="outline-light" style={{width: "40%", whiteSpace: "nowrap" }} onClick={() => irAPagina("Principal")}>
              Volver a Inicio
            </Button>
          </div>
        </div>
      </div>

        </>
    )
}

export default DataScience;