import React, { Component } from 'react'
import logo from '../img/logo.png';
import "../css/navbar.css"


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
     var navbar = document.getElementById("navbar");
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 1) {
          navbar.classList.add('scrolled');
     } else {
          navbar.classList.remove('scrolled');
     }
}


export default class Navbar extends Component {
  render() {
     return (
               <div>
                    <nav id='navbar'  className="navbar navbar-expand-lg ">
                         <div className="container-fluid">
                              <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse navlinks" id="navbarSupportedContent">
                                   <ul className="navbar-nav mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                             <a className="links" aria-current="page" href={'/'}>Inicio</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="links" aria-current="page" href={'#'}>Quienes somos</a>
                                        </li>
                                        <li className='nav-item'>
                                             <a className="logo navbar-brand" href="/">
                                                  <img  alt='logo-promtel' src={logo}/>
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="links" aria-current="page" href={'/about'}>Nuestro trabajo</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="links" aria-current="page" href={'/contacts'}>Contacto</a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </nav>

               </div>
          )
     }
}
