import React, { Component } from 'react'

import img1 from "../img/home/construccion.webp";
import img2 from "../img/home/redes.webp";
import img3 from "../img/home/tecnologia.webp";

import "../css/carousel.css"

const carouselData = [
     {
          id : "01",
          imgSrc:img1,
          title: "Tecnología",
          subtitle: ""
     },
     {
          id : "02",
          imgSrc:img2,
          title: "Redes",
          subtitle: ""
     },
     {
          id : "03",
          imgSrc:img3,
          title: "Construcciones",
          subtitle: ""
     },
]


export default class Carousel extends Component {
     render() {
          return (
               <>
                    <div id='carouselContainer' className='carousel slide'>
                         <div className='carousel-inner' >
                              { carouselData.map((item) => 
                                   <div 
                                        className={ item.id === "01" ? 'carousel-item active ' :'carousel-item'} 
                                        id={ item.id } 
                                        key={item.id}
                                   >
                                        <img 
                                             src={item.imgSrc} 
                                             className="d-block w-100" 
                                             alt={ item.title + "_img" } 
                                        />
                                   </div>
                              )}
                         </div>
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
               </>
          )
     }
}
