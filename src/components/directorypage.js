import React, { useEffect } from "react";
import "./directorypage.scss";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import backgroundImage from "../assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

import Navbar from "./navbar";
function Directorypage() {
     useEffect(() => {
      // Scroll to the contact panel when the page loads
      scrollToContactPanel();
    }, []);
  
    const scrollToContactPanel = () => {
      const contactPanel = document.getElementById("directory-panel");
      if (contactPanel) {
        contactPanel.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
  return (
    <div className="directorypage">
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
      <div className="directory-container" id="directory-panel">
        <div className="search-div">
          <div className="input-div">
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
              </div>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            ></input>
          </div>
          <div className="datepicker">
            <select id="SY" className="school-year" name="sy">
              <option value="apple">Year Graduated (eg. 2023-2024)</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2023-2024">2022-2023</option>
              <option value="2023-2024">2021-2022</option>
            </select>
            <select id="course" className="course" name="course">
              <option value="apple">Course (eg. BSCS)</option>
              <option value="banana">BSCS</option>
              <option value="cherry">BSCrim</option>
              <option value="date">BSPSY</option>
            </select>
          </div>
        </div>
        <div className="table-div">
          <h3>2024-2025 YEAR STUDENT GRADUATED</h3>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Year Graduation</th>
      <th>Course / Program</th>
      <th>Achievements & Awards</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hicoo, Zaldy Jr. C</td>
      <td>2025 - 2026</td>
      <td>BSCS</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Dosuyo, Kim Josoph T.</td>
      <td>2025-2026</td>
      <td>BSCS</td>
      <td>Magna Cum Laude</td>
    </tr>
    <tr>
      <td>Orbeso, James Carl V.</td>
      <td>2025 - 2026</td>
      <td>BSCS</td>
      <td>Cum Laude</td>
    </tr>
    <tr>
      <td>Obejos, Jericho C.</td>
      <td>2025 -2026</td>
      <td>BSCS</td>
      <td>Cum Laude</td>
    </tr>
    <tr>
      <td>Galos, Angelo R.</td>
      <td>2025 - 2026</td>
      <td>BSCS</td>
      <td>Magna Cum Laude</td>
    </tr>
  </tbody>
</table>
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
export default Directorypage;
