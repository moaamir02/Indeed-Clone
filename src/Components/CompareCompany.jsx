// import React from 'react';

// const companies = [
//   {
//     name1: 'Apollo Hospitals',
//     rating1: 4.2,
//     reviews1: 980,
//     logo1: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/3ac43bc05e8fb29956b65d7b7a859386',
//     name2: 'Fortis Healthcare',
//     rating2: 4.1,
//     reviews2: 401,
//     logo2: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/52c95b91016379a6f79e735db40b4437',
//   },
//   {
//     name1: 'sis security',
//     rating1: 3.1,
//     reviews1: 36,
//     logo1: 'path_to_logo1',
//     name2: 'SIS India Limited',
//     rating2: 3.8,
//     reviews2: 51,
//     logo2: 'path_to_logo2',
//   },
//   {
//     name1: 'HSBC',
//     rating1: 4.0,
//     reviews1: 15700,
//     logo1: 'path_to_logo1',
//     name2: 'Citi',
//     rating2: 3.9,
//     reviews2: 20000,
//     logo2: 'path_to_logo2',
//   },
//   {
//     name1: 'Bharti Airtel',
//     rating1: 4.1,
//     reviews1: 2800,
//     logo1: 'path_to_logo1',
//     name2: 'Airtel Broadband',
//     rating2: 4.0,
//     reviews2: 44,
//     logo2: 'path_to_logo2',
//   },
// ];

// const CompareCompanies = () => {
//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-semibold mb-8">Compare working at</h2>
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
//         {companies.map((pair, index) => (
//           <div className='bg-white shadow-md rounded-lg p-8 flex'>
//                       <div key={index} className="justify-between items-center md:items-start">
//             <div className="flex items-center mb-4 md:mb-0">
//               <img src={pair.logo1} alt={pair.name1} className="w-10 h-10 mr-4"/>
//               <div>
//                 <h3 className="font-semibold">{pair.name1}</h3>
//                 <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating1} <span className="text-gray-500">⭐</span> {pair.reviews1} reviews</p>
//               </div>
//             </div>
//             <span className="mx-4 my-2 md:my-0">VS</span>
//             <div className="flex items-center">
//               <img src={pair.logo2} alt={pair.name2} className="w-10 h-10 mr-4"/>
//               <div>
//                 <h3 className="font-semibold">{pair.name2}</h3>
//                 <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating2} <span className="text-gray-500">⭐</span> {pair.reviews2} reviews</p>
//               </div>
//             </div>
//           </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareCompanies;










// import React from 'react';

// const companies = [
//   {
//     name1: 'Apollo Hospitals',
//     rating1: 4.2,
//     reviews1: 980,
//     logo1: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/3ac43bc05e8fb29956b65d7b7a859386',
//     name2: 'Fortis Healthcare',
//     rating2: 4.1,
//     reviews2: 401,
//     logo2: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/52c95b91016379a6f79e735db40b4437',
//   },
//   {
//     name1: 'sis security',
//     rating1: 3.1,
//     reviews1: 36,
//     logo1: 'path_to_logo1',
//     name2: 'SIS India Limited',
//     rating2: 3.8,
//     reviews2: 51,
//     logo2: 'path_to_logo2',
//   },
//   {
//     name1: 'HSBC',
//     rating1: 4.0,
//     reviews1: 15700,
//     logo1: 'path_to_logo1',
//     name2: 'Citi',
//     rating2: 3.9,
//     reviews2: 20000,
//     logo2: 'path_to_logo2',
//   },
//   {
//     name1: 'Bharti Airtel',
//     rating1: 4.1,
//     reviews1: 2800,
//     logo1: 'path_to_logo1',
//     name2: 'Airtel Broadband',
//     rating2: 4.0,
//     reviews2: 44,
//     logo2: 'path_to_logo2',
//   },
// ];

// const CompareCompanies = () => {
//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-semibold mb-8">Compare working at</h2>
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
//         {companies.map((pair, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg p-8 flex flex-row items-center justify-between">
//             <div className="flex items-center">
//               <img src={pair.logo1} alt={pair.name1} className="w-10 h-10 mr-4"/>
//               <div>
//                 <h3 className="font-semibold">{pair.name1}</h3>
//                 <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating1} <span className="text-gray-500">⭐</span> {pair.reviews1} reviews</p>
//               </div>
//             </div>
//             <span className="mx-4 my-2 md:my-0">VS</span>
//             <div className="flex items-center">
//               <img src={pair.logo2} alt={pair.name2} className="w-10 h-10 mr-4"/>
//               <div>
//                 <h3 className="font-semibold">{pair.name2}</h3>
//                 <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating2} <span className="text-gray-500">⭐</span> {pair.reviews2} reviews</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareCompanies;






