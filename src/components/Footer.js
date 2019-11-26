import React from 'react';
import "./footer.css";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div>
        <div className="Footer">
           <div className="Footer_main">
             <h2 style={{fontSize:"16px", paddingTop:"10px"}}>@ {year} All rights reserved</h2>
           </div>
           <div className="Footer_submain">
            <Link to="/"><FaFacebook  style={{color:"#3b5998"}}/></Link>
            <Link to="/"><FaInstagram style={{color:"#f09433"}}/></Link> 
            <Link to="/"><FaTwitter style={{color:"#00acee"}}/></Link>
            <Link to="/"><FaYoutube style={{color:" #c4302b"}}/></Link> 
           </div>
        </div>
        <div className="disc">
        <strong>Disclaimer</strong>
        Any content mentioned in this website is for information purpose only and prices are subjected to change without notice. This website is just for the purpose of information only and not be considered as an official website
         </div>
        </div>
      );
};

export default Footer;