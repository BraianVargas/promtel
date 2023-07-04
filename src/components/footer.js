import React, { Component } from 'react'
import logo from "../img/logo.png"

import "../css/footer.css"

const socials = [
  {
    id : "1",
    logoClass: "bi bi-facebook",
    link:"https://www.facebook.com/promtelsrl",
    iconName: "Facebook"
  },
  {
    id : "2",
    logoClass:"bi bi-linkedin",
    link:"https://www.linkedin.com/feed/",
    iconName: "Linkedin"

  },
  {
    id : "3",
    logoClass:"bi bi-twitter",
    link:"https://twitter.com/",
    iconName: "Twitter"

  },
]
const iconList = socials.map((social) =>
  <li id={social.id} className={social.iconName} key={social.id}>
    <a href={social.link} target='_blank' rel="noreferrer" >
      <i className={social.logoClass} />
    </a>
  </li>
);

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='footer'>
          <div className='logo'>
            <a href={'/'}>
              <img  alt='logo-promtel' src={logo}/>
            </a>
          </div>
          <div className='social'>
            <ul>
              {iconList}
            </ul>
          </div>
          <div className='buttons-extra'>
            <a href={'/'}> Contacto </a>
            <a href={'/'}> Trabaja con nosotros </a>
          </div>
        </div>
      </>
    )
  }
}
