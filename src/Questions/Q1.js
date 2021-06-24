import React, {Component , useState} from 'react';
import Heading from  "./Heading"
import "./Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class Q1 extends Component {

constructor(props) {
     super(props);
    this.state = { page1: false,
    page2:false,
  page3:false }
    this.handleClick1= this.handleClick1.bind(this);
    this.handleClick2= this.handleClick2.bind(this);
    this.handleClick3= this.handleClick3.bind(this);
  }

  handleClick1() {
    this.setState({ page1: true}) 
    console.log("button1 clicked")

  }

  handleClick2() {
    this.setState({ page2: true}) 
    console.log("button2 clicked")

  }

  handleClick3() {
    this.setState({ page3: true}) 
    console.log("button3 clicked ")

  }

  render() {

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

  

  <button 
class="q-btn"
onClick={this.handleClick1}
  >Event Giveaway</button><br/>



  <button
  
class="q-btn"
  onClick={this.handleClick2}
  >Corporate Merchandise</button><br/>



  <button
  class="q-btn"
onClick={this.handleClick1}
  >Sales Promotion</button><br/>



  <button
 class="q-btn"

  onClick={this.handleClick1}
  >Special Days</button><br/>



  <button
  class="q-btn"

  onClick={this.handleClick3}

  >Rewards & Recognition</button><br/>

<br/>

        <br/>
        <br/>
         <br/>

    </div>


<div style={{display:"flex"}}>

<a href="/"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
  {
    this.state.page1 ?
    (
      <a href="/q2" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    )
    :
    (
      this.state.page2 ?
      (
        <a href="/q22" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
      ) :
      (this.state.page3 ?
      (
        <a href="/q32" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>

      )
      :
      (
        <a href="" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
      )
    )
    )
  }
         
    
   
    
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
<p style={{marginTop:"10px", fontSize:"23px",marginLeft:"25px",marginRight:"25px"}}> What's the occasion for which your are looking for the gifts?</p>
  
  <br/>

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

  

  <button 
class="q-btn_ipad"
onClick={this.handleClick1}
  >Event Giveaway</button><br/>



  <button
  
class="q-btn_ipad"
  onClick={this.handleClick2}
  >Corporate Merchandise</button><br/>



  <button
class="q-btn_ipad"onClick={this.handleClick1}
  >Sales Promotion</button><br/>



  <button
class="q-btn_ipad"
  onClick={this.handleClick1}
  >Special Days</button><br/>



  <button
class="q-btn_ipad"
  onClick={this.handleClick3}

  >Rewards & Recognition</button><br/>

<br/>

        <br/>
        <br/>
         <br/>

    </div>

<br/><br/>
<div style={{display:"flex"}}>

<a href="/"  class="back_button" style={{marginLeft:"210px"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
  {
    this.state.page1 ?
    (
      <a href="/q2" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    )
    :
    (
      this.state.page2 ?
      (
        <a href="/q22" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
      ) :
      (this.state.page3 ?
      (
        <a href="/q32" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>

      )
      :
      (
        <a href="" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
      )
    )
    )
  }
         
    
   
    
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
<p style={{marginTop:"10px", fontSize:"23px",marginLeft:"25px",marginRight:"25px"}}> What's the occasion for which your are looking for the gifts?</p>
  
  

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

  

  <button 
class="q-btn_desktop"
onClick={this.handleClick1}
  >Event Giveaway</button><br/>



  <button
  
class="q-btn_desktop"
  onClick={this.handleClick2}
  >Corporate Merchandise</button><br/>



  <button
class="q-btn_desktop"onClick={this.handleClick1}
  >Sales Promotion</button><br/>



  <button
class="q-btn_desktop"
  onClick={this.handleClick1}
  >Special Days</button><br/>



  <button
class="q-btn_desktop"
  onClick={this.handleClick3}

  >Rewards & Recognition</button><br/>

<br/>

        <br/>
        <br/>
         <br/>

    </div>

<br/><br/>
<div style={{display:"flex"}}>

<a href="/"  class="back_button" style={{marginLeft:"42%"}}><ArrowBackIcon style={{color:"white"}}/></a>
    
  {
    this.state.page1 ?
    (
      <a href="/q2" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    )
    :
    (
      this.state.page2 ?
      (
        <a href="/q22" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
      ) :
      (this.state.page3 ?
      (
        <a href="/q32" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>

      )
      :
      (
        <a href="" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
      )
    )
    )
  }
         
    
   
    
</div>
    </div>
</div>















    </div>

         );
    }
  }
 
export default Q1;