import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Page1.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FilterListIcon from '@material-ui/icons/FilterList';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ShareIcon from '@material-ui/icons/Share';

import "./Page1.css"
import "./Page4.css"

function Page4() {
    return (

<div>

        <div class="phone">
            <div style={{display:'flex'}}>

            <a href="/p3"  class="back_button_page1"><ArrowBackIcon style={{color:"black"}}/></a>
             
             <span style={{
                 color:"#ff5c00",
                 marginTop:"20px",
                 marginLeft:"40px",
                 fontWeight:"600"}}>SHOPPING CART</span>
            </div>


            <div style={{display:"flex",marginTop:"30px"}}>
  <div style={{
      width:"300px",
      height:"300px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8",
      marginLeft:"20px",
      marginRight:"20px",
      fontSize:"12px"
  }}>
{/* <img src={} width="40px" height="45px"/> */}
<br/>
<div style={{display:"flex"}}>
<a href="" class="edit-btn-page4">Edit</a>
<a href="" class="save-btn-page4">Save for later</a>
  </div>
  </div>

 

  </div>

<div style={{display:"flex",marginTop:"120px",marginLeft:"25px"}}>
    <span>Subtotal (VAT included)</span>
    <span style={{color:"grey",marginLeft:"89.5px"}}>Rs.5500</span>
</div>

   <div style={{display:"flex",marginTop:"-5px"}}>

         <a href="/p5" class="checkout_button" 
    style={{ display:"flex"}}
    >Continue to Checkout</a>
    
    
</div>


        </div>













<div class="ipad">
 <div style={{display:'flex'}}>

            <a href="/p3"  class="back_button_page1"><ArrowBackIcon style={{color:"black",marginTop:"1.5px"}}/></a>
             
             <span style={{
                 color:"#ff5c00",
                 marginTop:"20px",
                 marginLeft:"40px",
                 fontWeight:"600",
                 fontSize:"20px"}}>SHOPPING CART</span>
            </div>


            <div style={{display:"flex",marginTop:"30px",marginLeft:"70px"}}>
  <div style={{
      width:"600px",
      height:"300px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8",
      marginLeft:"20px",
      marginRight:"20px",
      fontSize:"12px"
  }}>
{/* <img src={} width="40px" height="45px"/> */}
<br/>
<div style={{display:"flex"}}>
<a href="" class="edit-btn-page4_desktop" style={{marginLeft:"325px"}}>Edit</a>
<a href="" class="save-btn-page4_desktop">Save for later</a>
  </div>
  </div>

 

  </div>

<div style={{display:"flex",marginTop:"120px",marginLeft:"25px"}}>
    <span style={{marginLeft:"80px"}}>Subtotal (VAT included)</span>
    <span style={{color:"grey",marginLeft:"350.5px"}}>Rs.5500</span>
</div>

   <div style={{display:"flex",marginTop:"-5px",marginLeft:"75px",width:"625px"}}>

         <a href="/p5" class="checkout_button_desktop" 
    style={{ display:"flex"}}
    >Continue to Checkout</a>
    
    
</div>
</div>















<div>
     <div class="desktop">
            <div style={{display:'flex'}}>

            <a href="/p3"  class="back_button_page1"><ArrowBackIcon style={{color:"black",marginTop:"1.5px"}}/></a>
             
             <span style={{
                 color:"#ff5c00",
                 marginTop:"20px",
                 marginLeft:"40px",
                 fontWeight:"600",
                 fontSize:"20px"}}>SHOPPING CART</span>
            </div>


            <div style={{display:"flex",marginTop:"30px",marginLeft:"70px"}}>
  <div style={{
      width:"300px",
      height:"300px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8",
      marginLeft:"20px",
      marginRight:"20px",
      fontSize:"12px"
  }}>
{/* <img src={} width="40px" height="45px"/> */}
<br/>
<div style={{display:"flex"}}>
<a href="" class="edit-btn-page4_desktop" style={{marginLeft:"325px"}}>Edit</a>
<a href="" class="save-btn-page4_desktop">Save for later</a>
  </div>
  </div>

 

  </div>

<div style={{display:"flex",marginTop:"120px",marginLeft:"25px"}}>
    <span style={{marginLeft:"80px"}}>Subtotal (VAT included)</span>
    <span style={{color:"grey",marginLeft:"1069.5px"}}>Rs.5500</span>
</div>

   <div style={{display:"flex",marginTop:"-5px",marginLeft:"75px"}}>

         <a href="/p5" class="checkout_button_desktop" 
    style={{ display:"flex"}}
    >Continue to Checkout</a>
    
    
</div>


        </div>
</div>




        </div>
    )
}

export default Page4
