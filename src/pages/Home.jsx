// import React, { useState } from 'react';
// import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
// import Footer from '../Components/Footer';

// const Home = () => {
//   // State for job search term
//   const [jobSearchTerm, setJobSearchTerm] = useState('');
//   // State for location search term
//   const [locationSearchTerm, setLocationSearchTerm] = useState('');

//   // Handler for job search term change
//   const handleJobSearchChange = (e) => {
//     setJobSearchTerm(e.target.value);
//   };

//   // Handler for location search term change
//   const handleLocationSearchChange = (e) => {
//     setLocationSearchTerm(e.target.value);
//   };

//   // Handler for search form submission
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log('Job search term submitted:', jobSearchTerm);
//     console.log('Location search term submitted:', locationSearchTerm);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow">
//         {/* Search Bar Container */}
//         <div className="flex flex-col items-center justify-center mt-8 w-full px-4">
//           <div className="w-full max-w-4xl">
//             <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center w-full border border-black rounded-md overflow-hidden shadow-lg">
//               <div className="relative flex-grow w-full">
//                 <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
//                 <input
//                   type="text"
//                   value={jobSearchTerm}
//                   onChange={handleJobSearchChange}
//                   placeholder="Job title, keywords, or company"
//                   className="border-none w-full py-4 pl-10 pr-4"
//                 />
//               </div>
//               <div className="relative flex-grow w-full mt-2 md:mt-0">
//                 <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
//                 <input
//                   type="text"
//                   value={locationSearchTerm}
//                   onChange={handleLocationSearchChange}
//                   placeholder="City, state, zip code, or 'remote'"
//                   className="border-none w-full py-4 pl-10 pr-4"
//                 />
//               </div>
//               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full md:w-auto whitespace-nowrap mt-2 md:mt-0 mr-2">
//                 Find jobs
//               </button>
//             </form>
//           </div>
//         </div>
//         {/* Main Content */}
//         <div className="flex flex-col items-center justify-center mt-8">
//           <div className="text-center space-y-4">
//             <div>
//               <a href="#" className="text-blue-500 font-bold text-lg hover:underline">
//                 Post your resume
//               </a>
//               {" - "}
//               <span>It only takes a few seconds</span>
//             </div>
//             <div>
//               <a href="#" className="text-blue-500 font-bold text-lg hover:underline">
//                 Post a job today
//               </a>
//               {" - "}
//               <span>and connect with quality candidates</span>
//             </div>
//           </div>
//           <p className="mt-12 text-center text-sm">Indeed हिंदी में भी उपलब्ध है</p>
//           <div className="mt-8">
//             <select className="px-4 py-2">
//               <option>What's trending on Indeed</option>
//               {/* Add more options here */}
//             </select>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;









import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Home = () => {
  // State for job search term
  const [jobSearchTerm, setJobSearchTerm] = useState('');
  // State for location search term
  const [locationSearchTerm, setLocationSearchTerm] = useState('');

  // Handler for job search term change
  const handleJobSearchChange = (e) => {
    setJobSearchTerm(e.target.value);
  };

  // Handler for location search term change
  const handleLocationSearchChange = (e) => {
    setLocationSearchTerm(e.target.value);
  };

  // Handler for search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Job search term submitted:', jobSearchTerm);
    console.log('Location search term submitted:', locationSearchTerm);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Search Bar Container */}
        <div className="flex flex-col items-center justify-center mt-8 px-4">
          <div className="w-full max-w-4xl">
            <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center w-full border border-black rounded-md overflow-hidden shadow-lg">
              <div className="relative flex-grow w-full">
                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  value={jobSearchTerm}
                  onChange={handleJobSearchChange}
                  placeholder="Job title, keywords, or company"
                  className="border-none w-full py-3 pl-10 pr-4"
                />
              </div>
              <div className="relative flex-grow w-full mt-3 md:mt-0 md:ml-2">
                <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  value={locationSearchTerm}
                  onChange={handleLocationSearchChange}
                  placeholder="City, state, zip code, or 'remote'"
                  className="border-none w-full py-3 pl-10 pr-4"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full md:w-auto mt-3 md:mt-0 md:ml-2">
                Find jobs
              </button>
            </form>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center mt-8 px-4">
          <div className="text-center space-y-4">
            <div>
              <a href="#" className="text-blue-500 font-bold text-lg hover:underline">
                Post your resume
              </a>
              {" - "}
              <span>It only takes a few seconds</span>
            </div>
            <div>
              <a href="#" className="text-blue-500 font-bold text-lg hover:underline">
                Post a job today
              </a>
              {" - "}
              <span>and connect with quality candidates</span>
            </div>
          </div>
          <p className="mt-8 text-center text-sm">Indeed हिंदी में भी उपलब्ध है</p>
          <div className="mt-8">
            <select className="px-4 py-2">
              <option>What's trending on Indeed</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
