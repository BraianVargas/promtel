import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default class Contacts extends Component {
  render() {
    return (
     <>
          <Navbar/>
          <div>Contacts</div>
          <Footer/>
     </>
    )
  }
}
