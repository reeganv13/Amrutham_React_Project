import React from "react";
export default function NinethPage(){
    return(
        <div>
            <div className="container10">
                <div className="finalBox1">
                <h1>Amrutam Home App</h1>
                <p>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                <h3>Get a Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe </h3>
                <h2>Get the App now</h2>
                <div className="Googleplay">
                    <img  src={`${process.env.PUBLIC_URL}/image 67.png`}/>
                    <img className="image2" src={`${process.env.PUBLIC_URL}/image 68.png`} />
                </div>
                </div>
                <div className="finalBox2">
                    <img src={`${process.env.PUBLIC_URL}/Group 39489.png`} />
                
                </div>
                
            </div>
            <div className="footer">
                <div className="Mobileview-footer">
                    <h4>Get in Touch</h4>
                   <h6>support@amrutam.co.in<br></br> <br></br> Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001

                 <br></br>  <br></br>+91 9713171999</h6>
                   
                   <div>
                    <img src={`${process.env.PUBLIC_URL}/Frame 1000006082.png`}/>
                   </div>
                </div>
                <div>
                <h5>Information</h5>
              <p>About Us<br></br>
              Terms and Conditions<br></br>
              Privacy Policy<br></br>
              Privacy Policy for Mobile Apps<br></br>
              Shipping and Returns Policy,<br></br>
              International Delivery<br></br>
              For Businesses, Hotels and Resorts</p>
                </div>
             <div className="Mobileview-email">
                <h2>Subscribe to our Newsletter and join Amrutam Family today!</h2>
                <input placeholder="Your Email Address"/>
                <button>Subscribe</button>
             </div>
            </div>
        </div>
    )
}