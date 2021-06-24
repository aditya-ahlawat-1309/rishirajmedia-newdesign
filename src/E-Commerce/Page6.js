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
import "./Page6.css"

function Page6() {
    return (
        <div>
        <div class="phone">
            <div style={{display:'flex'}}>

            <a href="/p5"  class="back_button_page1"><ArrowBackIcon style={{color:"black"}}/></a>
             
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


         <div style={{fontSize:"15.5px",marginLeft:"9.5%",fontSize:"20px",marginTop:"10px",fontWeight:"600"}}>
            Enter the new shipping address
         </div>

      <br/> 



      <input type="text" class="text" required placeholder="Full Name"/><br/>
      <input type="text" class="text" required placeholder="Mobile Number"/><br/>

      <input type="text" class="text" required placeholder="PIN Code"/><br/>

      <input type="text" class="text" required placeholder="Flat, House no. , Building , Company"/><br/>
      
      <input type="text" class="text" required placeholder="Area , Colont, Street , Sector , Village"/><br/>
      <input type="text" class="text" required placeholder="Landmark e.g. near xsx hospital"/><br/>
      <input type="text" class="text" required placeholder="Town/City"/><br/>
      <input type="text" class="text" required placeholder="State"/><br/>



<br/><br/><br/><br/><br/>

 <a href="/p7" class="add-btn-page6" style={{marginLeft:"3.55rem"}}>Add Address</a>



        </div>

















<div class="ipad">
                <div style={{display:'flex'}}>

            <a href="/p5"  class="back_button_page1"><ArrowBackIcon style={{color:"black"}}/></a>
             
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


         <div style={{fontSize:"15.5px",marginLeft:"9.5%",fontSize:"20px",marginTop:"10px",fontWeight:"600"}}>
            Enter the new shipping address
         </div>

      <br/> 



      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="Full Name"/><br/>
      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="Mobile Number"/><br/>

      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="PIN Code"/><br/>

      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="Flat, House no. , Building , Company"/><br/>
      
      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="Area , Colont, Street , Sector , Village"/><br/>
      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="Landmark e.g. near xsx hospital"/><br/>
      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="Town/City"/><br/>
      <input type="text" class="text" style={{marginTop:"25px"}} required placeholder="State"/><br/>



<br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/>

 <a href="/p7" class="add-btn-page6" style={{marginLeft:"13.55rem", width:"1000px"}}>Add Address</a>


</div>


















        <div class="desktop">
 <div style={{display:'flex'}}>

            <a href="/p5"  class="back_button_page1"><ArrowBackIcon style={{color:"black"}}/></a>
             
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


         <div style={{fontSize:"17.5px",marginLeft:"9.5%",fontSize:"20px",marginTop:"10px",fontWeight:"600"}}>
            Enter the new shipping address
         </div>

      <br/> 

<div style={{display:"flex"}}>
<div >
      <input type="text" class="text_desktop" required placeholder="Full Name"/><br/>
      <input type="text" class="text_desktop" required placeholder="Mobile Number"/><br/>

      <input type="text" class="text_desktop" required placeholder="PIN Code"/><br/>

      <input type="text" class="text_desktop" required placeholder="Flat, House no. , Building , Company"/><br/>
      </div>
      <div>
      <input type="text" class="text_desktop" required placeholder="Area , Colont, Street , Sector , Village"/><br/>
      <input type="text" class="text_desktop" required placeholder="Landmark e.g. near xsx hospital"/><br/>
      <input type="text" class="text_desktop" required placeholder="Town/City"/><br/>
      <input type="text" class="text_desktop" required placeholder="State"/><br/>
</div>
</div>


<br/><br/><br/><br/><br/>

 <a href="/p7" class="add-btn-page6" style={{marginLeft:"38.5rem",marginTop:"50px"}}>Add Address</a>
        </div>

        </div>
    )
}

export default Page6
