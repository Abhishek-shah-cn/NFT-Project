import React from "react";
import footer from "./assets/footer.png";
import ilus from "./assets/ilus.svg";
import black from "./assets/black.png";
import logo from "./assets/NFT LOGO.svg"
import "./Footer.css";

function Footer() {
  
  return (
    <div className="main">
     <div className="footer">
     <img src={footer} className="foo" alt="" />
      <img src={ilus} className="foo-img" alt="" />
      <div className="head">
        <h2>Subscribe to our Daily Newsletter</h2>
        <input
          type="text"
          className="search rounded light"
          placeholder="Enter Your Email.."
        />
      </div>
     </div>
       
       <div className="contact">
        
         <img src={black} className="back" alt=""/>
         
         <div className="logo">
            <img src={logo} alt=""/>
         </div>

         <div className="links">
           links
         </div>

         <div className="cconnect">
           connect
         </div>
       </div>
       

      
    </div>
  );
}

export default Footer;
