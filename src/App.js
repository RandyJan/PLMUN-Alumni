import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage';
import Aboutuspage from './components/aboutuspage';
import Directorypage from './components/directorypage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUsPage from './components/contactuspage';

function App() {
  return (
    <Router>
    <div className="App">
     {/* <Aboutuspage/> */}
     {/* <LandingPage/> */}
     {/* <Directorypage/> */}
      {/* <h1>Welcome to the App</h1>
      <p>This is a simple React application.</p>
      <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Add more components or content here */}
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<Aboutuspage />} />
            <Route path="/directory" element={<Directorypage />} />
            <Route path="/contactus" element={<ContactUsPage />} />

            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}

          </Routes>
    </div>
    </Router>
  );
}

export default App;
