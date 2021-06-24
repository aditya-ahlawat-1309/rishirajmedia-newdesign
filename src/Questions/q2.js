import React, {Component , useState} from 'react';
import Heading from  "../Questions/Heading"
import "../Questions/Q1.css";
import "./q2.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardMembershipIcon from '@material-ui/icons/CardMembership';

import Sustainable from "../icons/Sustainable.png";
import technology from "../icons/technology.png";
import Work from "../icons/Work from home.png";
import merchandise from "../icons/merchandise.png";
import usual from "../icons/the usual.png";
import food from "../icons/food.png";
import fitness from "../icons/fitness.png";
import gift from "../icons/gift card.png";
import utilities from "../icons/utilities.png";


function q2() {
    return (
        <div>

        <div class="phone">
            <div class="container_bar">
      <div style={{
            width:"85%",
            marginLeft:"7.5%",
            marginRight:"7.5%",
            backgroundColor:"#FFDECC",
            borderRadius:"10px",
            height:"11px",
            marginTop:"45px"
        }}>
            <div style=
            {{backgroundColor:"#FF5c00",
            height:"19px",
            width:"28%",
            borderRadius:"10px",
            height:"11px",
            }} 
            >

            </div>
        </div>
    </div>
   
   <Heading/>
    <div class="q1"  
    style={{marginTop:"10px", fontSize:"25px",textAlign:"center",fontWeight:"395"}}
    >
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the broad theme for your perfect gifting idea ?</p>
  
  

  <div style={{marginLeft:"30px",marginLeft:"25px",marginRight:"25px"}}>

  <div style={{display:"flex"}}>
  <button 
  class="q-2-btn"
  >
  <div>
<img src={Sustainable} width="40px" height="45px"/>
<br/>
Sustainable
</div>
  </button>

  <button 
  class="q-2-btn">
  <div>
  <img src={technology} width="40px" height="35px"/>

Technology/ Electronics/ Gadgets
</div>
  </button>

  <button 
  class="q-2-btn">
  <div>
    <img src={Work} width="40px" height="40px"/>

<br/>
Work from Home
</div>
  </button>

  </div>


  <div style={{display:"flex"}}>
  <div button 
  class="q-2-btn">
  <div>
  <img src={merchandise} width="40px" height="35px"/>
<br/>

Merchandise/ Stationery
</div>
  </div>

  <button 
  class="q-2-btn">
  <div>
    <img src={usual} width="35px" height="35px" paddingTop="10px" marginTop="10px"/>
<br/>
<br/>
The Usual
</div>
  </button>

  <button 
  class="q-2-btn">
  <div>  
  <img src={food} width="40px" height="35px"/>
<br/>
<br/>
Foods & Edibles
</div>
  </button>

  </div>




  <div style={{display:"flex"}}>
  <button 
  class="q-2-btn">
  <div>
  <img src={fitness} width="51px" height="51px"/>
<br/>
Fitness
  </div>
</button>


  <button 
  class="q-2-btn">
  <div>
    <img src={gift} width="47px" height="47px"/>

<br/>
Gift Card
  </div>
</button>
  
  <button 
  class="q-2-btn">
  <div>
    <img src={utilities} width="45px" height="45px"/>
<br/>

Utilities
  </div>
</button>
  </div>




<br/>

        <br/>
        

    </div>


<div style={{display:"flex",marginTop:"25px"}}>

<a href="/Q1"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/Q4" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
    
</div>
    </div>
    </div>
































<div class="ipad">
<div class="container_bar">
      <div style={{
            width:"85%",
            marginLeft:"7.5%",
            marginRight:"7.5%",
            backgroundColor:"#FFDECC",
            borderRadius:"10px",
            height:"11px",
            marginTop:"45px"
        }}>
            <div style=
            {{backgroundColor:"#FF5c00",
            height:"19px",
            width:"28%",
            borderRadius:"10px",
            height:"11px",
            }} 
            >

            </div>
        </div>
    </div>
   
    <div style={{
            color:"#FF5c00",
            alignItems: "center",
            marginLeft:"38%",
            fontWeight:"bold",
            marginTop:"20px",
            fontSize:"25px"
        }}>
           GIFT DISCOVERY 
        </div>
    <div class="q1"  
    style={{marginTop:"10px", fontSize:"25px",textAlign:"center",fontWeight:"395"}}
    >
<p style={{marginTop:"10px", fontSize:"23px",marginLeft:"25px",marginRight:"25px"}}> What's the broad theme for your perfect gifting idea ?</p>
  
  

  <div style={{marginLeft:"30px",marginLeft:"25px",marginRight:"25px"}}>

  <div style={{display:"flex"}}>
  <button 
  class="q-2-btn-ipad"
  style={{marginLeft:"100px"}}
  >
  <div>
<img src={Sustainable} width="40px" height="45px"/>
<br/>
Sustainable
</div>
  </button>

  <button 
  class="q-2-btn-ipad">
  <div>
  <img src={technology} width="40px" height="35px"/>

Technology/ Electronics/ Gadgets
</div>
  </button>

  <button 
  class="q-2-btn-ipad">
  <div>
    <img src={Work} width="40px" height="40px"/>

<br/>
Work from Home
</div>
  </button>

  </div>


  <div style={{display:"flex"}}>
  <div button 
  class="q-2-btn-ipad"
  style={{marginLeft:"100px"}}>
  <div>
  <br/>
  <img src={merchandise} width="40px" height="35px"/>
<br/>

Merchandise/ Stationery
</div>
  </div>

  <button 
  class="q-2-btn-ipad">
  <div>
    <img src={usual} width="35px" height="35px" paddingTop="10px" marginTop="10px"/>
<br/>
<br/>
The Usual
</div>
  </button>

  <button 
  class="q-2-btn-ipad">
  <div>  
  <img src={food} width="40px" height="35px"/>
<br/>
<br/>
Foods & Edibles
</div>
  </button>

  </div>




  <div style={{display:"flex"}}>
  <button 
  class="q-2-btn-ipad"
  style={{marginLeft:"100px"}}>
  <div>
  <img src={fitness} width="51px" height="51px"/>
<br/>
Fitness
  </div>
</button>


  <button 
  class="q-2-btn-ipad">
  <div>
    <img src={gift} width="47px" height="47px"/>

<br/>
Gift Card
  </div>
</button>
  
  <button 
  class="q-2-btn-ipad">
  <div>
    <img src={utilities} width="45px" height="45px"/>
<br/>

Utilities
  </div>
</button>
  </div>




<br/>

        <br/>
        

    </div>


<div style={{display:"flex",marginTop:"25px"}}>

<a href="/Q1"  class="back_button" style={{marginLeft:"210px"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/Q4" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
    
</div>
    </div>
</div>






















<div class="desktop">
  <div class="container_bar">
      <div style={{
            width:"85%",
            marginLeft:"7.5%",
            marginRight:"7.5%",
            backgroundColor:"#FFDECC",
            borderRadius:"10px",
            height:"11px",
            marginTop:"45px"
        }}>
            <div style=
            {{backgroundColor:"#FF5c00",
            height:"19px",
            width:"28%",
            borderRadius:"10px",
            height:"11px",
            }} 
            >

            </div>
        </div>
    </div>
   
    <div style={{
            color:"#FF5c00",
            alignItems: "center",
            marginLeft:"45%",
            fontWeight:"bold",
            marginTop:"20px",
            fontSize:"25px"
        }}>
           GIFT DISCOVERY 
        </div>
    <div class="q1"  
    style={{marginTop:"10px", fontSize:"25px",textAlign:"center",fontWeight:"395"}}
    >
<p style={{marginTop:"10px", fontSize:"23px",marginLeft:"25px",marginRight:"25px"}}> What's the broad theme for your perfect gifting idea ?</p>
  
  

  <div style={{marginLeft:"30px",marginLeft:"425px",marginRight:"25px"}}>

  <div style={{display:"flex"}}>
  <button 
  class="q-2-btn-desktop"
  style={{marginLeft:"100px"}}
  >
  <div>
<img src={Sustainable} width="40px" height="45px"/>
<br/>
Sustainable
</div>
  </button>

  <button 
  class="q-2-btn-desktop">
  <div>
  <img src={technology} width="40px" height="35px"/>

Technology/ Electronics/ Gadgets
</div>
  </button>

  <button 
  class="q-2-btn-desktop">
  <div>
    <img src={Work} width="40px" height="40px"/>

<br/>
Work from Home
</div>
  </button>

  </div>


  <div style={{display:"flex"}}>
  <div button 
  class="q-2-btn-desktop"
  style={{marginLeft:"100px"}}>
  <div>
  <br/>
  <img src={merchandise} width="40px" height="35px"/>
<br/>

Merchandise/ Stationery
</div>
  </div>

  <button 
  class="q-2-btn-desktop">
  <div>
    <img src={usual} width="35px" height="35px" paddingTop="10px" marginTop="10px"/>
<br/>
<br/>
The Usual
</div>
  </button>

  <button 
  class="q-2-btn-desktop">
  <div>  
  <img src={food} width="40px" height="35px"/>
<br/>
<br/>
Foods & Edibles
</div>
  </button>

  </div>




  <div style={{display:"flex"}}>
  <button 
  class="q-2-btn-desktop"
  style={{marginLeft:"100px"}}>
  <div>
  <img src={fitness} width="51px" height="51px"/>
<br/>
Fitness
  </div>
</button>


  <button 
  class="q-2-btn-desktop">
  <div>
    <img src={gift} width="47px" height="47px"/>

<br/>
Gift Card
  </div>
</button>
  
  <button 
  class="q-2-btn-desktop">
  <div>
    <img src={utilities} width="45px" height="45px"/>
<br/>

Utilities
  </div>
</button>
  </div>






        
        

    </div>


<div style={{display:"flex",marginTop:"75px"}}>

<a href="/Q1"  class="back_button" style={{marginLeft:"42%"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/Q4" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
    
</div>
    </div>
</div>


















    </div>

        
    )
}

export default q2;
