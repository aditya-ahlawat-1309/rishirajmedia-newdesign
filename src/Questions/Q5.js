import React, {Component , useState} from 'react';
import Heading from  "./Heading"
import "./Q1.css";
import illustration from "../images/illustration.png"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Q5(props){

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
            width:"71%",
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
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the occasion for which your are looking for the gifts?</p>
  
  

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

<img class="img-illustration" src={illustration}/>
  
<div style={{
  textAlign:"center",
  marginLeft:"30px",
  fontSize:"17.5px",
  marginLeft:"10px",
  marginRight:"25px",
  fontSize:"23.5px", 
color:"#000", 
backgroundColor:"#dee6e8",
paddingTop:"10px",
paddingBottom:"10px",
borderRadius:"10px"}}>DID YOU KNOW ?</div>

 <div style={{marginTop:"13px", textAlign:"center",marginLeft:"30px",fontSize:"17.5px",marginLeft:"10px",marginRight:"25px",fontSize:"17.5px", color:"#dbb144"}}>Gifting is an inexpensive way to boost morale during difficult times.</div>
  <br/>

<br/>
       

    </div>


<div style={{display:"flex",marginTop:"10px"}}>

<a href="/Q4"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    
    
         <a href="/Q6" class="banner_buttonQ" 
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
            width:"71%",
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
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the occasion for which your are looking for the gifts?</p>
  
  

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>
<br/><br/>
<img class="img-illustration" src={illustration}/>
  
<div style={{
  textAlign:"center",
  marginLeft:"30px",
  fontSize:"17.5px",
  marginLeft:"10px",
  marginRight:"25px",
  fontSize:"23.5px", 
color:"#000", 
backgroundColor:"#dee6e8",
paddingTop:"10px",
paddingBottom:"10px",
borderRadius:"10px"}}>DID YOU KNOW ?</div>

 <div style={{marginTop:"13px", textAlign:"center",marginLeft:"30px",fontSize:"23.5px",marginLeft:"10px",marginRight:"25px", color:"#dbb144"}}>Gifting is an inexpensive way to boost morale during difficult times.</div>
  <br/>

<br/>
       

    </div>


<div style={{display:"flex",marginTop:"110px"}}>

<a href="/Q4"  class="back_button" style={{marginLeft:"210px"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
    
         <a href="/Q6" class="banner_buttonQ" 
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
            width:"71%",
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
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the occasion for which your are looking for the gifts?</p>
  
  

  <div style={{display:"flex",marginLeft:"23.5%",fontSize:"17.5px",marginRight:"25px"}}>
<br/><br/>
<div>
<img 
//class="img-illustration" 
src={illustration} width="400px"/>
  
<div style={{
  textAlign:"center",
  marginLeft:"30px",
  fontSize:"17.5px",
  
  marginRight:"25px",
  fontSize:"23.5px", 
color:"#000", 
backgroundColor:"#dee6e8",
paddingTop:"10px",
paddingBottom:"10px",
borderRadius:"10px",
width:"400px"}}>DID YOU KNOW ?</div>
</div>
 <div style={{marginTop:"130px", textAlign:"center",marginLeft:"30px",fontSize:"23.5px",marginLeft:"10px",marginRight:"25px", color:"#dbb144"}}>Gifting is an inexpensive <br/> way to boost morale during<br/> difficult times.</div>
  <br/>

<br/>
       

    </div>


<div style={{display:"flex",marginTop:"110px"}}>

<a href="/Q4"  class="back_button" style={{marginLeft:"40%"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
    
         <a href="/Q6" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
   
    
</div>
    </div>
</div>

















    </div>

         );
    }

 
export default Q5;