import React, { Component } from 'react'
import logo from '../img/logo.png';
import "../css/navbar.css"

export default class Navbar extends Component {
  render() {
    return (
         <div>
               <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="#">
                              <img className="logo" alt='logo-promtel' src={logo}/>
                         </a>
                         <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                        <a className="links active" aria-current="page" href="/">Inicio</a>
                                   </li>
                                   <br/>
                                   <li className="nav-item">
                                        <a className="links " href="#">Link</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </div>
    )
  }
}
