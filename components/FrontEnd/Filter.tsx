"use client";

import React, { useState } from "react";
import { CardDemo } from "./CardDemo";
import SearchBar from "./SearchBar"; 
import { Meteors } from "../ui/meteors";
import { X } from "lucide-react";

interface CardData {
  type: string;
  imageUrl: string;
}

interface FilterData {
  type: string;
  imageUrl: string;
}

const data: FilterData[] = [
  { type: "Photography", imageUrl: "/photography.jpg" },
  { type: "Photography", imageUrl: "/photography2.jpg" },
  { type: "Post-Production", imageUrl: "/postproduction.jpg" },
  { type: "Animation", imageUrl: "/animation.jpg" },
  { type: "Animation", imageUrl: "/animated.mp4" },  // This is a video file
  { type: "Video Production", imageUrl: "/videoproduction.jpg" },
  { type: "Video Production", imageUrl: "/videoproduction2.jpg" },
  { type: "Creative development", imageUrl: "/creativedevelopment.jpg" }
];

const categories = ["Photography", "Post-Production", "Animation", "Video Production", "Creative development"];

const Filter: React.FC = () => {
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Toggle filter type
  const toggleFilterType = (type: string) => {
    if (filterTypes.includes(type)) {
      setFilterTypes(filterTypes.filter(t => t !== type));
    } else {
      setFilterTypes([...filterTypes, type]);
    }
  };

  // Filter data based on the selected filterTypes and searchTerm
  const filteredData = data.filter(item => {
    const matchesType = filterTypes.length === 0 || filterTypes.includes(item.type);
    const matchesSearchTerm = item.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearchTerm;
  });

  // Clear all filters
  const clearFilters = () => {
    setFilterTypes([]);
    setSearchTerm("");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Meteors number={20} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => toggleFilterType(category)}
            className={`w-24 h-12 sm:w-32 sm:h-16 text-sm sm:text-base bg-white dark:bg-slate-900 text-blue-500 font-bold rounded-md shadow-2xl flex items-center justify-center hover:bg-blue-50 ${
              filterTypes.includes(category) ? "bg-blue-100 dark:bg-blue-800 dark:text-white" : ""
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="my-4">
        {(filterTypes.length > 0 || searchTerm) && (
          <div className="mb-4">
            <div className="flex flex-wrap items-center space-x-2 mb-4">
              {filterTypes.map((type) => (
                <span
                  key={type}
                  className="flex items-center px-3 py-1 bg-white-500 bg-opacity-20 dark:bg-white-300 dark:bg-opacity-20 text-blue-200 dark:text-blue-300 rounded-full shadow-lg justify-center"
                >
                  {type}
                  <button
                    onClick={() => toggleFilterType(type)}
                    className="ml-2 text-sm"
                  >
                    <X className="w-4 h-4 text-red-700 dark:text-red-500" />
                  </button>
                </span>
              ))}
              {searchTerm && (
                <span className="flex items-center px-3 py-1 bg-green-500 bg-opacity-20 dark:bg-green-300 dark:bg-opacity-20 text-green-700 dark:text-green-500 rounded-full shadow-lg justify-center">
                  {searchTerm}
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 text-sm"
                  >
                    <X className="w-4 h-4 text-green-700 dark:text-green-500" />
                  </button>
                </span>
              )}
              <div className="flex flex-col md:flex-row justify-between items-center">
                <button
                  onClick={clearFilters}
                  className="flex items-center px-3 py-1 bg-red-500 bg-opacity-20 dark:bg-gray-300 dark:bg-opacity-20 text-white-200 dark:text-white-300 rounded-full shadow-lg justify-center"
                >
                  <span>Clear All</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <CardDemo
              key={index}
              type={item.type}
              imageUrl={item.imageUrl}
            />
          ))
        ) : (
          <p className="w-full text-center text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
