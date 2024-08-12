
"use client"

import React, { useState } from "react";
import { CardDemo } from "./CardDemo";
import SearchBar from "./SearchBar"; 
import { Meteors } from "../ui/meteors";

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
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    name: "Sophia Brown",
    time: "4 min read",
    title: "Tech Innovation Summit 2024",
    description: "An immersive summit focusing on the latest in tech innovation and emerging trends.",
  },
  {
    type: "Summit",
    imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdlbmVyYWx8ZW58MHx8fDE2NTM5OTM5MTQ&ixlib=rb-1.2.1&q=80&w=1080",
    
    name: "Emma Davis",
    time: "3 min read",
    title: "Global Business Summit 2024",
    description: "Connect with top executives and explore global business strategies.",
  },

  // Cohort
  {
    type: "Cohort",
    imageUrl: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    
    name: "James Lee",
    time: "4 min read",
    title: "Growth Cohort for Entrepreneurs",
    description: "Join a growth cohort designed for entrepreneurs looking to scale their businesses effectively.",
  },
  {
    type: "Cohort",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    name: "Olivia Martinez",
    time: "3 min read",
    title: "Leadership Cohort for Managers",
    description: "Enhance your leadership skills through this intensive cohort for managers and team leaders.",
  },

  // Conference
  {
    type: "Conference",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    name: "Mia Taylor",
    time: "2 min read",
    title: "Digital Marketing Conference 2024",
    description: "Explore the future of digital marketing with top industry experts at this year’s conference.",
  },
  {
    type: "Conference",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    name: "John Miller",
    time: "5 min read",
    title: "Future Tech Conference 2024",
    description: "Join us to learn about the latest advancements in technology and innovation.",
  },

  // Jobs
  {
    type: "Jobs",
    imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdlbmVyYWx8ZW58MHx8fDE2NTM5OTM5MTQ&ixlib=rb-1.2.1&q=80&w=1080",
    
    name: "Emily Davis",
    time: "5 min read",
    title: "Top Remote Jobs in Tech",
    description: "Discover top remote job opportunities in the tech industry with leading companies.",
  },
  {
    type: "Jobs",
    imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdlbmVyYWx8ZW58MHx8fDE2NTM5OTM5MTQ&ixlib=rb-1.2.1&q=80&w=1080",
    
    name: "Liam Wilson",
    time: "6 min read",
    title: "Exciting New Job Openings",
    description: "Check out the latest job openings in various fields and find the perfect role for you.",
  },
];

const Filter: React.FC = () => {
  const [filterType, setFilterType] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter data based on the selected filterType and searchTerm
  const filteredData = data.filter(item => {
    const matchesType = filterType === "All" || item.type === filterType;
    const matchesSearchTerm =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearchTerm;
  });

  return (
    <div className="p-10">
       <Meteors number={20} />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        
      />
      <div className="flex justify-between items-center space-x-2 my-4">
        <div className="flex flex-grow justify-center space-x-2">
        <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilterType("All")}
          className="w-[3cm] h-[3cm] bg-white dark:bg-slate-900 text-blue-500 font-bold border border-blue-500 rounded-md shadow-lg flex items-center justify-center hover:bg-blue-50"
        >
          All
        </button>
        <button
          onClick={() => setFilterType("Summit")}
          className="w-[3cm] h-[3cm] bg-white dark:bg-slate-900 text-blue-500 font-bold border border-blue-500 rounded-md shadow-lg flex items-center justify-center hover:bg-blue-50"
        >
          Summit
        </button>
        <button
          onClick={() => setFilterType("Cohort")}
          className="w-[3cm] h-[3cm] bg-white dark:bg-slate-900 text-blue-500 font-bold border border-blue-500 rounded-md flex shadow-lg items-center justify-center hover:bg-blue-50"
        >
          Cohort
        </button>
        <button
          onClick={() => setFilterType("Conference")}
          className="w-[3cm] h-[3cm] bg-white dark:bg-slate-900 text-blue-500 font-bold border border-blue-500 rounded-md flexshadow-lg items-center justify-center hover:bg-blue-50"
        >
          Conference
        </button>
        <button
          onClick={() => setFilterType("Jobs")}
          className="w-[3cm] h-[3cm] bg-white dark:bg-slate-900 text-blue-500 font-bold border border-blue-500 rounded-md flex shadow-lg items-center justify-center hover:bg-blue-50"
        >
          Jobs
        </button>
      </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredData.map((item, index) => (
          <CardDemo
            key={index}
            type={item.type}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            name={item.name}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
