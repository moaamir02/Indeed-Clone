// import { FaSearch } from "react-icons/fa"; // Importing FaSearch icon from react-icons/fa
// import companies from "../constant"; // Importing companies data from constant file (adjust the path if needed)
// import React from "react"; // Importing React library
// import Footer from '../Components/Footer'; // Importing Footer component
// import CompareCompanies from "../Components/CompareCompany"; // Importing CompareCompanies component

// const CompanyReviews = () => {
//   // Function to render star ratings
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <svg
//           key={i}
//           className={`w-4 h-4 ${i < Math.floor(rating) ? "text-purple-500" : "text-gray-300"}`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.09l6.562-.955L10 0l2.951 6.135 6.562.955-4.757 4.455 1.122 6.545L10 15z" />
//         </svg>
//       );
//     }
//     return stars;
//   };

//   return (
//     <>
//       {/* Main content */}
//       <div className="container mx-auto px-[10%]">
//         <h1 className="text-[44px] mb-3 mt-[80px] font-bold font-noto-sans">
//           Find great places to work
//         </h1>
//         <p className="text-gray-500 text-[20px] mb-6">
//           Get access to millions of company reviews
//         </p>
//         <div className="flex flex-col mb-6 relative">
//           <label
//             htmlFor="company-search"
//             className="mb-2 text-lg font-bold text-[16px]"
//           >
//             Company name or job title
//           </label>
//           <div className="flex items-center relative w-full">
//             <input
//               id="company-search"
//               type="text"
//               placeholder="Company name or job title"
//               className="border p-2 rounded-lg w-full pr-10"
//             />
//             <FaSearch className="w-5 h-6 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 text-nowrap mt-2">
//               Find Companies
//             </button>
//           </div>
//         </div>
//         <h2 className="text-2xl font-semibold mb-4">Popular companies</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//           {/* Mapping over companies data to display each company */}
//           {companies.map((company, index) => (
//             <div key={index} className="flex items-center p-4 rounded-lg">
//               <img
//                 className="max-h-[48px] max-w-[48px] mr-4 rounded-md"
//                 src={company.url}
//                 alt={`${company.name} logo`}
//               />
//               <div>
//                 <h3 className="text-lg font-semibold mb-1">
//                   {company.name}
//                 </h3>
//                 <div className="flex items-center mb-1">
//                   {/* Calling renderStars function to display star ratings */}
//                   {renderStars(company.rating)}
//                   <p className="ml-2 text-blue-500">{company.reviews} reviews</p>
//                 </div>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-gray-500 text-nowrap">Salaries</a>
//                   <a href="#" className="text-gray-500 text-nowrap">Questions</a>
//                   <a href="#" className="text-gray-500 text-nowrap">Open jobs</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* Component to compare companies */}
//           <CompareCompanies />
//         </div>
//       </div>

//       {/* Footer component */}
//       <Footer />
//     </>
//   );
// };

// export default CompanyReviews;






import { FaSearch } from "react-icons/fa";
import companies from "../constant";
import React from "react";
import Footer from '../Components/Footer';
import CompareCompanies from "../Components/CompareCompany";

const CompanyReviews = () => {
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-purple-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.09l6.562-.955L10 0l2.951 6.135 6.562.955-4.757 4.455 1.122 6.545L10 15z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold my-8">
          Find great places to work
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-8">
          Get access to millions of company reviews
        </p>
        <div className="relative mb-8">
          <label
            htmlFor="company-search"
            className="text-xl font-bold text-gray-800 mb-2 block"
          >
            Company name or job title
          </label>
          <div className="flex items-center w-full">
            <input
              id="company-search"
              type="text"
              placeholder="Search..."
              className="border p-3 rounded-lg w-full pr-10 focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="w-6 h-6 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
              Find Companies
            </button>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
          Popular companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                className="w-16 h-16 object-cover rounded-full mb-4"
                src={company.url}
                alt={`${company.name} logo`}
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">{company.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(company.rating)}
                  <p className="ml-2 text-blue-500">{company.reviews} reviews</p>
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-gray-500">Salaries</a>
                  <a href="#" className="text-gray-500">Questions</a>
                  <a href="#" className="text-gray-500">Open jobs</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CompareCompanies />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyReviews;

