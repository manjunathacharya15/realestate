import React, { Component } from 'react'

export default class NavbarComponent extends Component{
  render(){
    return(
      <div  style={{width:"100%"}}>

    <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"white"}}>
  <a class="navbar-brand" href="/"><img style={{height:"90px",marginLeft:"150px"}} alt="" src="./rlogi.png"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item " style={{marginLeft:"30px"}}>
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item"  style={{marginLeft:"20px"}}>
        <a class="nav-link" href="expert">Exepertise</a>
      </li>
      <li class="nav-item dropdown" style={{marginLeft:"20px"}}>
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/project"> Projects Details</a>
          <a class="dropdown-item" href="/">Ongoing Projects </a>
      
          <a class="dropdown-item" href="/past">Completed Projects</a>
        </div>
      </li>
      <li class="nav-item" style={{marginLeft:"20px"}}>
        <a class="nav-link " href="/ach">Achievements</a>
      </li>
     <li class="nav-item" style={{marginLeft:"20px"}}>
        <a class="nav-link " href="/pricing">Pricing</a>
      </li> 
      <li class="nav-item" style={{marginLeft:"20px"}}>
        <a class="nav-link " href="/try">Pricing</a>
      </li> 
      
    </ul>
    
  </div>
</nav>
    </div>
    )
  }
}