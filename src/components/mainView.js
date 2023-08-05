import React, { Component } from 'react'


import "../css/mainView.css"

import fondo from "../img/home/fondo.webp"




export default class MainView extends Component {
     render() {
     return (
          <div id="main-view" className="carousel slide">
               <div className="carousel-inner">
                    <div className="carousel-item active" >
                    </div>
                    <div className='carousel-caption'>
                         <svg>
                              <text x="50%" y="20%" cy="50" dy="35" textAnchor="middle" color='white'>
                                   PROMTEL S.R.L
                              </text>
                         </svg>
                         {/* <h1>PROMTEL S.R.L</h1> */}
                         <p>
                              Servicios electromecánicos, construcción, enlaces inalámbricos y más...
                         </p>
                    </div>
                    <div id='down' className="down">
                         <div className="ball4"></div>
                         <div className="spacer"></div>
                         <div className="ball3"></div>
                         <div className="spacer"></div>
                         <div className="ball2"></div>
                         <div className="spacer"></div>
                         <div className="ball1"></div>
                         <div className="spacer"></div>
                         <div className="arrow"></div>
                    </div>
               </div>
          </div>
          )
     }
}
