import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompanyReviews from './pages/CompanyReviews';
import SalaryGuide from './pages/SalaryGuide';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import './index.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-reviews" element={<CompanyReviews />} />
            <Route path="/salary-guide" element={<SalaryGuide />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
