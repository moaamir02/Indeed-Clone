// components/JobCard.jsx
import React from 'react';

const JobCard = ({ title, salary }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg flex flex-col items-start  hover:border-blue-600">
      <h3 className="font-bold">{title}</h3>
      <p className='text-blue-400 font-bold'>Average salary ₹{salary} per year</p>
      <a href="#" className="text-gray-500 mt-2 text-[14px] hover:underline">Job openings</a>
    </div>
  );
};

export default JobCard;
