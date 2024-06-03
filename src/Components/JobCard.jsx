// // components/JobCard.jsx
// import React from 'react';

// // JobCard component displaying job title and salary
// const JobCard = ({ title, salary }) => {
//   return (
//     // Card container with border, padding, rounded corners, and shadow effect
//     <div className="border p-4 rounded-lg shadow-lg flex flex-col items-start  hover:border-blue-600">
//       {/* Job title */}
//       <h3 className="font-bold">{title}</h3>
//       {/* Salary information */}
//       <p className='text-blue-400 font-bold'>Average salary ₹{salary} per year</p>
//       {/* Link to job openings (replace "#" with actual link) */}
//       <a href="#" className="text-gray-500 mt-2 text-[14px] hover:underline">Job openings</a>
//     </div>
//   );
// };

// export default JobCard;





import React from 'react';

// JobCard component displaying job title and salary
const JobCard = ({ title, salary }) => {
  return (
    // Card container with border, padding, rounded corners, and shadow effect
    <div className="border p-4 rounded-lg shadow-lg flex flex-col items-start hover:border-blue-600">
      {/* Job title */}
      <h3 className="font-bold text-lg md:text-xl">{title}</h3>
      {/* Salary information */}
      <p className="text-blue-400 font-bold text-sm md:text-base">Average salary ₹{salary} per year</p>
      {/* Link to job openings (replace "#" with actual link) */}
      <a href="#" className="text-gray-500 mt-2 text-sm md:text-base hover:underline">Job openings</a>
    </div>
  );
};

export default JobCard;
