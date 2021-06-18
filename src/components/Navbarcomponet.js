import React, { Component } from 'react'

export default class NavbarComponent extends Component{
  render(){
    return(
      <div>
{/* <nav class="navbar navbar-expand navbar-light" style={{backgroundColor:"white",color:"red"}}>
  
      <a class="navbar-brand" href="/"><img style={{height:"90px",marginLeft:"150px"}} alt="" src="./rlogi.png"/></a>
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a style={{marginLeft:"50px"}} class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item" style={{marginLeft:"10px"}}>
            <a class="nav-link" href="/project">Project</a>
            
          </li>
          <li class="nav-item" style={{marginLeft:"10px"}}>
            <a class="nav-link" href="/expert">Expertise</a>
          </li>
          <li class="nav-item" style={{marginLeft:"10px"}}>
            <a class="nav-link" href="/ach"></a>
          </li>
          <li class="nav-item" style={{marginLeft:"10px"}}>
            <a  class="nav-link" href="/pricing">Pricing</a>
          </li>
          <li class="nav-item" style={{marginLeft:"10px"}}>
            <a class="nav-link" href="/">Ongoing Project</a>
          </li>
          <li class="nav-item" style={{marginLeft:"10px"}}>
            <a class="nav-link" href="/past">Completed Project</a>
          </li>
          <li class="nav-item" style={{marginLeft:"500px"}}>
      
          </li>
          


          {/* <li class="nav-item">
            <a style={{marginLeft:"550px"}} class="nav-link" href="/about">Contact us</a>
          </li> */}
          
         
          

          
{/*         
        </ul>
    </nav> */} 
    <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"white"}}>
  <a class="navbar-brand" href="/"><img style={{height:"90px",marginLeft:"150px"}} alt="" src="./rlogi.png"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="expert">Exepertise</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/project"> Projects Details</a>
          <a class="dropdown-item" href="/">Ongoing Projects </a>
      
          <a class="dropdown-item" href="/past">Completed Projects</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/ach">Achievements</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/pricing">Pricing</a>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
    )
  }
}