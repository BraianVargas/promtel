import React, { Component } from 'react'
import logo from '../img/logo.png';
import "../css/navbar.css"


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
     var navbar = document.getElementById("navbar");
     var scrollDownIndicator = document.getElementById("down");
     
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
          scrollDownIndicator.classList.add('scrolled1');
          navbar.classList.add('scrolled');
     } else {
          navbar.classList.remove('scrolled');
          scrollDownIndicator.classList.remove('scrolled1');
     }
}

export default class Navbar extends Component {
render() {
     let data;
     let data1;

     if (window.innerWidth > 890) {
               data = (<li className='nav-item'>
                    <a className="logo navbar-brand" href="/">
                         <img alt='logo-promtel' src={logo}/>
                    </a>
               </li>)
     } else {
          if (window.innerWidth <  890){
               data1 = (<a className="logo navbar-brand" href="/">
                    <img alt='logo-promtel' src={logo}/>
               </a>)
          }
     }
     return (
               <div>
                    <nav id='navbar'  className="navbar navbar-expand-lg">
                         <div className="container-fluid">
                              {data1}
                              <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse navlinks" id="navbarSupportedContent">
                                   <ul className="navbar-nav mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                             <a className="links" aria-current="page" href={'/'}>Inicio</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="links" aria-current="page" href={'/'}>Quienes somos</a>
                                        </li>

                                        {data}
                                        
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
