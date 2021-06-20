import React, { Component } from 'react'
import MediaQuery from 'react-responsive'


export default class pricing extends Component{
    render(){
        return(
            <div>
                    <MediaQuery minWidth={320}  >
<MediaQuery maxWidth={1600}>
            <div >
             
            
                    <img style={{width:"60%",marginBottom:"80px",marginTop:"50px"}} alt="" src="./pricing.jpeg"/>
                   
                    
                    </div>
                    </MediaQuery>
                    </MediaQuery>
                    </div>
                    
           
        )
    }
}