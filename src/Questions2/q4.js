import React, {Component , useState} from 'react';
import Heading from  "../Questions/Heading"
import "../Questions/Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function q24(props){
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
            {{backgroundColor:"#FFDECC",
            height:"19px",
            width:"95%",
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
  
  <br/>

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

  

  <button class="q-btn"
  >Yes</button><br/>



  <button class="q-btn"
  >No</button><br/>

<br/>


<br/>

        <br/>
        <br/>
         <br/>

    </div>


<div style={{display:"flex",marginTop:"210px"}}>

<a href="/q2"  class="back_button" style={{marginLeft:"210px"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
    
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
            {{backgroundColor:"#FFDECC",
            height:"19px",
            width:"95%",
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
  
  <br/>

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

  

  <button class="q-btn_ipad"
  >Yes</button><br/>



  <button class="q-btn_ipad"
  >No</button><br/>

<br/>


<br/>

        <br/>
        <br/>
         <br/>

    </div>


<div style={{display:"flex",marginTop:"410px"}}>

<a href="/q2"  class="back_button" style={{marginLeft:"210px"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
    
         <a href="/Q5" class="banner_buttonQ" 
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
            {{backgroundColor:"#FFDECC",
            height:"19px",
            width:"95%",
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
  
  <br/>

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

  

  <button class="q-btn_desktop"
  >Yes</button><br/>



  <button class="q-btn_desktop"
  >No</button><br/>



    </div>


<div style={{display:"flex",marginTop:"300px"}}>

<a href="/q2"  class="back_button" style={{marginLeft:"41.5%"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
    
    
         <a href="/Q5" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
   
    
</div>
</div>
</div>















    </div>

         );
    }

 
export default q24;