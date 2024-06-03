// components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className=" px-[10%] bg-blue-900 text-white p-4 flex flex-col ">
      <h1 className="text-2xl font-bold mb-4">Find a career you'll love</h1>
      <p className="mb-4">Explore which careers have the highest job satisfaction, best salaries and more</p>

      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto ">
        <input type="text" placeholder="Job title, skills, benefits, certifications, any keywords" className="p-2 rounded border border-gray-300 flex-grow" />
        <input type="text" placeholder="India" className="p-2 rounded border border-gray-300 flex-grow" />
        <button className="bg-blue-600 p-2 rounded text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