// import React from 'react';

// const companies = [
//   {
//     name1: 'Apollo Hospitals',
//     rating1: 4.2,
//     reviews1: 980,
//     logo1: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/3ac43bc05e8fb29956b65d7b7a859386',
//     name2: 'Fortis Healthcare',
//     rating2: 4.1,
//     reviews2: 401,
//     logo2: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/52c95b91016379a6f79e735db40b4437',
//   },
//   {
//     name1: 'sis security',
//     rating1: 3.1,
//     reviews1: 36,
//     logo1: 'path_to_logo1',
//     name2: 'SIS India Limited',
//     rating2: 3.8,
//     reviews2: 51,
//     logo2: 'path_to_logo2',
//   },
//   {
//     name1: 'HSBC',
//     rating1: 4.0,
//     reviews1: 15700,
//     logo1: 'path_to_logo1',
//     name2: 'Citi',
//     rating2: 3.9,
//     reviews2: 20000,
//     logo2: 'path_to_logo2',
//   },
//   {
//     name1: 'Bharti Airtel',
//     rating1: 4.1,
//     reviews1: 2800,
//     logo1: 'path_to_logo1',
//     name2: 'Airtel Broadband',
//     rating2: 4.0,
//     reviews2: 44,
//     logo2: 'path_to_logo2',
//   },
// ];

// const CompareCompanies = () => {
//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-semibold mb-8">Compare working at</h2>
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
//         {companies.map((pair, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-row items-center justify-between">
//             <div className="flex items-center">
//               <img src={pair.logo1} alt={pair.name1} className="w-10 h-10 mr-4"/>
//               <div>
//                 <h3 className="font-semibold">{pair.name1}</h3>
//                 <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating1} <span className="text-gray-500">⭐</span> {pair.reviews1} reviews</p>
//               </div>
//             </div>
//             <span className="mx-4 my-2 md:my-0">VS</span>
//             <div className="flex items-center">
//               <img src={pair.logo2} alt={pair.name2} className="w-10 h-10 mr-4"/>
//               <div>
//                 <h3 className="font-semibold">{pair.name2}</h3>
//                 <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating2} <span className="text-gray-500">⭐</span> {pair.reviews2} reviews</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompareCompanies;




import React from 'react';

const companies = [
  {
    name1: 'Apollo Hospitals',
    rating1: 4.2,
    reviews1: 980,
    logo1: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/3ac43bc05e8fb29956b65d7b7a859386',
    name2: 'Fortis Healthcare',
    rating2: 4.1,
    reviews2: 401,
    logo2: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/52c95b91016379a6f79e735db40b4437',
  },
  {
    name1: 'sis security',
    rating1: 3.1,
    reviews1: 36,
    logo1: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/202974187105ce3b31e35240f3f25aad',
    name2: 'SIS India Limited',
    rating2: 3.8,
    reviews2: 51,
    logo2: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/c1e88bb71d075bbc247a2dd8ffeb4b75',
  },
  {
    name1: 'HSBC',
    rating1: 4.0,
    reviews1: 15700,
    logo1: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/6dab2f9e01e4bb467ce4416015c323e8',
    name2: 'Citi',
    rating2: 3.9,
    reviews2: 20000,
    logo2: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/23bdd7435ebcfca5d03f5cff1f49c36e',
  },
  {
    name1: 'Bharti Airtel',
    rating1: 4.1,
    reviews1: 2800,
    logo1: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/43f2c66fc6bbaf1d7e351d0321b07567',
    name2: 'Airtel Broadband',
    rating2: 4.0,
    reviews2: 44,
    logo2: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/8cc33ec902465d5f66c28ef156dd83b9',
  },
];

const CompareCompanies = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-8">Compare working at</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {companies.map((pair, index) => (
          <div key={index} className="rounded-lg p-4 flex flex-row items-center justify-between text-nowrap">
            <div className="flex items-center">
              <img src={pair.logo1} alt={pair.name1} className="w-10 h-10 mr-4"/>
              <div style={{ maxWidth: '200px' }}>
                <h3 className="font-semibold">{pair.name1}</h3>
                <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating1} <span className="text-gray-500">⭐</span> {pair.reviews1} reviews</p>
              </div>
            </div>
            <span className="mx-4 my-2 md:my-0">VS</span>
            <div className="flex items-center">
              <img src={pair.logo2} alt={pair.name2} className="w-10 h-10 mr-4"/>
              <div style={{ maxWidth: '200px' }}>
                <h3 className="font-semibold">{pair.name2}</h3>
                <p className="text-sm" style={{ whiteSpace: 'nowrap' }}>{pair.rating2} <span className="text-gray-500">⭐</span> {pair.reviews2} reviews</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareCompanies;
