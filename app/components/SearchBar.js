"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex mt-[150px] h-[350px] w-full z-10 justify-center items-center">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search events, artists, teams and more..."
          className="pl-3 pr-4 py-2 h-[54px] w-[500px] rounded-3xl"
          style={{ color: "black" }}
        />
        <FaSearch
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          style={{ color: "black" }}
          size={23}
        />
      </div>
    </div>
  );
};

export default SearchBar;
