"use client";

import React, { useState } from "react";
import { CardDemo } from "./CardDemo";
import SearchBar from "./SearchBar"; 
import { Meteors } from "../ui/meteors";
import { X } from "lucide-react";

// Define types for card props
interface CardData {
  type: string;
  title: string;
  description: string;
  imageUrl: string;
  avatarUrl: string;
  name: string;
  time: string;
}

// Define types for filter data
interface FilterData {
  type: string;
  title: string;
  description: string;
  imageUrl: string;
  name: string;
  time: string;
}

const data: FilterData[] = [
  // Summit
  {
    type: "Summit",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Brown",
    time: "4 min read",
    title: "Tech Innovation Summit 2024",
    description:
      "An immersive summit focusing on the latest in tech innovation and emerging trends.",
  },
  {
    type: "Summit",
    imageUrl:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdlbmVyYWx8ZW58MHx8fDE2NTM5OTM5MTQ&ixlib=rb-1.2.1&q=80&w=1080",
    name: "Emma Davis",
    time: "3 min read",
    title: "Global Business Summit 2024",
    description: "Connect with top executives and explore global business strategies.",
  },

  // Cohort
  {
    type: "Cohort",
    imageUrl:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    name: "James Lee",
    time: "4 min read",
    title: "Growth Cohort for Entrepreneurs",
    description:
      "Join a growth cohort designed for entrepreneurs looking to scale their businesses effectively.",
  },
  {
    type: "Cohort",
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Olivia Martinez",
    time: "3 min read",
    title: "Leadership Cohort for Managers",
    description:
      "Enhance your leadership skills through this intensive cohort for managers and team leaders.",
  },

  // Conference
  {
    type: "Conference",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mia Taylor",
    time: "2 min read",
    title: "Digital Marketing Conference 2024",
    description:
      "Explore the future of digital marketing with top industry experts at this year’s conference.",
  },
  {
    type: "Conference",
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Miller",
    time: "5 min read",
    title: "Future Tech Conference 2024",
    description:
      "Join us to learn about the latest advancements in technology and innovation.",
  },

  // Jobs
  {
    type: "Jobs",
    imageUrl:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdlbmVyYWx8ZW58MHx8fDE2NTM5OTM5MTQ&ixlib=rb-1.2.1&q=80&w=1080",
    name: "Emily Davis",
    time: "5 min read",
    title: "Top Remote Jobs in Tech",
    description:
      "Discover top remote job opportunities in the tech industry with leading companies.",
  },
  {
    type: "Jobs",
    imageUrl:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdlbmVyYWx8ZW58MHx8fDE2NTM5OTM5MTQ&ixlib=rb-1.2.1&q=80&w=1080",
    name: "Liam Wilson",
    time: "6 min read",
    title: "Exciting New Job Openings",
    description:
      "Check out the latest job openings in various fields and find the perfect role for you.",
  },
];
const categories = ["Summit", "Cohort", "Conference", "Jobs"];

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
    const matchesSearchTerm =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearchTerm;
  });

  // Clear all filters
  const clearFilters = () => {
    setFilterTypes([]);
    setSearchTerm("");
  };

  return (
    <div className="p-10">
      <Meteors number={20} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex justify-center gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => toggleFilterType(category)}
            className={`w-[3cm] h-[3cm] bg-white dark:bg-slate-900 text-blue-500 font-bold border border-blue-500 rounded-md shadow-lg flex items-center justify-center hover:bg-blue-50 ${
              filterTypes.includes(category)
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            } hover:bg-blue-50 transition`}
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
                  className="flex items-center px-3 py-1 bg-green-500 bg-opacity-20 dark:bg-green-300 dark:bg-opacity-20 text-green-700 dark:text-green-500 rounded-full shadow-lg justify-center"
                >
                  {type}
                  <button
                    onClick={() => toggleFilterType(type)}
                    className="ml-2 text-sm"
                  >
                    <X className="w-4 h-4 text-green-700 dark:text-green-500" />
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
                className="flex items-center px-3 py-1 bg-red-500 bg-opacity-20 dark:bg-red-300 dark:bg-opacity-20 text-red-700 dark:text-red-500 rounded-full shadow-lg justify-center"
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
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              name={item.name}
              time={item.time}
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
