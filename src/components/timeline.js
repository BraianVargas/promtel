import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";


import "../css/timeline.css"

export default function AlternateTimeline() {
  const mainInfo = {
    first : "Somos PROMTEL S.R.L, una empresa de capitales argentinos, dedicada a la instalación y mantenimiento de sistemas de redes, tarifación telefónica y soluciones IT, en la región de Cuyo y otras provincias de nuestro pais",
    second :"En más de 25 años de compromiso, apostamos al crecimiento de region, implementando tecnologias de punta y ofreciendo soluciones altamente efectivas en telcomunicación, redes y IOT."
  }
  const timelineData = [
    {
      year: 1997,
      description: "Fundación"
    },
    {
      year: 2005,
      description: "Construcciones"
    },
    {
      year: 2006,
      description: "Redes y conexiones eléctricas"
    },
    {
      year: 2010,
      description: "Fibra óptica"
    },
    {
      year: 2015,
      description: "IOT"
    },
    {
      year: 2019,
      description: "Construcción Civil"
    },
    {
      year: 2023,
      description: "Continuamos avanzando..."
    }
  ];


  return (
    
    <div className="timeline-container">
      <Timeline position="alternate">
        <h1 className='clients-title text-center'> Historia </h1>
        <p className="text-center main-info my-2">{mainInfo.first}</p>
        <div className="my-4">
          {timelineData.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < timelineData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                <Typography variant="body1">
                  <p className="typography">
                  {event.year}
                  </p>
                </Typography>
                <Typography variant="body2">
                  <p className="typography">
                  {event.description}
                  </p>
                </Typography>
            </TimelineContent>
          </TimelineItem>
          
          ))}
        </div>
      <p className="text-center main-info mb-5">{mainInfo.second}</p>
    </Timeline>
    </div>
  );
}
