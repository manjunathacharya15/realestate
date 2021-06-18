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
            {/* <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p> */}
          </MDBCol>
          <MDBCol md="6">
            <h5 style={{marginLeft:"350px"}} className="title">Contact Us</h5>
            <ul>
              <li style={{marginLeft:"320px"}} className="list-unstyled">
              Phonenumber: <a href="#!">9787911580</a>
              </li>
              <li style={{marginLeft:"320px"}} className="list-unstyled">
              Email:<a href="#!">Ganapathi10@gmail.com</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
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
            </div>
        )
    }
}
