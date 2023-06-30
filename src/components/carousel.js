import React, { Component } from 'react'

import img01 from "../img/home/tecnologia.png";
import img02 from "../img/home/redes.webp";
import img03 from "../img/home/construcciones.png";
import img04 from "../img/home/fibra.png";

import "../css/carousel.css"

const carouselData = [
     {
          id : "01",
          imgSrc:img01,
          title: "Tecnología",
          subtitle: "IOT y SOLUCIONES TECNOLÓGICAS EMPRESARIAL."
     },
     {
          id : "02",
          imgSrc:img02,
          title: "Cambiar",
          subtitle: "Lorem ipsum"
     },
     {
          id : "03",
          imgSrc:img03,
          title: "Construcciones",
          subtitle: "OBRAS CIVILES Y CONSTRUCCIONES ELECTROMECÁNICAS."
     },
     {
          id : "04",
          imgSrc:img04,
          title: "Fibra Óptica",
          subtitle: "OBRAS DE CONEXION, SOLDADURA Y MÁS."
     },
]

export default class Carousel extends Component {
     render() {
         
          return (
               <>
                    <div id='carouselContainer' className='carousel carousel-fade slide'  data-bs-ride="carousel">
                         <div className='carousel-inner' >
                              { carouselData.map((item) => 
                                   <div
                                        className={ item.id === "01" ? 'carousel-item active ' : 'carousel-item'} 
                                        id={ item.id } 
                                        key={item.id}
                                   >
                                        <img src={item.imgSrc} alt={item.title}/>

                                        <div className='carousel-caption text-start'>
                                             <h1 className='upercase'> {item.title} </h1>
                                             <p> {item.subtitle} </p>
                                        </div>
                                   </div>
                              )}
                         </div>
                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselContainer" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"/>
                              <span className="visually-hidden">
                                   Previous
                              </span>
                         </button>
                         <button className="carousel-control-next" type="button" data-bs-target="#carouselContainer" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true" />
                              <span className="visually-hidden">
                                   Next
                              </span>
                         </button>
                    </div>
               </>
          )
     }
}
