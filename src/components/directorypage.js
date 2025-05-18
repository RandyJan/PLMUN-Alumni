import React, { useEffect, useState } from "react";
import "./directorypage.scss";
import Logo from "../assets/logo.png";
import backgroundImage from "../assets/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch,faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import Navbar from "./navbar";

function Directorypage() {
  const [alumniData, setAlumniData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8; // Number of results per page

  const fetchAlumniData = async (page) => {
    try {
      const response = await fetch(`https://alumni-portal-api.vercel.app/api/alumni?page=${page}&limit=${limit}`);
      const data = await response.json();
      setAlumniData(data.result.data);
      setTotalPages(Math.ceil(data.result.total / limit)); // Calculate total pages
    } catch (error) {
      console.error('Error fetching alumni data:', error);
    }
  };
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
  useEffect(() => {
    fetchAlumniData(currentPage);
  }, [currentPage]);

  // Filter alumni by name (first, middle, or last)
  const filteredAlumni = alumniData.filter(alumnus => {
    const fullName = `${alumnus.lastName} ${alumnus.firstName} ${alumnus.middleName || ""}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

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
        <Navbar />
        <div className="welcome-text blurred-bottom">
          <h1>Pamantasan ng Lungsod ng Muntinlupa</h1>
          <p>
            "Education is the most powerful weapon in the world which you can
            use to change the world"<br />
            -Nelson Mandela
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
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="datepicker">
            <select id="SY" className="school-year" name="sy">
              <option value="apple">Year Graduated (eg. 2023-2024)</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2021-2022">2021-2022</option>
            </select>
            <select id="course" className="course" name="course">
              <option value="apple">Course (eg. BSCS)</option>
              <option value="BSCS">BSCS</option>
              <option value="BSCrim">BSCrim</option>
              <option value="BSPSY">BSPSY</option>
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
              {filteredAlumni && filteredAlumni.length > 0 ? (
                filteredAlumni.map((alumnus, idx) => (
                  <tr key={alumnus.userId || idx}>
                    <td>
                      {alumnus.lastName}, {alumnus.firstName}
                      {alumnus.middleName ? ` ${alumnus.middleName}` : ""}
                    </td>
                    <td>{alumnus.yearGraduated || "N/A"}</td>
                    <td>{alumnus.courseProgram || "N/A"}</td>
                    <td>{alumnus.graduationStatus || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No alumni data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="pagination-controls">
          <button 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
          <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
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
            PLMUN Official Website<br /><a href="https://plmun.edu.ph/"> https://plmun.edu.ph/</a>
          </p>
          <p>
            MUNT INLUPA Official Website of the City of Muntinlupa<br /><a href="muntinlupacity.gov.ph"> www.muntinlupacity.gov.ph</a>
          </p>
          <p>
            CHED Commission on Higher Education (Philippines)<br /><a href="http:/www.ched.gov.ph">  http:/www.ched.gov.ph</a>
          </p>
          <p>
            RDC Muntinlupa City Research Development Consortium<br /><a href="http:/palmun.edu.ph/mcsdc/"> http:/palmun.edu.ph/mcsdc/</a>
          </p>
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
