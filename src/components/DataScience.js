import Button from 'react-bootstrap/Button';

import { SiChartdotjs, SiReact, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiMysql, SiPython, SiMongodb, SiJupyter } from "react-icons/si";

import data1 from "../imagenes/data1.png"
import data2 from "../imagenes/data2.png"
import data3 from "../imagenes/data3.png"
import data4 from "../imagenes/data4.png"
import data5 from "../imagenes/data5.png"
import data6 from "../imagenes/data6.png"
import data7 from "../imagenes/data7.png"
import data8 from "../imagenes/data8.png"
import data9 from "../imagenes/data9.png"
import data10 from "../imagenes/data10.png"
import data11 from "../imagenes/data11.png"
import data12 from "../imagenes/data12.png"
import data13 from "../imagenes/data13.png"
import data14 from "../imagenes/data14.png"
import data15 from "../imagenes/data15.png"
import data16 from "../imagenes/data16.png"
import data17 from "../imagenes/data17.png"




const DataScience = ({irAPagina}) => {
    return (
        <>

<div className="section-hero">
        <h1>Data Analyst</h1>
        <div className="divider"></div>
        
        <div className="content">
          <p>
         En esta sección presento proyectos enfocados en la exploración, procesamiento y visualización de información mediante el uso de Python, Pandas, Matplotlib y Jupyter Notebooks. El objetivo es transformar conjuntos de datos en insumos comprensibles y útiles para la toma de decisiones, mostrando tanto el proceso técnico como los hallazgos más relevantes.

Como ejemplo de caso práctico, se incluye un estudio sobre la penetración de Internet en Colombia entre 2015 y 2023, en el que se analizan tendencias de crecimiento, variaciones anuales y factores que han influido en la evolución del acceso a la red en el país.
          </p>
          <div className="btn-container">
            <Button variant="outline-light" style={{ width: "40%" , whiteSpace: "nowrap"}}   onClick={() => window.open("https://github.com/Icebreaker26/penetracioninternet/blob/main/penetracion%20internet.ipynb", "_blank")}>
                          Abrir Notebook
                        </Button>
                         <Button variant="outline-light" style={{ width: "40%", whiteSpace: "nowrap" }} onClick={() => irAPagina("Principal")}>
                          Volver a Inicio
                        </Button>
          </div>
        </div>
      </div>

            <div className="sectionLink" >
       <div style={{backgroundColor:"white", padding:"2vh", borderRadius:"8px", marginTop:"2vh", marginBottom:"2vh"}}>  

        <h3 style={{fontWeight:"700"}}>Análisis de la penetración de Internet en Colombia (2015–2023)</h3>

          <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center", paddingTop:"3vh", paddingBottom:"3vh" }}>
          <div>
            <SiJupyter size={40} />
            <p>Jupyter Notebook</p>
          </div>
          <div>
            <SiPython size={40} />
            <p>Python</p>
          </div>
        </div>

        <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>
                    
                   El acceso a Internet se ha convertido en un indicador clave del desarrollo social y económico de un país, pues refleja tanto el nivel de conectividad como las oportunidades de participación en la sociedad digital. En este sentido, los Datos Abiertos del Gobierno de Colombia ofrecen un insumo valioso para comprender cómo ha evolucionado la penetración de Internet a lo largo de los últimos años.

En este caso de estudio se analizará la información correspondiente al período 2015–2023, con el objetivo de describir las principales tendencias y transformaciones que ha experimentado el país en materia de conectividad. Más allá del panorama nacional, el análisis pondrá un énfasis particular en el departamento de Risaralda, permitiendo observar cómo ha sido su trayectoria dentro del contexto colombiano y qué lugar ocupa en la dinámica de expansión digital.

Con este enfoque se busca no solo identificar patrones de crecimiento, sino también aportar elementos que faciliten la comprensión de los avances y desafíos que enfrenta la región en su proceso de integración a la economía y sociedad digitales. 
                    </p>

                      <img className='preview' style={{width:"80%"}} src={data1} alt="Preview 1" />
        
        <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

                  Al revisar la estructura inicial de la base de datos se identificó que esta contiene 35.578 registros distribuidos en 9 columnas, sin presencia de valores nulos. La información se encuentra desagregada a nivel temporal (años y trimestres) y geográfico (departamentos y municipios), lo cual permite realizar análisis tanto nacionales como regionales. Entre las variables más relevantes destacan el número de accesos fijos a Internet y la población reportada por el DANE, insumos fundamentales para calcular indicadores de penetración. Se evidenció, además, que la columna denominada Índice aparece en formato de texto (object), lo que sugiere la necesidad de transformarla a un tipo numérico para poder realizar cálculos y visualizaciones adecuadas. En general, el conjunto de datos se encuentra completo y en buenas condiciones para el desarrollo de un análisis descriptivo y comparativo de la penetración de Internet en Colombia.  
                  
                  </p>
               
                                     <img className='preview' style={{width:"80%"}} src={data2} alt="Preview 1" />



        <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

En primer lugar, se procedió a transformar la columna Índice, la cual se encontraba en formato de texto (object) debido a la presencia de caracteres especiales, como comas decimales o símbolos de porcentaje. Esta conversión a un tipo numérico (float) resultaba indispensable para garantizar la correcta realización de cálculos y visualizaciones posteriores, evitando inconsistencias en el tratamiento de la información.

Posteriormente, como complemento al dato ya suministrado en la columna Índice, se construyó un indicador propio de penetración de Internet a partir de la relación entre el número de accesos fijos reportados y la población registrada por el DANE en cada municipio y trimestre. Este nuevo campo permitió verificar la coherencia de los datos y facilitó el análisis comparativo, al disponer de una métrica calculada directamente desde las variables base del conjunto de datos.                  
                  </p>

                    <img className='preview' style={{width:"80%"}} src={data3} alt="Preview 1" />



        <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

Una vez ajustadas las variables numéricas, se realizó una exploración inicial del conjunto de datos con el fin de comprender mejor su estructura y rangos. En esta fase se identificaron los años y trimestres disponibles, así como la cobertura geográfica en términos de departamentos y municipios incluidos en el registro. Adicionalmente, se revisaron estadísticas descriptivas básicas como valores mínimos, máximos, promedios y desviaciones estándar, lo que permitió detectar posibles inconsistencias o valores atípicos, tales como índices de penetración superiores al 100%. Este proceso de exploración resultó fundamental para establecer la calidad de la información y orientar los análisis descriptivos posteriores.
  </p>

   <img className='preview' style={{width:"80%"}} src={data4} alt="Preview 1" />
   <img className='preview' style={{width:"80%"}} src={data5} alt="Preview 1" />



        <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

Con la base de datos ya depurada y las variables clave en formato numérico, el siguiente paso consistió en realizar las primeras visualizaciones descriptivas. Estas gráficas permiten observar de manera clara la evolución de la penetración de Internet en el tiempo y facilitan la identificación de tendencias generales o comportamientos particulares por región. Inicialmente, se construyó una gráfica de línea para representar la evolución nacional entre los años 2015 y 2023, promediando los valores de penetración por año. Este tipo de representación temporal es útil para resaltar los períodos de mayor crecimiento, posibles caídas y, en general, la dinámica de expansión de la conectividad en el país. 
 </p>

    <img className='preview' style={{width:"80%"}} src={data6} alt="Preview 1" />
   <img className='preview' style={{width:"80%"}} src={data7} alt="Preview 1" />
   <img className='preview' style={{width:"80%"}} src={data8} alt="Preview 1" />

 <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

Tras haber identificado la tendencia general a nivel nacional, resulta pertinente observar cómo ha sido la penetración de Internet en las diferentes regiones del país. Este análisis comparativo permite evidenciar desigualdades en el acceso, identificar departamentos con avances significativos y otros con rezagos importantes. En particular, se busca hacer énfasis en el departamento de Risaralda, contrastando su evolución con el promedio nacional y con departamentos vecinos. Para ello, se generaron gráficos que muestran los niveles de penetración por año en cada departamento, así como un ranking de los territorios con mayor y menor penetración en el año más reciente disponible (2023). </p>

<img className='preview' style={{width:"80%"}} src={data9} alt="Preview 1" />
   <img className='preview' style={{width:"80%"}} src={data10} alt="Preview 1" />

 <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

El análisis de correlación muestra una relación muy fuerte y positiva (0.99) entre la población y el número de accesos fijos a Internet, lo que indica que en los municipios con mayor número de habitantes se concentra también la mayor cantidad de conexiones. Sin embargo, cuando se compara la penetración relativa de Internet frente a la población y los accesos, la correlación es significativamente más baja (0.28 y 0.30 respectivamente). Esto revela que la penetración del servicio no depende únicamente del tamaño poblacional ni de la cantidad absoluta de accesos, sino que intervienen otros factores como la cobertura de infraestructura, la inversión tecnológica y las dinámicas socioeconómicas propias de cada territorio. En consecuencia, aunque el acceso crece en paralelo con la población, la equidad en la distribución del servicio aún presenta desafíos importantes.
</p>

<img className='preview' style={{width:"80%"}} src={data11} alt="Preview 1" />
   <img className='preview' style={{width:"80%"}} src={data12} alt="Preview 1" />
      <img className='preview' style={{width:"80%"}} src={data13} alt="Preview 1" />


 <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

El análisis de distribuciones evidencia una marcada concentración de municipios con niveles bajos de penetración de Internet. El histograma muestra que la gran mayoría se ubica en valores inferiores al 10%, lo cual revela que, aunque existen casos con penetración elevada, estos son excepcionales y constituyen outliers. Esta tendencia confirma que el acceso al servicio aún está limitado en la mayor parte del territorio nacional.

Al observar los boxplots por departamento, se aprecia una alta variabilidad interna, donde algunos departamentos presentan un rango amplio de valores con municipios muy rezagados y otros con desempeños destacados. Llama la atención Bogotá D.C., que se distingue por una penetración más alta y consistente, contrastando con departamentos en donde la dispersión es mayor y los valores tienden a concentrarse en niveles bajos. Casos como Risaralda, Antioquia o Cundinamarca muestran medianas superiores al promedio nacional, mientras que en regiones más apartadas persisten brechas significativas. En conjunto, estos hallazgos ponen de manifiesto la desigualdad territorial en la distribución de la conectividad.</p>

   <img className='preview' style={{width:"80%"}} src={data14} alt="Preview 1" />
      <img className='preview' style={{width:"80%"}} src={data15} alt="Preview 1" />


 <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

El análisis comparativo entre 2015 y 2023 muestra una tendencia general de incremento en la penetración de internet fijo en la mayoría de los departamentos del país. Bogotá D.C. se consolida como el territorio con mayor índice de penetración, seguido por Antioquia y Valle del Cauca, que también presentan avances significativos. No obstante, persisten departamentos con niveles bajos de conectividad, especialmente en regiones periféricas como Vaupés, Guainía y Amazonas, lo que evidencia fuertes desigualdades regionales en el acceso. En el caso de Risaralda (resaltado con estrella roja), se observa un aumento sustancial en la última década, alcanzando valores que lo ubican por encima del promedio nacional y en una posición destacada dentro del eje cafetero, junto a Quindío y Caldas. Estos resultados sugieren que, si bien el país avanza en cobertura digital, aún se mantienen brechas estructurales que limitan la equidad territorial en el acceso a internet.
</p>
<img className='preview' style={{width:"80%"}} src={data16} alt="Preview 1" />
      <img className='preview' style={{width:"80%"}} src={data17} alt="Preview 1" />


 <p style={{
                    width: "100%",
                    textAlign: "justify",
                    fontStyle: "italic",
                    color: "gray"
                  }}>

En conclusión, los resultados permiten afirmar que Risaralda ha logrado consolidarse como uno de los departamentos con mayor avance en la penetración de internet durante el periodo 2015-2023, superando incluso a otros territorios de la región y destacándose en el panorama nacional. Este crecimiento refleja tanto la inversión en infraestructura como la demanda creciente de los hogares y empresas por servicios digitales. Sin embargo, al comparar con Bogotá D.C. y departamentos líderes en conectividad, se evidencia que aún persiste un margen importante de mejora. Por lo tanto, Risaralda se proyecta como un referente regional en transformación digital, aunque su consolidación plena dependerá de estrategias sostenidas que permitan reducir las desigualdades frente a los territorios más desarrollados.</p>


        </div>
        </div>

        </>
    )
}

export default DataScience;