import React, { Component } from 'react'

import "../css/services.css"
import img01 from "../img/home/services/01.webp"
import img02 from "../img/home/services/02.webp"
import img03 from "../img/home/services/03.webp"
import img04 from "../img/home/services/04.webp"
import img05 from "../img/home/services/05.webp"
// import img06 from "../img/home/services/06.webp"
// import img07 from "../img/home/services/07.webp"
// import img08 from "../img/home/services/08.webp"


const data = [
     {
          id : "01",
          imgSrc:img01,
          title: "Construcciones",
          subtitle: "Civiles y electromecánicas. Tendidos de media y alta tensión"
     },
     {
          id : "02",
          imgSrc:img02,
          title: "Seguridad",
          subtitle: "Instalacion y mantenimiento en sistemas de vigilancia de alta complegidad"
     },
     {
          id : "03",
          imgSrc:img03,
          title: "Redes",
          subtitle: "Contruccion de sistemas de redes inalambricas y cableadas"
     },
     {
          id : "04",
          imgSrc:img04,
          title: "Enlaces",
          subtitle: "Amplia experiencia en torres, mástiles y pedestales para equipos de telecomunicación"
     },
     {
          id : "05",
          imgSrc:img05,
          title: "Parques Solares",
          subtitle: "Construccion y mantenimiento integral de granjas solares"
     },
]



export default class Services extends Component {
     render() {
          return (
               <>
                    <div>
                         <h1> Nuestros Servicios </h1>
                         <div className='cardContainer'>
                         {
                              data.map((item) => 
                              <div className='card' key={item.id+item.title} >
                                   <img src={item.imgSrc} alt={item.id+' '+item.title} />
                                   <div className='card-body'>
                                        <h3 className='card-title'>{item.title}</h3>
                                        <p className='card-text'>{item.subtitle}</p>
                                   </div>
                              </div>
                         )}
                         </div>
                    </div>
               </>
          )
     }
}
