import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {FaHome, FaRupeeSign,FaCalendarAlt} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md';
import {GiEvilTower} from 'react-icons/gi';
const Card = (props) => {
   console.log(props.image)
    return (
        <div className="box">
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
         
            <div className="media-left">
             <FaHome style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)" }}/>
             <span style={{marginLeft:"10px"}}>{props.alt}</span>
            </div>
            <div className="media-left">
             <MdLocationOn style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)" }}/>
             <span style={{marginLeft:"10px"}}>{props.location}</span>
            </div>

            <div className="media-left">
             <FaRupeeSign style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)" }}/>
             <span style={{marginLeft:"10px"}}> {props.price}</span>
            </div>
            <div className="media-left">
            <GiEvilTower style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)" }}/>
            <span style={{marginLeft:"10px"}}>{props.towers}</span>
           </div>
            <div className="media-left">
             <FaCalendarAlt style={{borderRadius:"50%", border:"1px solid #eee", padding:"4px",boxShadow:"1px 2px 3px rgba(0,0,0,0.5)" }}/>
            <span style={{marginLeft:"10px"}}>{props.possession}</span>
            </div>
           
      
      
          <div className="content">
          
        </div>
        <div className="card_buttons">
        <button className="button is-primary is-outlined">Read More</button>
           <button className="button is-link is-outlined">Brouchere</button>
        </div>
      </div>
        </div>
        </div>
    );
};

export default Card;