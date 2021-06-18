import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export default class footer1 extends Component {
    render() {
        return (
            <div>
                
                <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 style={{marginLeft:"200px"}} className="title">RockFort Properties</h5>
            <ul>
              <li style={{marginLeft:"180px"}} className="list-unstyled">
             <a href="/"><b>Home</b></a>
              </li>
              <li style={{marginLeft:"180px"}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/expert"><b>Expertise</b></a>
              </li>
              <li style={{marginLeft:"180px"}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/project"><b>Project Details</b></a>
              </li>
              <li style={{marginLeft:"180px"}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/"><b>Ongoing Project</b></a>
              </li> <li style={{marginLeft:"180px"}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/past"><b>Completed Projects</b></a>
              </li> <li style={{marginLeft:"180px"}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/ach"><b>Achievements</b></a>
              </li>
              <li style={{marginLeft:"180px"}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/pricing"><b>Pricing</b></a>
              </li>
              
              
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h5 style={{marginLeft:"350px"}} className="title">CONTACT US</h5>
            <ul>
              <li style={{marginLeft:"320px"}} className="list-unstyled">
             PHONE NUMBER: <a href="#!">9787911580</a>
              </li>
              <li style={{marginLeft:"320px"}} className="list-unstyled">
              E-MAIL: <a style={{marginLeft:"5px"}} href="#!">Ganapathi10@gmail.com</a>
              </li>
               <li className="list-unstyled">
                <a href="#!"><i style={{fontSize:"50px"}} class="fab fa-facebook"></i></a>
                <a style={{marginLeft:"20px"}} href="#!"><i style={{fontSize:"50px"}} class="fab fa-instagram"></i></a>
                <a style={{marginLeft:"20px"}} href="#!"><i style={{fontSize:"50px"}} class="fab fa-whatsapp"></i></a>
               
              </li>
               <li className="list-unstyled">
               
              </li>  
            </ul>
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 style={{marginLeft:"350px"}} className="title">CONTACT US</h5>
            <ul>
              <li style={{marginLeft:"320px"}} className="list-unstyled">
             PHONE NUMBER: <a href="#!">9787911580</a>
              </li>
              <li style={{marginLeft:"320px"}} className="list-unstyled">
              E-MAIL: <a style={{marginLeft:"5px"}} href="#!">Ganapathi10@gmail.com</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
            {/* </ul>
          </MDBCol> */} 
        </MDBRow>
      </MDBContainer>
      <div  className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{marginLeft:"70px"}}>
          &copy; {new Date().getFullYear()} Copyright:  Rockfort Properties
        </MDBContainer>
      </div>
    </MDBFooter>
            </div>
        )
    }
}
