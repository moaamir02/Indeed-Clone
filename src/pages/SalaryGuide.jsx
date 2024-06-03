// import React from "react";
// import SearchBar from "../Components/SearchBar";  // Importing SearchBar component
// import JobCard from "../Components/JobCard";      // Importing JobCard component
// import CompanyCard from "../Components/CompanyCard";  // Importing CompanyCard component
// import Feedback from "../Components/Feedback";    // Importing Feedback component
// import BFooter from '../Components/BFooter';       // Importing BFooter component
// import { FaExternalLinkAlt } from "react-icons/fa";  // Importing FaExternalLinkAlt icon

// const SalaryGuide = () => {
//   // Sample data for jobs
//   const jobs = [
//     { title: "Elementary School Teacher", salary: "2,47,528" },
//     { title: "Human Resources Specialist", salary: "2,64,897" },
//     { title: "Accountant", salary: "2,63,484" },
//     { title: "Customer Care Specialist", salary: "2,39,045" },
//     { title: "Office Assistant", salary: "2,01,117" },
//     { title: "Back Office Executive", salary: "4,06,663" },
//     { title: "Data Entry Clerk", salary: "2,56,742" },
//     { title: "Graphic Designer", salary: "2,70,136" },
//     { title: "Front Desk Manager", salary: "2,20,700" },
//   ];

//   // Sample data for companies
//   const companies = [
//     { name: "Capgemini", reviews: "10.1K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/8df3e7301fa4f88e3d67e927be1689b2' },
//     { name: "Tata Consultancy Services (TCS)", reviews: "22.2K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/13b693b4dcc055d2344351b4c9a148e9' },
//     { name: "Cognizant Technology Solutions", reviews: "13.6K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/b68ab7669635a61844e7f73701e29b97' },
//     { name: "Accenture", reviews: "26.4K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/e1bd47363c07b64a9578dbf71edbf4e4' },
//     { name: "Byju's", reviews: "1.7K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/349d1c5aed5c3943dadc47139a21b79d' },
//     { name: "IBM", reviews: "13.2K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/6c2ace8b83365eaf7a7cd5fe87834c11' },
//   ];

//   return (
//     <div className="min-h-screen font-indeed">
//       <SearchBar />  {/* Rendering the SearchBar component */}
//       <div className="p-8 px-[10%] mt-5">
//         <h2 className="text-2xl font-bold mb-4">
//           Browse top-paying jobs by industry
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           {/* Mapping through jobs data to render JobCard components */}
//           {jobs.map((job, index) => (
//             <JobCard key={index} title={job.title} salary={job.salary} />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4 pt-8">
//           Browse top-paying companies by industry
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Mapping through companies data to render CompanyCard components */}
//           {companies.map((company, index) => (
//             <CompanyCard
//               key={index}
//               name={company.name}
//               reviews={company.reviews}
//               img={company.img}
//             />
//           ))}
//         </div>

//         <div className="mt-10 border border-200 rounded-lg shadow-lg bg-white p-6 md:p-8 mx-auto">
//           <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
//             How much should you be earning?
//           </h1>
//           <p className="text-[16px] md:text-[16px] leading-relaxed mb-4 md:mb-6">
//             Get an estimated calculation of how much you should be earning
//             <br />
//             and insight into your career options.{" "}
//             <a
//               href="#"
//               className="text-blue-500 underline text-lg md:text-xl hover:text-blue-700 transition-colors"
//             >
//               See more details
//             </a>
//           </p>
//           <button className="bg-blue-800 rounded-lg p-3 text-white flex font-bold hover:bg-blue-900">
//             Get estimated pay range
//             <FaExternalLinkAlt className="ml-2 text-[22px]" />
//           </button>
//         </div>
//         <Feedback />  {/* Rendering the Feedback component */}
//       </div>
//       <BFooter />  {/* Rendering the BFooter component */}
//     </div>
//   );
// };

// export default SalaryGuide;






import React from "react";
import SearchBar from "../Components/SearchBar";
import JobCard from "../Components/JobCard";
import CompanyCard from "../Components/CompanyCard";
import Feedback from "../Components/Feedback";
import BFooter from '../Components/BFooter';
import { FaExternalLinkAlt } from "react-icons/fa";

const SalaryGuide = () => {
  // Sample data for jobs
  const jobs = [
    { title: "Elementary School Teacher", salary: "2,47,528" },
    { title: "Human Resources Specialist", salary: "2,64,897" },
    { title: "Accountant", salary: "2,63,484" },
    { title: "Customer Care Specialist", salary: "2,39,045" },
    { title: "Office Assistant", salary: "2,01,117" },
    { title: "Back Office Executive", salary: "4,06,663" },
    { title: "Data Entry Clerk", salary: "2,56,742" },
    { title: "Graphic Designer", salary: "2,70,136" },
    { title: "Front Desk Manager", salary: "2,20,700" },
  ];

  // Sample data for companies
  const companies = [
    { name: "Capgemini", reviews: "10.1K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/8df3e7301fa4f88e3d67e927be1689b2' },
    { name: "Tata Consultancy Services (TCS)", reviews: "22.2K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/13b693b4dcc055d2344351b4c9a148e9' },
    { name: "Cognizant Technology Solutions", reviews: "13.6K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/b68ab7669635a61844e7f73701e29b97' },
    { name: "Accenture", reviews: "26.4K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/e1bd47363c07b64a9578dbf71edbf4e4' },
    { name: "Byju's", reviews: "1.7K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/349d1c5aed5c3943dadc47139a21b79d' },
    { name: "IBM", reviews: "13.2K", img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/6c2ace8b83365eaf7a7cd5fe87834c11' },
  ];

  return (
    <div className="min-h-screen font-indeed">
      <SearchBar />
      <div className="p-8 px-[10%] mt-5">
        <h2 className="text-2xl font-bold mb-4">
          Browse top-paying jobs by industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {jobs.map((job, index) => (
            <JobCard key={index} title={job.title} salary={job.salary} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 pt-8">
          Browse top-paying companies by industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              name={company.name}
              reviews={company.reviews}
              img={company.img}
            />
          ))}
        </div>
        <div className="mt-10 border border-200 rounded-lg shadow-lg bg-white p-6 md:p-8 mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            How much should you be earning?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
            Get an estimated calculation of how much you should be earning
            <br />
            and insight into your career options.{" "}
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-700 transition-colors"
            >
              See more details
            </a>
          </p>
          <button className="bg-blue-800 rounded-lg p-3 text-white flex items-center font-bold hover:bg-blue-900">
            Get estimated pay range
            <FaExternalLinkAlt className="ml-2 text-xl" />
          </button>
        </div>
        <Feedback />
      </div>
      <BFooter />
    </div>
  );
};

export default SalaryGuide;
