import React, { useEffect } from "react";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import backgroundImage from "../assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGraduationCap,
  faUser,
  faAnchor
} from "@fortawesome/free-solid-svg-icons";
import "./aboutuspage.scss";
import purpose1 from "../assets/purpose1.jpg";
import purpose2 from "../assets/purpose2.jpg";
import purpose_orig from "../assets/purpose_orig.jpg";
import how3 from "../assets/how3.jpg";
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import Navbar from "./navbar";
function Aboutuspage() {
      useEffect(() => {
      // Scroll to the contact panel when the page loads
      scrollToContactPanel();
    }, []);
  
    const scrollToContactPanel = () => {
      const contactPanel = document.getElementById("whoarewe");
      if (contactPanel) {
        contactPanel.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div className="aboutuspage">
      <div
        className="welcome-page blurred-bottom blur-background-only"
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
            <a href="#news" className="aboutus">
              About us
            </a>
            <a href="#news">Alumni directory</a>
            <a href="#events">Contact us</a>
            <a href="#services" className="login-btn">
              Login
            </a>
          </div>
        </div> */}
        <Navbar />
        <div className="welcome-text blurred-bottom">
          <h1>Welcome to PLMUN ALUMNI</h1>
          <p>Connecting graduates building futures.</p>
        </div>
      </div>
      <div className="whoarewe" id="whoarewe">
        <div className="whoarewe-text">
          <h1>WHO ARE WE?</h1>
          <p>
            The PLMUN Alumni Association is a community of proud graduates
            dedicated to fostering lifelong connections, professional growth,
            and giving back to our alma mater. Whether you're a recent graduate
            or an established professional, our network provides opportunities
            to reconnect with classmates, expand career prospects, and
            contribute to the university's legacy.
            <br />
            <br />
            Join us in celebrating our shared journey and shaping a brighter
            future for the next generation of PLMUN graduates!
          </p>
        </div>
        <div className="mission-vision">
          <div className="vision">
            <div className="icon">
              <a>
                <FontAwesomeIcon icon={faGraduationCap} />
              </a>
            </div>

            <h2>Vision</h2>
            <p>
              To provide quality, affordable and relevant education responsive
              to the changing needs of the local and global communities through
              effective and efficient integration of instruction, research and
              extension; to develop productive and God-loving individuals in
              society.
            </p>
          </div>
          <div className="mission">
            <div className="icon">
              <a>
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>

            <h2>Mission</h2>
            <p>
              A dynamic and highly competitive Higher Education Institution
              (HEI) committed to people empowerment towards building a humane
              society.
            </p>
          </div>
          <div className="quality">
            <div className="icon">
              <a>
                <FontAwesomeIcon icon={faAnchor} />
              </a>
            </div>

            <h2>Quality Policy</h2>
            <p>
              We, in the Pamantasan ng Lungsad ng Muntinlupa, commit to meet and
              even exceed our clients' needs and expectations by adhering to
              good governance, productivity and continually Improving the
              effectiveness of our Quality Management System in compliance to
              ethical standards and applicable
            </p>
          </div>
        </div>
      </div>
      <div className="purpose">
        <div className="purpose-top">
          <div className="purpose1">
            <img src={purpose1}></img>
            <h3>Purpose of the almuni website</h3>
            <p>
              This alumni website is designed to be a central hub for all PLMUN
              graduates, providing easy access to important updates,
              announcements, and alumni-related information. It aims to
              strengthen the bond between the university and its alumni by
              offering a space where graduates can engage, share experiences,
              and stay informed about the latest happenings at PLMUN.
            </p>
          </div>
          <div className="purpose2">
            <img src={purpose2}></img>
            <h3>Purpose of the almuni website</h3>
            <p>
              The PLMUN Alumni Network is a thriving community of graduates from
              Pamantasan ng Lungsod ng Muntinlupa, built to maintain lifelong
              connections among former students. This platform allows alumni to
              reconnect, share achievements, and stay informed about the latest
              events and initiatives of the university. By fostering engagement
              and collaboration, we aim to celebrate the accomplishments of our
              graduates while giving back to the PLMUN community.
            </p>
          </div>
          <div className="purpose3">
            <img src={purpose2}></img>
            <h3>Purpose of the almuni website</h3>
            <p>
              This alumni website is designed to be a central hub for all PLMUN
              graduates, providing easy access to important updates,
              announcements, and alumni-related information. It aims to
              strengthen the bond between the university and its alumni by
              offering a space where graduates can engage, share experiences,
              and stay informed about the latest happenings at PLMUN.
            </p>
          </div>
        </div>
      </div>
      <div className="purpose-bottom">
        <div className="purpose1">
          <h1>PURPOSE</h1>
          <img src={purpose_orig}></img>
        </div>
        <div className="purpose2">
          <p>
            The PLMUN Alumni Association is a dedicated platform for graduates
            of Pamantasan ng Lungsod ng Muntinlupa to stay connected with their
            alma mater and fellow alumni. Whether you're celebrating career
            milestones, looking to reconnect with old friends, or staying
            updated with university news, this website serves as a bridge
            between the past and present.
          </p>
        </div>
      </div>

      <div className="how">
        <h1>How This Website Helps Graduates?</h1>
        <div className="how-container">
          <div className="how-card">
            <img src={purpose1}></img>
            <h3>
              A secure platform for graduates to access alumni-related updates:
            </h3>
            <p>
              The PLMUN Alumni website provides a secure and exclusive platform
              where graduates can stay informed about alumni events, career
              opportunities, and university developments. With access limited to
              verified alumni, this ensures a trusted space for important
              updates and networking opportunities.
            </p>
          </div>
          <div className="how-card">
            <img src={purpose_orig}></img>
            <h3>Job Hiring for PLMUN Alumni</h3>
            <p>
              The PLMUN Alumni website serves as a platform for job
              opportunities, helping graduates find employment that matches
              their skills and qualifications. Through partnerships with various
              companies and organizations, we regularly post job openings
              specifically for PLMUN alumni. Whether you're a fresh graduate
              looking for your first job or an experienced professional seeking
              new opportunities, our job hiring section connects you with
              potential employers. Stay updated with the latest job postings and
              take the next step in your career.
            </p>
          </div>
          <div className="how-card">
            <img src={how3}></img>
            <h3>A place to find news about PLMUN and announcements:</h3>
            <p>
              Stay updated with the latest news and announcements from
              Pamantasan ng Lungsod ng Muntinlupa. Whether it's alumni
              gatherings, university events, or important notices, this platform
              serves as a central hub for keeping graduates connected with their
              alma mater.
            </p>
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

export default Aboutuspage;
