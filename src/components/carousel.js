import React, { Component } from 'react'

import img01 from "../img/home/carousel/tecnologia.webp";
import img02 from "../img/home/carousel/iot.webp";
import img03 from "../img/home/carousel/construcciones.webp";
import img04 from "../img/home/carousel/fibra.webp";

import "../css/carousel.css"

const carouselData = [
     {
          id : "01",
          route : "/tecnologia",
          imgSrc:img01,
          title: "Tecnología",
          subtitle: "SOLUCIONES TECNOLÓGICAS PARA EMPRESAS"
     },
     {
          id : "02",
          route : "/iot",
          imgSrc:img02,
          title: "IOT",
          subtitle: "INTERNET DE LAS COSAS APLICADO A TUS NECESIDADES"
     },
     {
          id : "03",
          route : "/construcciones",
          imgSrc:img03,
          title: "Construcciones",
          subtitle: "OBRAS CIVILES Y CONSTRUCCIONES ELECTROMECÁNICAS."
     },
     {
          id : "04",
          route : "/fibraoptica",
          imgSrc:img04,
          title: "Fibra Óptica",
          subtitle: "CONEXION, SOLDADURA Y ENLACES INALAMBRICOS."
     },
]

export default class Carousel extends Component {
     render() {
          return (
               <div className='mainDivCarousel'>
                    <h2 id='carousel-title'> Nuestros Servicios </h2>
                    <div id='carouselContainer' className='carousel carousel-fade slide'  data-bs-ride="carousel">
                         <div className='carousel-inner' >
                              { carouselData.map((item) => 
                                   <div
                                        className={ item.id === "01" ? 'carousel-item active ' : 'carousel-item'} 
                                        id={ item.id } 
                                        key={item.id}
                                        >
                                        <div
                                             className='imgCarousel'
                                             style={{ backgroundImage: `url(${item.imgSrc})` }}
                                             alt={item.title}
                                        />
                                        <div className='carousel-caption text-start'>
                                             <h1> {item.title} </h1>
                                             <p> {item.subtitle} </p>
                                             <a href={item.route} >Ver más...</a>
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
               </div>
          )
     }
}
