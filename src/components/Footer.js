import React from 'react';
import "./footer.css";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
           <div className="Footer_main">
             <h2 style={{fontSize:"16px", paddingTop:"10px"}}>@ {year} All rights reserved</h2>
           </div>

           <div className="Footer_submain">
            <Link to="/"><FaFacebook  style={{color:"#3b5998",  marginRight:"15px"}}/></Link>
            <Link to="/"><FaInstagram style={{color:"#f09433",   marginRight:"15px"}}/></Link> 
            <Link to="/"><FaTwitter style={{color:"#00acee",   marginRight:"15px"}}/></Link>
            <Link to="/"><FaYoutube style={{color:" #c4302b",   marginRight:"15px"}}/></Link> 
           </div>
           
        </div>
    );
};

export default Footer;