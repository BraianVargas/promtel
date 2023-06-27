import React, { Component } from 'react'
import Navbar from "./navbar"
import Content from "./content"


export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Content/>
        <div>Content</div>
        <div>&nbsp;</div>
        <div>Footer</div>
        <div>&nbsp;</div>
      </div>
    )
  }
}
