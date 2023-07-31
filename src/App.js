import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./css/App.css"
import Navbar from "./components/navbar"
import Footer from './components/footer';
import Carousel from './components/carousel';
import MainView from './components/mainView';
import Clients from './components/clients';
import Timeline from './components/timeline';

export default function Root() {
  return (
    <>
      <Navbar/>
      <MainView/>
      <Timeline/>
      <Carousel/>
      <Clients/>
      <Footer/>
    </>
  );
}