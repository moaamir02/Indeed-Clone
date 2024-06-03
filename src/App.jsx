// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import CompanyReviews from './pages/CompanyReviews';
// import SalaryGuide from './pages/SalaryGuide';
// import Navbar from './Components/Navbar';
// import SignIn from './Components/SignIn';
// import './index.css';

// function App() {
//   return (
//     // Router component to enable routing
//     <Router>
//       {/* Main container */}
//       <>
//         {/* Navbar component */}
//         <Navbar />
//         {/* Main content area */}
//         <div className="flex-grow">
//           {/* Routes for different pages */}
//           <Routes>
//             {/* Route for the home page */}
//             <Route path="/" element={<Home />} />
//             {/* Route for company reviews page */}
//             <Route path="/company-reviews" element={<CompanyReviews />} />
//             {/* Route for salary guide page */}
//             <Route path="/salary-guide" element={<SalaryGuide />} />
//             {/* Route for sign-in page */}
//             <Route path="/signin" element={<SignIn />} />
//           </Routes>
//         </div>
//       </>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompanyReviews from './pages/CompanyReviews';
import SalaryGuide from './pages/SalaryGuide';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import './index.css'; // Ensure this CSS file exists and contains necessary styles

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensure flex and min-h-screen for full height */}
        <Navbar /> {/* Navbar component */}
        <div className="flex-grow"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for home page */}
            <Route path="/company-reviews" element={<CompanyReviews />} /> {/* Route for company reviews */}
            <Route path="/salary-guide" element={<SalaryGuide />} /> {/* Route for salary guide */}
            <Route path="/signin" element={<SignIn />} /> {/* Route for sign-in page */}
            {/* Add a default route for 404 errors */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
