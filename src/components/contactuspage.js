import React, { useEffect } from "react";
import "./contactuspage.scss";
import Navbar from "./navbar";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import backgroundImage from "../assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationPin,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

function ContactUsPage() {
     useEffect(() => {
    // Scroll to the contact panel when the page loads
    scrollToContactPanel();
  }, []);

  const scrollToContactPanel = () => {
    const contactPanel = document.getElementById("contact-panel");
    if (contactPanel) {
      contactPanel.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
  
  <div className="contactuspage" >
     <div className="welcome-page blurred-bottom blur-background-only"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
      
        <Navbar />
        <div className="welcome-text blurred-bottom">
          <h1>Pamantasan ng Lungsod ng Muntinlupa</h1>
          <p>
            "Education is the most powerful weapon in the world which you can
            use to change the world"<br></br>
            -Nelson Madela
          </p>
        </div>
      </div>
    <div className="contact-panel" id="contact-panel">
    <div className="left-panel">
    <h2>Contact Us</h2>
    <div className="address-div">
        <p>Our mailing address is:</p>
        <p> <FontAwesomeIcon icon={faLocationPin} /> 92QG+M5V, University Rd, <br></br>Muntinlupa, 1772 Metro Manila</p>
        <p>Our email address is:</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> plmuncomm@plmun.edu.ph</p>
    </div>
    </div>
     <div className="right-panel">
        <div className ="email-div">
            <div>
                <input placeholder="Name:"></input>
            </div>
            <div>
                <input placeholder="Email:"></input>

            </div>
            <div>
                <input placeholder="Contact number:"></input>

            </div>
            <div className="textarea-div">
                {/* <input></input> */}
                <textarea placeholder="Enter your message "></textarea>

            </div>
            <div className="send-btn">
                <a href="#home">
                    SEND
                    </a>
                
                </div>
        </div>
    </div>
</div>
    <div className="footer">
        <div className="footer1">
        <div className="logo">
        <img src={Logo} alt="Logo" />
        </div>
        <p>Do you have a question, comment or news tip to pass along to University? you may email or contact us from any details below.</p>
        <p>University Road NBP Reservation Brgy. Poblacion, City of Muntinlupa, Philippines, 1776</p>
        <p>plmuncomm@plmun.edu.ph</p>
        <p>Copyright @ 2023 Pamantasan ng Lungsod ng Muntinlupa. All rights reserved.</p>
        </div>
        <div className="footer2">
     
        <p>VISIT OUR OTHER WEBSITE Other Links</p>
        <p>
        PLMUN Official Website<br></br><a href="https://plmun.edu.ph/"> https://plmun.edu.ph/</a></p>
        <p>
        MUNT INLUPA Official Website of the City of Muntinlupa<br></br><a href="muntinlupacity.gov.ph"> www.muntinlupacity.gov.ph</a></p>
        <p>
        CHED Commission on Higher Education (Philippines)<br></br><a href="http:/www.ched.gov.ph">  http:/www.ched.gov.ph</a></p>
        <p>
        RDC Muntinlupa City Research Development Consortium<br></br><a href="http:/palmun.edu.ph/mcsdc/"> http:/palmun.edu.ph/mcsdc/</a></p>
        </div>

        <div className="footer3">
          <p>Find Us On</p>
          <div className="social-media">
            <div>
              <a href="https://www.facebook.com/PLMUNAlumniAssociation/"><FaFacebook /></a>
              <a href="https://www.facebook.com/PLMUNAlumniAssociation/"><FaLinkedin /></a>
            </div>
            <div>
              <a href="https://www.facebook.com/PLMUNAlumniAssociation/"><FaYoutube /></a>
              <a href="https://www.facebook.com/PLMUNAlumniAssociation/"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="footer4">
          <h2>Support</h2>
          <p>plmuncomm@plmun.edu.ph</p>
          <p>ict@plmun.edu.ph</p>
          <p>support@plmun.edu.ph</p>
          <p>universityregistrar@plmun.edu.ph</p>
          <p>hrdmo@plmun.edu.ph</p>
        </div>
      </div>

  </div>)
}
export default ContactUsPage;
