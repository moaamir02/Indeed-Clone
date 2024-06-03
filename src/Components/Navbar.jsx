
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center py-4 px-8 border-b-2 border-black-500">
      <div className="flex items-center space-x-8">
        <div className="text-blue-700 text-2xl font-bold">Indeed</div>
        <div className="flex space-x-4">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/company-reviews" className="nav-link">Company reviews</Link>
          <Link to="/salary-guide" className="nav-link">Salary guide</Link>
        </div>
      </div>
      <div className="flex space-x-4">
        <Link to="/signin" className="nav-link text-blue-700">Sign in</Link>
        <a href="#" className="nav-link text-blue-700">Employers / Post Job</a>
      </div>
    </div>
  );
};

export default Navbar;
