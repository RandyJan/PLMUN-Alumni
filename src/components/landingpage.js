import React from "react";
import "./landingpage.scss";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import backgroundImage from "../assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import graduateImage from "../assets/graduates.jpg";
import ann from "../assets/ann.jpg";
import bernardo from "../assets/bernardo.jpg";
import backdrop from "../assets/backdrop.png";
import faculty from "../assets/faculty.jpg";
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import Navbar from "./navbar";


function LandingPage() {
  return (
    <div className="landing-page">
      <div className="welcome-page blurred-bottom blur-background-only"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        {/* <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <div>
              <p className="headername">PLMUN ALUMNI</p>
              <p className="footername">PAMANTASAN NG LUNGSOD NG MUNTINLUPA</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#home">
              <FontAwesomeIcon icon={faHome} />
            </a>
            <a href="#news">About us</a>
            <a href="#news">Alumni directory</a>
            <a href="#events">Contact us</a>
            <a href="#services" className="login-btn">
              Login
            </a>
          </div>
        </div> */}
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
      <div className="news-page">
        <div className="header">
          <h1>LATEST NEWS AND UPDATES</h1>
        </div>
        <div className="body">
          <div className="headline">
            <img src={graduateImage} />
          </div>
          <div className="card-container">
            <div className="news-card">
              <div className="news-card-pic">
                <img src={ann}></img>
              </div>
              <div className="news-card-text">
                <p className="header-card">4th ANNUAL STAKEHOLDER CONFERENCE</p>
                <p className="body-card">
                The theme for the 4th Annual Stakeholders' Conference of the Pamantasan ng Lungsod ng Muntinlupa is "Reinventing Partnerships to Address Emerging Crises".
                </p>
                <h4>November 22, 2024 | Read More</h4>
              </div>
            </div>
            <div className="news-card">
              <div className="news-card-pic">
                <img src={bernardo}></img>
              </div>
              <div className="news-card-text">
                <p className="header-card">
                  CELEBRATING EXECELENCE 3rd GAWAD SIKLAB AND RESEARCH TURNOVER
                  CEREMONY RECOGNIZES INNOVATION AND DEDICATION
                </p>
                <p className="body-card">
                In a celebration marked by brilliance and a commitment to innovation, Gawad SIKLAB and Research Turnover Ceremony illuminated the achievements of the university's dedicated faculty/researchers for their exemplary work.
                </p>
                <h4>November 22, 2024 | Read More</h4>
              </div>
            </div>
            <div className="news-card">
              <div className="news-card-pic">
                <img src={faculty}></img>
              </div>
              <div className="news-card-text">
                <p className="header-card">
                  FACULTY RESEARCHERS SHINE AT 2024 RESEARCH COLOQIUM: FOSTERING
                  EXCELLENCE AND ETHICAL IMPACT
                </p>
                <p className="body-card">
                The 2024 Faculty Research Colloquium, themed "Research Impact, Excellence, and Beyond," gathered dedicated faculty researchers for an eventful day of showcasing their research endeavors, fostering excellence and ethical impact.
                </p>
                <h4>November 13, 2024 | Read More</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-page">
        <div className="header">
          <h1>UPCOMING EVENTS</h1>
        </div>
        <div className="body">
          <div className="headline">
            <img src={ann} />
          </div>
          <div className="card-container">
            <div className="event-card">
              <div className="date-card">
                <p>Nov</p>
                <h2>22</h2>
              </div>
              <div className="text-card">
                <p className="text-header">4th ANNUAL STAKEHOLDER CONFERENCE</p>
                <p  className="text-body">The theme for the 4th Annual Stakeholders' Conference of the Pamantasan ng Lungsod ng Muntinlupa is "Reinventing Partnerships to Address Emerging Crises".</p>
                <a  href="#home" className="text-footer">  <FontAwesomeIcon icon={faArrowRight} /> Read More</a>    
              </div>
            </div>
            <div className="event-card">
              <div className="date-card">
                <p>Oct</p>
                <h2>28</h2>
              </div>
              <div className="text-card">
              <p className="text-header">OATH TAKING CEREMONY FOR NEWLY INDUCTED PLMUN FACULTY LEADERSHIP</p>
                <p  className="text-body">In a momentous ceremony, the newly appointed Faculty Officers of the Pamantasan ng Lungsod ng Muntinlupa (PLMUN) took their oath of office on Monday, October 28, 2024, pledging to uphold...</p>
                <a href="#home" className="text-footer">  <FontAwesomeIcon icon={faArrowRight} /> Read More</a>    
              </div>
            </div>
            <div className="event-card">
              <div className="date-card">
                <p>Nov</p>
                <h2>22</h2>
              </div>
              <div className="text-card">
              <p className="text-header">CELEBRATING EXCELLENCE: 3rd GAWAD SIKLAB AND RESEARCH TURNOVER CEREMONY RECOGNIZES INNOVATION AND DEDICATION</p>
                <p  className="text-body">In a celebration marked by brilliance and a commitment to innovation, Gawad SIKLAB and Research Turnover Ceremony illuminated the achievements and dedication of outstanding individuals. Held in Museo ng...</p>
                <a href="#home"  className="text-footer">  <FontAwesomeIcon icon={faArrowRight} /> Read More</a>    
              </div>
            </div>
            <div className="event-card">
              <div className="date-card">
                <p>Oct</p>
                <h2>29</h2>
              </div>
              <div className="text-card">
              <p className="text-header">FORMER TESDA DIRECTOR GENERAL MEETS PLMUN'S UNIVERSITY PRESIDENT</p>
                <p  className="text-body">Secretary Irene Isaac, former Director General of the Technical Education and Skills Development Authority (TESDA) visited the Pamantasan ng Lungsod ng Muntinlupa on 28 October 2024 and met with the...</p>
                <a href="#home"  className="text-footer">  <FontAwesomeIcon icon={faArrowRight} /> Read More</a>    
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="services-page">
        <div className="header">
          <h1> PLMun Online Services</h1>
        </div>
        <div className="body">
          <div className="service-card">
            <div className="service-card-pic">
              <img src={backdrop} />
              </div>
              <div className="service-btn">
                <p>Student Portal</p>
                </div>
            </div>
            <div className="service-card">
            <div className="service-card-pic">
              <img src={backdrop} />
              </div>
              <div className="service-btn">
              <p>Admission Portal</p>

                </div>
            </div>
            <div className="service-card">
            <div className="service-card-pic">
              <img src={backdrop} />
              </div>
              <div className="service-btn">
              <p>Employee Portal</p>

                </div>
            </div>
            <div className="service-card">
            <div className="service-card-pic">
              <img src={backdrop} />
              </div>
              <div className="service-btn">
              <p>Management Admission Portal</p>

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
    </div>
  );
}

export default LandingPage;
