import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing CSS styles

const Navbar = () => {
  return (
    // Navbar container with flex layout, space-between alignment, and border bottom
    <div className="flex flex-wrap justify-between items-center py-4 px-8 border-b-2 border-black-500">
      {/* Logo and navigation links section */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-blue-700 text-2xl font-bold">Indeed</div>
        {/* Navigation links */}
        <div className="flex space-x-4">
          {/* Link to Home */}
          <Link to="/" className="nav-link">Home</Link>
          {/* Link to Company Reviews */}
          <Link to="/company-reviews" className="nav-link">Company reviews</Link>
          {/* Link to Salary Guide */}
          <Link to="/salary-guide" className="nav-link">Salary guide</Link>
        </div>
      </div>
      {/* Sign in and Employer/Post Job section */}
      <div className="flex space-x-4">
        {/* Link to Sign In */}
        <Link to="/signin" className="nav-link text-blue-700">Sign in</Link>
        {/* Link to Employers/Post Job (replace "#" with actual link) */}
        <a href="#" className="nav-link text-blue-700">Employers / Post Job</a>
      </div>
    </div>
  );
};

export default Navbar;
