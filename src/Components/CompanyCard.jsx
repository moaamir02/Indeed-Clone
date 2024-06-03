// // components/CompanyCard.jsx
// import React from 'react';

// const CompanyCard = ({ name, reviews }) => {
//   return (
//     <div className="border border-gray-400 p-5 rounded-lg hover:shadow-2xl flex flex-col items-center mt-4">
//       <h3 className="font-bold mb-2">{name}</h3>
//       <p className="mb-2">{reviews} reviews</p>
//       <div className="flex mt-2">
//         <a href="#" className="text-gray-500 mr-8 hover:text-blue-900 hover:underline  text-[14px]">Job openings</a>
//         <a href="#" className="text-gray-500 mr-8 hover:text-blue-900 hover:underline text-[14px]">Reviews</a>
//         <a href="#" className="text-gray-500 hover:text-blue-900 hover:underline text-[14px]">Salaries</a>
//       </div>
//     </div>
//   );
// };

// export default CompanyCard;





// components/CompanyCard.jsx
// import React from 'react';

// const CompanyCard = ({ name, reviews, img }) => {
//   return (
//     <div className="border border-gray-400 p-5 rounded-lg hover:shadow-2xl flex flex-col items-center mt-4">
//       {img && <img src={img} alt={`${name} logo`} className="w-16 h-16 mb-4" />}
//       <h3 className="font-bold mb-2">{name}</h3>
//       <p className="mb-2">{reviews} reviews</p>
//       <div className="flex mt-2">
//         <a href="#" className="text-gray-500 mr-8 hover:text-blue-900 hover:underline text-[14px]">Job openings</a>
//         <a href="#" className="text-gray-500 mr-8 hover:text-blue-900 hover:underline text-[14px]">Reviews</a>
//         <a href="#" className="text-gray-500 hover:text-blue-900 hover:underline text-[14px]">Salaries</a>
//       </div>
//     </div>
//   );
// };

// export default CompanyCard;




// components/CompanyCard.jsx
import React from 'react';

const CompanyCard = ({ name, reviews, img }) => {
  return (
    <div className="relative border border-gray-400 p-5 rounded-lg hover:shadow-2xl flex items-center mt-4">
      {img && <img src={img} alt={`${name} logo`} className="w-14 h-14 -mt-[27%] absolute left-6 shadow-2xl rounded-lg " />}
      <div className="ml-16 flex flex-col items-start">
        <h3 className="font-bold mb-2 pl-2">{name}</h3>
        <p className="mb-2">{reviews} reviews</p>
        <div className="flex mt-2">
          <a href="#" className="text-gray-500 mr-8 hover:text-blue-900 hover:underline text-[14px]">Job openings</a>
          <a href="#" className="text-gray-500 mr-8 hover:text-blue-900 hover:underline text-[14px]">Reviews</a>
          <a href="#" className="text-gray-500 hover:text-blue-900 hover:underline text-[14px]">Salaries</a>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
