import React, { Component } from 'react'


import "../css/mainView.css"

import fondo from "../img/home/fondo.webp"



export default class MainView extends Component {
     render() {
     return (
          <div id="carouselExample" className="carousel slide">
               <div className="carousel-inner">
                    <div className="carousel-item active">
                         <img src={fondo} className="d-block w-100" alt="..."/>
                    </div>
                    <div className='carousel-caption'>
                         <h1>PROMTEL S.R.L</h1>
                    </div>
               </div>
          </div>
          )
     }
}
