// import React from 'react';
// import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

// // Footer component
// const BFooter = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-4">
//         {/* Flex container for layout */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//           {/* Brand information section */}
//           <div className="mb-8 md:mb-0">
//             <a href="#" className="text-2xl font-bold">indeed</a>
//             <p className="text-sm mt-2">© 2024 Indeed</p>
//             <p className="text-sm mt-1"><a href="#" className="hover:underline">Accessibility at Indeed</a></p>
//             <p className="text-sm mt-1"><a href="#" className="hover:underline">Privacy Centre and Ad Choices</a></p>
//           </div>
//           {/* Explore Indeed section */}
//           <div className="flex flex-col md:flex-row md:space-x-16">
//             <div className="mb-8 md:mb-0">
//               <h5 className="font-semibold">Explore Indeed</h5>
//               <ul className="mt-2 space-y-1">
//                 <li><a href="#" className="text-sm hover:underline">Career Explorer</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Career advice</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Browse Jobs</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Browse Companies</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Salaries</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Indeed Events</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Work at Indeed</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Countries</a></li>
//               </ul>
//             </div>
//             {/* About Indeed section */}
//             <div className="mb-8 md:mb-0">
//               <h5 className="font-semibold">About</h5>
//               <ul className="mt-2 space-y-1">
//                 <li><a href="#" className="text-sm hover:underline">About</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Help Centre</a></li>
//                 <li><a href="#" className="text-sm hover:underline">ESG at Indeed</a></li>
//                 <li><a href="#" className="text-sm hover:underline">Guidelines for safe job search</a></li>
//               </ul>
//             </div>
//           </div>
//           {/* Social media links */}
//           <div className="flex space-x-4 mt-8 md:mt-0">
//             <a href="#" className="text-2xl hover:text-gray-300"><FaTwitter /></a>
//             <a href="#" className="text-2xl hover:text-gray-300"><FaFacebookF /></a>
//             <a href="#" className="text-2xl hover:text-gray-300"><FaInstagram /></a>
//             <a href="#" className="text-2xl hover:text-gray-300"><FaYoutube /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default BFooter;




import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

// Footer component
const BFooter = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Flex container for layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Brand information section */}
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold">indeed</a>
            <p className="text-sm mt-2">© 2024 Indeed</p>
            <p className="text-sm mt-1"><a href="#" className="hover:underline">Accessibility at Indeed</a></p>
            <p className="text-sm mt-1"><a href="#" className="hover:underline">Privacy Centre and Ad Choices</a></p>
          </div>
          {/* Explore Indeed section */}
          <div className="flex flex-col md:flex-row md:space-x-16 mb-8 md:mb-0">
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold">Explore Indeed</h5>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="text-sm hover:underline">Career Explorer</a></li>
                <li><a href="#" className="text-sm hover:underline">Career advice</a></li>
                <li><a href="#" className="text-sm hover:underline">Browse Jobs</a></li>
                <li><a href="#" className="text-sm hover:underline">Browse Companies</a></li>
                <li><a href="#" className="text-sm hover:underline">Salaries</a></li>
                <li><a href="#" className="text-sm hover:underline">Indeed Events</a></li>
                <li><a href="#" className="text-sm hover:underline">Work at Indeed</a></li>
                <li><a href="#" className="text-sm hover:underline">Countries</a></li>
              </ul>
            </div>
            {/* About Indeed section */}
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold">About</h5>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="text-sm hover:underline">About</a></li>
                <li><a href="#" className="text-sm hover:underline">Help Centre</a></li>
                <li><a href="#" className="text-sm hover:underline">ESG at Indeed</a></li>
                <li><a href="#" className="text-sm hover:underline">Guidelines for safe job search</a></li>
              </ul>
            </div>
          </div>
          {/* Social media links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-2xl hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BFooter;
