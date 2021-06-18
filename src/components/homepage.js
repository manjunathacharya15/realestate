import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'




export default class homepage extends Component {
    render() {
        return (
            <div className="container" style={{margin:"auto 50px auto 50px",
            display: "flex",
  flexdirection: "column"
            }}>
                <div className="row">
                    <div className=" col-lg">
                        
              
                {/* <div>
                <img style={{width:"1400px",height:"700px"}} alt="" src="./first1.jpg"/>
              
                </div> */}
                <div>
                <Carousel interval={"2000"} style={{marginTop:""}}>
  <Carousel.Item  >
    <img
    style={{width:"1400px",height:"700px"}}
      
      src="./first1.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item >
    <img
    style={{width:"1400px",height:"700px"}}
      
      src="./first2.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item >
    <img
    style={{width:"1400px",height:"700px"}}
      
      src="./first3.jpg"
      alt="Second slide"
    />

  
  </Carousel.Item>
 
</Carousel>
</div>
                
               
                <div style={{display:"flex",alignItems:"center"}} >
                    <img  style={{width:"800px",height:"600px",marginTop:"100px"}} alt="" src="./house.jpg"/>
                    
                        <span style={{marginLeft:"50px"}}><b><h1>ABOUT US</h1></b><br/>
                        <p  style={{textAlign:"center",fontSize:"15px",fontFamily:"Montserrat,sans-serif",}}> A dynamic background with over 30+ years of experience into real estate with a high profile and prepared with hard efforts in the industry of real estate in South India.Holds strong credibility by making many innovative marketing strategies and maintaining a great Leadership quality with staffs and builder to extend my hand for their growth drastically by developing business using multiple platforms. 
Rockfort Properties is the leading integrated resource for executives and companies that own, invest in, develop and/or manage commercial real estate. With an emphasis on executive profiles and industry and economic data, Rockfort Properties also includes reports covering finance, sustainability, technology, property management, education and legal and regulatory issues. 
Rockfort Properties delivers timely, in-depth and authoritative analysis of industry news, as well as access to thought leaders’ best practice strategies and proven business solutions through written, audio and video presentations.
Whether you measure our performance in terms of size, sales volume or number of transactions, Rockfort Properties is driving innovation and delivering value to home buyers and sellers. 
When searching for your next home or a local market expert who’ll help you achieve your real estate goals, Rockfort Properties is an indispensable resource designed with you in mind.</p>
                      



                 </span>
                    
                </div>
               
                <div style={{display:"flex",alignItems:"center",flexDirection:"row-reverse"}} >
                <img  style={{width:"800px",height:"600px",marginTop:"100px",marginBottom:"100px",float:"left"}} alt="" src="./home.jpg"/>
                <span style={{marginLeft:""}} ><b><h1>AWARDS & RECOGNITIONS</h1></b><br/>
                <p style={{textAlign:"center",fontSize:"15px",fontFamily:"Montserrat,sans-serif",marginright:"100px"}}><b>
                We ensure our clients come with a lot of expectations and we will be the best point of contact for their words.</b>
                    <ol >
                   <br/>
                   <i style={{color:"gold"}} class="fa fa-star" aria-hidden="true"></i><span style={{marginRight:"126px",padding:"10px"}} >Best CP Award</span> <br/>
                   <i style={{color:"gold"}} class="fa fa-star" aria-hidden="true"></i><span style={{marginRight:"110px",padding:"10px"}}>Oldest CP Award</span> <br/>
                   <i style={{color:"gold"}} class="fa fa-star" aria-hidden="true"></i><span style={{marginRight:"65px",padding:"10px"}}>Best Business Strategy</span> <br/>	
                   <i style={{color:"gold"}} class="fa fa-star" aria-hidden="true"></i><span style={{padding:"10px"}}>Largest connect wrt client base</span> 

                    </ol>
                    </p> </span>
                </div>
                
                </div>
                </div>
                
            </div>
        )
    }
}
