import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Card from "./components/Card";
import Hero from "./components/Herocomponent"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image1 from "../src/1.jpg";
import Image2 from "../src/2.jpeg";
import Image3 from "../src/3.jpg";
import Image4 from "../src/4.jpg";
import Image5 from "../src/5.jpg";
import Image6 from "../src/6.jpg";
import Image7 from "../src/7.jpg";
import Image8 from "../src/8.jpg";
import Image9 from "../src/9.jpg";
import Image14 from "../src/14.jpg";
import Image10 from "../src/10.jpg";
import Image11 from "../src/11.jpg";
import Image12 from "../src/12.jpg";
import Image13 from "../src/13.jpg";
import "./App.sass";
import "./App.css"

const App = () => {

    const [state, setstate] = useState([
        {
            image:Image5,
            alt:"Brigade cornerstone Utopia",
            unit_type:"Studio 1,2 & 3 BHk",
            price:"66 Lakhs Onwards",
            towers:"12 Blocks G+26 Floors",
            location:"varthur Road, Bangalore",
            posession:"2021 Onwards",
            link:"https://drive.google.com/open?id=1gD1dqRdfmSLXclBQSC43a3VBY3CNOj84",
            brouchereName:"Download Brigade cornerstone Utopia Brouchere",
        },
        {
            image:Image6,
            alt:"Brigade El Dorado",
            unit_type:"Studio 1,2 & 3 BHk",
            price:"30 Lakhs Onwards",
            towers:"12 Towers B+G+21 Floors",
            location:"Bagalur, Bangalore",
            posession:"2023 Onwards",
            link:"https://drive.google.com/open?id=1WksC2Rh9LkukLantUky7LCPuwaovZqhQ",
            brouchereName:"Download Brigade El Dorado Brouchere",
        },
        {
            image:Image7,
            alt:"Brigade Exotica",
           unit_type:"3,4, & 5 BHk",
            price:"1.6 cr Onwards",
            towers:"2 Blocks G+35 Floors",
            location:"Old Madras Road, Bangalore East",
            posession:"Ready to move",
            link:"https://drive.google.com/open?id=1b3fYGDhhzFwxK1dk_Mj9XxaWna0tRbO6",
            brouchereName:"Download Brigade Exotica Brouchere",
        },
        {
            image:Image8,
            alt:"Brigade lakefront",
            unit_type:"2 & 3 BHk",
            price:"95 lakhs Onwards",
            towers:"3 Towers G+14 Floors",
            location:"Whitefield Road, Bangalore East",
            posession:"Ready to move",
            link:"https://drive.google.com/open?id=1TF_BvdQ9zaZXy61K-5yXha8Nv_U-CDbq",
            brouchereName:"Download Brigade lakefront Brouchere",
        },
        {
            image:Image10,
            alt:"Brigade Orchads",
            unit_type:"1,2,3 & 4 BHk",
            price:"48 Lakhs Onwards",
            towers:"G + 2(v) Blocks G+7 Floors(apts)",
            location:"Devanahalli Road, Bangalore",
            posession:"Ready to move",
            link:"https://drive.google.com/open?id=1OeeSldqfbpZXplUOwWiAWsCg3O1zromP",
            brouchereName:"Download Brigade Orchads Brouchere",
        },

        {
            image:Image11,
            alt:"Brigade Panorama",
            unit_type:"2 & 3 BHk",
            price:"64 Lakhs Onwards",
            towers:"7 Blocks G+18 Floors",
            location:"Mysore Road, Bangalore",
            posession:"Ready to move",
            link:"https://drive.google.com/open?id=117wcyJb8K-gXHMH4ekOCze21axWA9iqX",
            brouchereName:"Download Brigade Panorama Brouchere",
        },
        {
            image:Image12,
            alt:"Brigade Parkside East",
           unit_type:"1 & 2 BHk",
            price:"60 lakhs Onwards",
            towers:"17 Blocks G+4 Floors",
            location:"Sarajpur Road, Bangalore East",
            posession:"2020 Onwards",
            link:"https://drive.google.com/open?id=1gQjBmCJWfZyXE2TY9EeKeJFoisZzdN20",
            brouchereName:"Download Brigade Parkside East Brouchere",
        },
       
        {
            image:Image14,
            alt:"Brigade Utopia",
            unit_type:"1 2 & 3 BHk",
            price:"66 Lakhs Onwards",
            towers:"12 Blocks G+26 Floors",
            location:"varthur Road, Bangalore",
            posession:"2021 Onwards",
            link:"https://drive.google.com/open?id=1JmstNKv4SmlSJNp-DduTnkufTNjOP9m6",
            brouchereName:"Download Brigade Utopia Brouchere",
        },
        {
            image:Image1,
            alt:"Brigade 7 Gardens",
            unit_type:"2 & 3 BHk",
            price:"73 Lakhs Onwards",
            towers:"7 Blocks G+14 Floors",
            location:"Kanakapuram Road, Bangalore",
            posession:"2019 Onwards",
            link:"https://drive.google.com/open?id=13RanqpLEI3kXmVEoMW-CEX2cqxb4wa9q",
            brouchereName:"Download Brigade 7 Gardens Brouchere",
        },
        {
            image:Image2,
            alt:"Brigade Atmosphere",
            unit_type:"4 BHk",
            price:"3.52 cr Onwards",
            towers:"Villa G+2 FLoor",
            location:"Devanahalli, Bangalore",
            posession:"2018 Onwards",
            link:" https://drive.google.com/open?id=1bwlqGWh49gKRN7CIQ0jq1KmbgnL8r6vQ",
            brouchereName:"Download Brigade Atmosphere Brouchere",
        },
        
        {
            image:Image4,
            alt:"Brigade beune Vista",
            unit_type:"1,2,3 & 4 BHk",
            price:"36 Lakh",
            towers:"4 Blocks 2B+G+22 Floors",
            location:"Madras Road, Bangalore",
            posession:"2020 onwards",
            link:"https://drive.google.com/open?id=1cAfW2ZMNwWGpGCwiQYhRXvH-1dHFwThs",
            brouchereName:"Download Brigade beune Vista Brouchere",
        },
        {
            image:Image3,
            alt:"Brigade Bricklane",
            unit_type:"1 & 2 BHk",
            price:"54 Lakhs Onwards",
            towers:"7 Blocks G+4 Floors",
            location:"Jakkur, Bangalore",
            posession:"2021 Onwards",
            link:"https://drive.google.com/open?id=1_jEzTFqJ43p0X9PZMPuF51HLlXOhJpYA",
            brouchereName:"Download Brigade Bricklane Brouchere",
        },
        {
            image:Image9,
            alt:"Brigade Pulmeria",
            unit_type:"1,2 & 3 BHk",
            price:"54 Lakhs",
            towers:"14 Blocks G+8 Floors",
            location:"Kanakapur Road,Bangalore ",
            posession:"Ready to move",
            link:"https://drive.google.com/open?id=1qSCOThM5_xGc18fiSg572URrbR7HmDjn",
            brouchereName:"Download Brigade Pulmeria Brouchere",
        },
        {
            image:Image13,
            alt:"Brigade Woods",
            unit_type:"1,2 & 3 BHk",
            price:"90 Lakhs Onwards",
            towers:"G+4 Floors",
            location:"Whitefield, Itpl ,Bangalore",
            posession:"2021 Onwards",
            link:"https://drive.google.com/open?id=1eL7O7cpfI6_8hM2-0KshziUDZcs3Zc0L",
            brouchereName:"Download Brigade Woods Brouchere",
        },

    ])

    const displayingCards = () => {
        return (
            state.map((item, i)=>{
                return (
                    <div key={i}> 
                    <Card image={item.image} alt={item.alt} unit={item.unit_type} price={item.price} towers={item.towers} location={item.location} possession={item.posession} link={item.link} brouchere={item.brouchereName}/></div>
                )
            })
        )
    }
    return (
        console.log(state),
        <div>
        <BrowserRouter>
        <Navbar/>
         <Hero/>
        <div className="card_container">
        {displayingCards()}
        </div>
        <Footer/>
        </BrowserRouter>
          
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

