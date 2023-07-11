import React, { Component } from 'react'
import "../css/about.css"
import img1 from "../img/about/collage_1.jpg"
import img2 from "../img/about/collage_2.jpg"
import img3 from "../img/about/crecimiento.jpg"

const infoAbout = {
  title : "Sobre Nosotros",
  imageList : [
    img1, 
    img2, 
    img3
  ],
  content1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  
}

export default class About extends Component {
  render() {
    return (
     <div className='about-container'>
      { infoAbout['imageList'].map((item) => 
        <div>
          About
          {/* <img src={item} key={1}/> */}
        </div>
      )}

      
     </div>
    )
  }
}
