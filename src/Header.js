import React from "react"
export default function Header(){
   return( 
    <div className="container1">
    <img className="Header-Image" src={`${process.env.PUBLIC_URL}/Rectangle 3464760.png`}  alt="image1" />
    
    <img className="Mobile-Header-Image" src={`${process.env.PUBLIC_URL}/Rectangle 3464762 (1).png`} />
    <div className="Mobile-Header"></div>
   <header className="App-header">
    
  
      
       </header>
       
       <div className="text-container1"> 
    <p className="welcome-text">Namaste, Welcome to Amrutam </p>
      <h1 className="head-text">Step into Holistic Healing with <span className="ayurvedha-text">Ayurveda</span><br></br>Book Consultation with certified Experts. </h1>
       <p className="head-para-text">Dive into the world of ayurveda and Experience Personalized Health Solutions and <br></br>Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
       <button className="Header-button">BOOK AN APPOINTMENT</button>
       </div>
       
    </div>
   )
}
