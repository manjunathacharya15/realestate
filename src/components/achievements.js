import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export default class achievements extends Component {
    render() {
        return (
            <div>
                    <MediaQuery minWidth={320}  >
<MediaQuery maxWidth={1600}>
            <div style={{display:"flex"}}>
          
                    <img  style={{width:"800px",height:"600px",marginBottom:"100px",}} alt="" src="./lax.jpg"/>
               
               
              
                    
                    <span style={{marginLeft:"50px",marginTop:"200px"}} ><b><h1>NOTABLE ACHIEVEMENTS</h1></b><br/>
                <p style={{textAgn:"center",fontSize:"15px",fontFamily:"Montserrat,sans-serif",marginBottom:"200px",marginRight:"20px"}}>
               
                    <ul>
<>Sets challenging cross-functional goals.</>	 
<>Integrated functional strategies.</>	
<>Researched and developed new strategies to achieve company goals and objectives. </>	
<>Developed plans for managing/retaining talent inside organization and for improving
leadership strength. </>
<>Developed operational functions essential for increasing firm’s productivity such as
product promotion and placement.</>	
<>Monitored company pocies and developed new operational procedures.</>
<>Study the real estate market and predict the changes in the market behavior ; Ensure
optimum utization of property and other resources.</>

                    </ul>
                    </p> </span>
                 
            
                
            </div>
            </MediaQuery>
            </MediaQuery>
            </div>
        )
    }
}
