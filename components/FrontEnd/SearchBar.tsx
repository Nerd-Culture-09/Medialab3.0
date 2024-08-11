"use client"

import React from "react";
import { FaSearch } from "react-icons/fa"; 

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search..."
        className="w-[800px] ml-[28%] dark:bg-slate-900 pl-10 pr-4 py-2 text-gray-900 dark:text-gray-50 bg-white border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
