import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Page1.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FilterListIcon from '@material-ui/icons/FilterList';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ShareIcon from '@material-ui/icons/Share';

import "./Page4.css"
import "./Page5.css"

function Page5() {
    return (

        <div>
        <div class="phone">
            <div style={{display:'flex'}}>

            <a href="/p4"  class="back_button_page1"><ArrowBackIcon style={{color:"black"}}/></a>
             
             <div class="container_bar">
      <div style={{
            width:"85%",
            marginLeft:"3.95%",
            marginRight:"7.5%",
            backgroundColor:"#FFDECC",
            borderRadius:"10px",
            height:"11px",
            marginTop:"27.5px"
        }}>
            <div style=
            {{backgroundColor:"#FF5c00",
            height:"19px",
            width:"35%",
            borderRadius:"10px",
            height:"11px",
            }} 
            >

            </div>
        </div>
        </div>
            </div>


         <div style={{fontSize:"17.5px",marginLeft:"13.5%",marginTop:"15px",fontWeight:"600"}}>
             Select or add a shipping address
         </div>

         <button style={{
             backgroundColor:"#fff",
             color:"#Dbb144",
             border:"none",
             marginLeft:"38%",
             fontSize:"20px",marginTop:"150px"}}>EDIT</button>

            

<hr style={{marginTop:"-10px",width:"85%"}}></hr>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/><br/>
<br/>

 <a href="/p6" class="add-btn-page5">Add Address</a>

<div style={{display:"flex",marginTop:"12px",marginLeft:"25px"}}>
    <span>Subtotal (VAT included)</span>
    <span style={{color:"grey",marginLeft:"89.5px"}}>Rs.5500</span>
</div>

   <div style={{display:"flex",marginTop:"-15px"}}>

         <a href="/p6" class="checkout_button" 
    style={{ display:"flex"}}
    >Continue to Checkout</a>
    
    
</div>


        </div>














<div class="ipad">
 <div style={{display:'flex'}}>

            <a href="/p4"  class="back_button_page1"><ArrowBackIcon style={{color:"black"}}/></a>
             
             <div class="container_bar">
      <div style={{
            width:"85%",
            marginLeft:"3.95%",
            marginRight:"7.5%",
            backgroundColor:"#FFDECC",
            borderRadius:"10px",
            height:"11px",
            marginTop:"27.5px"
        }}>
            <div style=
            {{backgroundColor:"#FF5c00",
            height:"19px",
            width:"35%",
            borderRadius:"10px",
            height:"11px",
            }} 
            >

            </div>
        </div>
        </div>
            </div>


         <div style={{fontSize:"17.5px",marginLeft:"9.5%",marginTop:"15px",fontWeight:"600",fontSize:"20px"}}>
             Select or add a shipping address
         </div>

         <button style={{
             backgroundColor:"#fff",
             color:"#Dbb144",
             border:"none",
             marginLeft:"38%",
             fontSize:"20px",marginTop:"150px"}}>EDIT</button>

            

<hr style={{marginTop:"-10px",width:"85%"}}></hr>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/><br/>
<br/>

 <a href="/p6" class="add-btn-page5" style={{marginLeft:"15.5rem"}}>Add Address</a>

<div style={{display:"flex",marginTop:"35px",marginLeft:"25px"}}>
    <span style={{marginLeft:"80px"}}>Subtotal (VAT included)</span>
    <span style={{color:"grey",marginLeft:"375.5px"}}>Rs.5500</span>
</div>

   <div style={{display:"flex",marginTop:"-5px",marginLeft:"75px"}}>

         <a href="/p7" class="checkout_button_desktop" 
    style={{ display:"flex",width:"550px",textAlign:"center"}}
    >Continue to Checkout</a>
    
    
</div>
</div>













<div class="desktop">
 <div style={{display:'flex'}}>

            <a href="/p4"  class="back_button_page1"><ArrowBackIcon style={{color:"black"}}/></a>
             
             <div class="container_bar">
      <div style={{
            width:"85%",
            marginLeft:"3.95%",
            marginRight:"7.5%",
            backgroundColor:"#FFDECC",
            borderRadius:"10px",
            height:"11px",
            marginTop:"27.5px"
        }}>
            <div style=
            {{backgroundColor:"#FF5c00",
            height:"19px",
            width:"35%",
            borderRadius:"10px",
            height:"11px",
            }} 
            >

            </div>
        </div>
        </div>
            </div>


         <div style={{fontSize:"17.5px",marginLeft:"9.5%",marginTop:"15px",fontWeight:"600",fontSize:"20px"}}>
             Select or add a shipping address
         </div>

         <button style={{
             backgroundColor:"#fff",
             color:"#Dbb144",
             border:"none",
             marginLeft:"38%",
             fontSize:"20px",marginTop:"150px"}}>EDIT</button>

            

<hr style={{marginTop:"-10px",width:"85%"}}></hr>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/><br/>
<br/>

 <a href="/p6" class="add-btn-page5" style={{marginLeft:"38.5rem"}}>Add Address</a>

<div style={{display:"flex",marginTop:"35px",marginLeft:"25px"}}>
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
    )
}

export default Page5
