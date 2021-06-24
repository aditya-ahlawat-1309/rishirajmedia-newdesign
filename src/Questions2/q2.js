import React, {Component , useState} from 'react';
import Heading from  "../Questions/Heading"
import "../Questions/Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import technology from "../icons/technology.png"


import tshirt from "../icons/tshirt.png";
import bags from "../icons/bags.png";
import table from "../icons/table top.png";
import laptop from "../icons/laptop sleeves.png";
import mug from "../icons/mug.png";
import food from "../icons/food.png";
import fitness from "../icons/fitness.png";


function q22() {
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
            width:"30%",
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
  <button class="q-2-btn">
  <div>
  <img src={tshirt} width="40px" height="35px"/>
<br/>
<br/>
T-shirt
</div>
  </button>

  <button class="q-2-btn">
  <div>
    <img src={technology} width="40px" height="35px"/>

Stationery
</div>
  </button>

  <button class="q-2-btn">
  <div>
    <img src={bags} width="40px" height="35px"/>
<br/>
<br/>
Bags
</div>
  </button>

  </div>


  <div style={{display:"flex"}}>
  <button class="q-2-btn">
  <div>
  <img src={table} width="40px" height="35px"/>
<br/>
<br/>
Table Tops
</div>
  </button>

  <button class="q-2-btn">
  <div>
    <img src={laptop} width="40px" height="35px"/>
<br/>
<br/>
Laptop Sleeves
</div>
  </button>

  <button class="q-2-btn">
  <div>
    <img src={mug} width="40px" height="35px"/>
<br/>
<br/>
Mugs/Bottles
</div>
  </button>

  </div>




  <div style={{display:"flex"}}>
  <button class="q-2-btn">
  <div>
  <img src={technology} width="40px" height="35px"/>

Technology / Electronics / Gadgets
  </div>
  </button>

  <button class="q-2-btn">
<div>
    <img src={food} width="40px" height="35px"/>
<br/>
<br/>
Food & Edibles
 </div>
  </button>

  <button class="q-2-btn">
<div>
    <img src={fitness} width="51px" height="51px"/>
<br/>

Fitness
</div>
  </button>

  </div>




<br/>

        <br/>
        

    </div>


<div style={{display:"flex",marginTop:"20px"}}>

<a href="/Q1"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/Q5" class="banner_buttonQ" 
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
            width:"30%",
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
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the broad theme for your perfect gifting idea ?</p>
  
  

  <div style={{marginLeft:"30px",marginLeft:"25px",marginRight:"25px"}}>

  <div style={{display:"flex"}}>
  <button class="q-2-btn-ipad">
  <div>
  <img src={tshirt} width="40px" height="35px"/>
<br/>
<br/>
T-shirt
</div>
  </button>

  <button class="q-2-btn-ipad">
  <div>
    <img src={technology} width="40px" height="35px"/>

Stationery
</div>
  </button>

  <button class="q-2-btn-ipad">
  <div>
    <img src={bags} width="40px" height="35px"/>
<br/>
<br/>
Bags
</div>
  </button>

  </div>


  <div style={{display:"flex"}}>
  <button class="q-2-btn-ipad">
  <div>
  <img src={table} width="40px" height="35px"/>
<br/>
<br/>
Table Tops
</div>
  </button>

  <button class="q-2-btn-ipad">
  <div>
    <img src={laptop} width="40px" height="35px"/>
<br/>
<br/>
Laptop Sleeves
</div>
  </button>

  <button class="q-2-btn-ipad">
  <div>
    <img src={mug} width="40px" height="35px"/>
<br/>
<br/>
Mugs/Bottles
</div>
  </button>

  </div>




  <div style={{display:"flex"}}>
  <button class="q-2-btn-ipad">
  <div>
  <img src={technology} width="40px" height="35px"/>
<br/>
Technology / Electronics / Gadgets
  </div>
  </button>

  <button class="q-2-btn-ipad">
<div>
    <img src={food} width="40px" height="35px"/>
<br/>
<br/>
Food & Edibles
 </div>
  </button>

  <button class="q-2-btn-ipad">
<div>
    <img src={fitness} width="51px" height="51px"/>
<br/>

Fitness
</div>
  </button>

  </div>




<br/>

        <br/>
        

    </div>


<div style={{display:"flex",marginTop:"90px"}}>

<a href="/Q1"  class="back_button" style={{marginLeft:"210px"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/q24" class="banner_buttonQ" 
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
            width:"30%",
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
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the broad theme for your perfect gifting idea ?</p>
  
  

  <div style={{marginLeft:"30px",marginLeft:"31%",marginRight:"25px"}}>

  <div style={{display:"flex"}}>
  <button class="q-2-btn-desktop">
  <div>
  <img src={tshirt} width="40px" height="35px"/>
<br/>
<br/>
T-shirt
</div>
  </button>

  <button class="q-2-btn-desktop">
  <div>
    <img src={technology} width="40px" height="35px"/>

Stationery
</div>
  </button>

  <button class="q-2-btn-desktop">
  <div>
    <img src={bags} width="40px" height="35px"/>
<br/>
<br/>
Bags
</div>
  </button>

  </div>


  <div style={{display:"flex"}}>
  <button class="q-2-btn-desktop">
  <div>
  <img src={table} width="40px" height="35px"/>
<br/>
<br/>
Table Tops
</div>
  </button>

  <button class="q-2-btn-desktop">
  <div>
    <img src={laptop} width="40px" height="35px"/>
<br/>
<br/>
Laptop Sleeves
</div>
  </button>

  <button class="q-2-btn-desktop">
  <div>
    <img src={mug} width="40px" height="35px"/>
<br/>
<br/>
Mugs/Bottles
</div>
  </button>

  </div>




  <div style={{display:"flex"}}>
  <button class="q-2-btn-desktop">
  <div>
  <img src={technology} width="40px" height="35px"/>
<br/>
Technology / Electronics / Gadgets
  </div>
  </button>

  <button class="q-2-btn-desktop">
<div>
    <img src={food} width="40px" height="35px"/>
<br/>
<br/>
Food & Edibles
 </div>
  </button>

  <button class="q-2-btn-desktop">
<div>
    <img src={fitness} width="51px" height="51px"/>
<br/>

Fitness
</div>
  </button>

  </div>


        

    </div>


<div style={{display:"flex",marginTop:"90px"}}>

<a href="/Q1"  class="back_button" style={{marginLeft:"41%"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/q24" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
    
</div>
    </div>
</div>

















    </div>

        
    )
}

export default q22;
