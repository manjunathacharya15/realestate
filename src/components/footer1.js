import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../index.css'
import MediaQuery from 'react-responsive';


export default class footer1 extends Component {
    render() {
        return (
            <div className="footer" >
                <MediaQuery minWidth={320}   >
<MediaQuery maxWidth={1600}>
                    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer  fluid className="text-center text-md-left">
        <MDBRow   >
          <MDBCol  >
            <h5 style={{}} className="title">RockFort Properties</h5>
            <ul>
              <li style={{}} className="list-unstyled">
             <a href="/"><b>Home</b></a>
              </li>
              <li style={{}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/expert"><b>Expertise</b></a>
              </li>
              <li style={{}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/project"><b>Project Details</b></a>
              </li>
              <li style={{}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/"><b>Ongoing Project</b></a>
              </li> <li style={{}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/past"><b>Completed Projects</b></a>
              </li> <li style={{}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/ach"><b>Achievements</b></a>
              </li>
              <li style={{}} className="list-unstyled">
               <a style={{marginLeft:""}} href="/pricing"><b>Pricing</b></a>
              </li>
              
              
            </ul>
          </MDBCol>
          <MDBCol  >
            <h5 style={{}} className="title">CONTACT US</h5>
            <ul>
              <li style={{}} className="list-unstyled">
             PHONE NUMBER: <a href="tel:9787911580">9787911580</a>
              </li>
              <li style={{}} className="list-unstyled">
              E-MAIL: <a style={{marginLeft:"5px"}} href="mailto:Ganapathi10@gmail.com">Ganapathi10@gmail.com</a>
              
              </li>
               <li className="list-unstyled" style={{marginTop:"20px"}}>
                <a href="https://www.facebook.com/Rockfort-Properties-100668592248565"><i style={{fontSize:"50px"}} class="fab fa-facebook"></i></a>
                <a style={{marginLeft:"10px"}} href="#!"><i style={{fontSize:"50px"}} class="fab fa-instagram"></i></a>
                <a style={{marginLeft:"10px"}} href="https://wa.me/+919787911580"><i style={{fontSize:"50px"}} class="fab fa-whatsapp" > </i></a>
               </li>
            </ul>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      <div  className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{marginLeft:"70px"}}>
          &copy; {new Date().getFullYear()} Copyright:  Rockfort Properties
        </MDBContainer>
      </div>
    </MDBFooter>
    </MediaQuery>
    </MediaQuery>
                    </div>
            
        )
    }
}
