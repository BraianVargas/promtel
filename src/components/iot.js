import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Carouselcontent from './carouselcontent'

import img01 from "../img/home/carousel/tecnologia/01.webp"
import img02 from "../img/home/carousel/tecnologia/02.webp"
import img03 from "../img/home/carousel/tecnologia/03.webp"
import img04 from "../img/home/carousel/tecnologia/04.webp"

const data = {
    title : "IOT",
    content : "Somos PROMTEL SRL, una empresa líder con más de una década de experiencia en redes y telecomunicaciones, IoT y construcciones civiles. Nuestra misión es facilitar la conectividad y mejorar la calidad de vida a través de soluciones innovadoras. Con más de 20 clientes satisfechos en la provincia, nos enorgullecemos de ser su socio preferido en el despliegue de tecnologías avanzadas. Nuestros valores fundamentales de innovación, calidad, integridad, colaboración y responsabilidad social nos guían en cada proyecto que emprendemos. Únase a nuestra historia de éxito y construyamos un futuro más conectado juntos."
}
const carouselImg = [
    img01,
    img02,
    img03,
    img04
]

export default class Iot extends Component {
    render() {
        return (
            <>
                <Navbar/>

                <Carouselcontent images={carouselImg} data={data} />

                <Footer/>
            </>
        )
    }
}
