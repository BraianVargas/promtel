import React, { Component } from 'react'
import '../css/clients.css'
import banner1 from '../img/home/banner.png'
import banner2 from '../img/home/banner2.png'


export default class Clients extends Component {
    render() {
        return (
            <div className='clientsContainer'>
                <h1 className='clients-title'>Nuestros Clientes</h1>
                <div className='banner-container'>
                    <div className='banner1' style={{backgroundImage: `url(${banner1})`}}></div>
                    <div className='banner2' style={{backgroundImage: `url(${banner2})`}}></div>
                </div>
            </div>
        )
    }
}
