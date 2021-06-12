import React, { Component } from 'react'

export default class NavbarComponent extends Component{
  render(){
    return(
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
      <a class="navbar-brand" href="/"><img style={{height:"70px"}} src="./log.jpeg"/></a>
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a  class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a  class="nav-link" href="/pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
        
        </ul>
    </nav>
    )
  }
}