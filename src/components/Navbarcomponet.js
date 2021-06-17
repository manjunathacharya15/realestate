import React, { Component } from 'react'

export default class NavbarComponent extends Component{
  render(){
    return(
      <div>
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white",color:"red"}}>
  
      <a class="navbar-brand" href="/"><img style={{height:"90px",marginLeft:"150px"}} alt="" src="./rlogi.png"/></a>
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a style={{marginLeft:"50px"}} class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/project">Project</a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/expert">Expertise</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ach">Achievements</a>
          </li>
          <li class="nav-item">
            <a  class="nav-link" href="/pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Ongoing Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/past">Past Project</a>
          </li>
          <li class="nav-item" style={{marginLeft:"280px"}}>
            <li> Contactus</li>
            <li>Number:9787911580  </li>
           <li>Email:Ganapathi10@gmail.com</li> 
          </li>
          


          {/* <li class="nav-item">
            <a style={{marginLeft:"550px"}} class="nav-link" href="/about">Contact us</a>
          </li> */}
          
         
          

          
        
        </ul>
    </nav>
    </div>
    )
  }
}