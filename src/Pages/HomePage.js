import React from 'react'
import "./HomePage.css"

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import landingPage from "../images/landing-page.jpg";
function HomePage() {
    return (
      <div>
      <div class="phone">
 <div class="container">
 <img class="img-HomePage" src={landingPage}>
                
            </img>
  <div class="centered">
  <div class = "heading"
   style={{fontSize:"33px" ,
   textAlign:"center",
    fontFamily:"Merriweather",
    fontWeight:"500",
    marginRight:"110px",
    marginLeft:"10.5px",
    }}>
    WE MAKE CORPORATE GIFTING EASY!
    </div>

  <br/>
               <div style=
               {{fontFamily:"Lato",
               fontSize:"18.5px",
               textAlign:"center",
               marginRight:"115px",
               marginLeft:"25.5px",
               }}> As your premiere corporate gifting partner,<br/> 
                we'll work together to provide meaningful, <br/>
                exceptional gifts to your customers, employees, and more.
            </div>
            <br/>
            <br/>
            <br/>
            <a href="/Q1" 
            class="banner_button1" 
            style={{
                textDecorationLine:"none",
                fontWeight:"475",
                fontFamily:"sans-serif",
                color:"black", 
                fontSize:"15x",
                 display: 'flex',
               width:"110px"
                }}>Get Started
               
               <ArrowForwardIcon color="#000"/>

                
                </a>
                </div>
  
  {/* <div class="top-left">Top Left</div>
  <div class="top-right">Top 
  Right</div>
  <div class="bottom-right">Bottom Right</div> */}
  </div>
</div>
  
















<div class="ipad">

 <div class="container">
 <img class="img-HomePage" src={landingPage}>
                
            </img>
  <div class="centered">
  <div class = "heading"
   style={{fontSize:"51px" ,
   textAlign:"center",
    fontFamily:"Merriweather",
    fontWeight:"500",
    marginRight:"110px",
    marginLeft:"10.5px",
    }}>
    W E &nbsp; M A K E <br/>C O R P O R A T E <br/>G I F T I N G  <br/>E A S Y !
    </div>

  <br/>
               <div style=
               {{fontFamily:"Lato",
               fontSize:"28.5px",
               textAlign:"center",
               marginRight:"115px",
               marginLeft:"25.5px",
               }}> As your premiere corporate <br/>gifting partner, 
                we'll work <br/>together to provide meaningful, <br/>
                exceptional gifts to your<br/> customers, employees, and more.
            </div>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <a href="/Q1" 
            class="banner_button1" 
            style={{
                textDecorationLine:"none",
                fontWeight:"475",
                fontFamily:"sans-serif",
                color:"black", 
                fontSize:"15x",
                 display: 'flex',
               width:"110px",
               marginLeft:"125px"
                }}>Get Started
               
               <ArrowForwardIcon color="#000"/>

                
                </a>
                </div>
  
  {/* <div class="top-left">Top Left</div>
  <div class="top-right">Top 
  Right</div>
  <div class="bottom-right">Bottom Right</div> */}
  </div>

</div>





















<div class="desktop">
 <div class="container">
 <img class="img-HomePage" src={landingPage}>
                
            </img>
  <div class="centered_desktop">
  <div class = "heading"
   style={{fontSize:"51px" ,
   textAlign:"center",
    fontFamily:"Merriweather",
    fontWeight:"500",
    marginRight:"110px",
    marginLeft:"170.5px",
    margintop:"-5px",
    }}>
    W E &nbsp; M A K E <br/>C O R P O R A T E <br/>G I F T I N G  &nbsp;E A S Y !
    </div>

  <br/>
               <div style=
               {{fontFamily:"Lato",
               fontSize:"28.5px",
               textAlign:"center",
               marginRight:"115px",
               marginLeft:"195.5px",
               }}> As your premiere corporate <br/>gifting partner, 
                we'll work <br/>together to provide meaningful, <br/>
                exceptional gifts to your<br/> customers, employees, and more.
            </div>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <a href="/Q1" 
            class="banner_button1" 
            style={{
                textDecorationLine:"none",
                fontWeight:"475",
                fontFamily:"sans-serif",
                color:"black", 
                fontSize:"15x",
                 display: 'flex',
               width:"110px",
               marginLeft:"335px"
                }}>Get Started
               
               <ArrowForwardIcon color="#000"/>

                
                </a>
                </div>
  
  {/* <div class="top-left">Top Left</div>
  <div class="top-right">Top 
  Right</div>
  <div class="bottom-right">Bottom Right</div> */}
  </div>
</div>























</div>
    )
}

export default HomePage
