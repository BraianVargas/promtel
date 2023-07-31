import React, { Component } from 'react'
import "../css/about.css"
const timelineData = [
  {
    'year': 1,
    'event' : "Fundacion"
  }, 
  {
    'year': 1,
    'event' : "img1"
  }, 
  {
    'year': 1,
    'event' : "img1"
  }, 
]
  // title : "Nuestra Historia",
  
  // content1:"Somos PROMTEL SRL, una empresa líder con más de una década de experiencia en redes y telecomunicaciones, IoT y construcciones civiles. Nuestra misión es facilitar la conectividad y mejorar la calidad de vida a través de soluciones innovadoras. Con más de 20 clientes satisfechos en la provincia, nos enorgullecemos de ser su socio preferido en el despliegue de tecnologías avanzadas. Nuestros valores fundamentales de innovación, calidad, integridad, colaboración y responsabilidad social nos guían en cada proyecto que emprendemos. Únase a nuestra historia de éxito y construyamos un futuro más conectado juntos.",
  // content2:"Nuestra mision es facilitar la conectividad y mejorar la calidad de vida a través de soluciones innovadoras en redes y telecomunicaciones, IoT y construcciones civiles. Creemos que una sociedad interconectada es esencial para el progreso y el desarrollo, y nos enorgullece contribuir a la creación de un mundo más conectado y tecnológicamente avanzado. Nuestra visión es ser reconocidos como el socio preferido en el mercado de las telecomunicaciones y la construcción, superando las expectativas de nuestros clientes en cada proyecto que emprendemos. Aspiramos a seguir siendo pioneros en la implementación de tecnologías de vanguardia, asegurando un impacto positivo y sostenible en las comunidades en las que operamos."

export default class About extends Component {
  render() {
    return (
      <div className='timeline-container'>
        <h1 className='clients-title text-center'> Historia </h1>
        
        <div className="timeline">
        {timelineData.map((event, index) => (
          <div className="timeline-item text-center" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-description">{event.description}</div>
          </div>
        ))}
      </div>
      </div>
    )
  }
}
