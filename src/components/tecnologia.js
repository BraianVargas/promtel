import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Carouselcontent from './carouselcontent'

export default class Tecnologia extends Component {
    render() {
        return (
            <>
                <Navbar/>

                <Carouselcontent/>

                <Footer/>
            </>
        )
    }
}
