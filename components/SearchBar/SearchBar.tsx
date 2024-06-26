"use client";
import React from "react";

const SearchBar = () => {
  const baseURL = "/FastFood/search/";
  let queryString: string;

  const handleChange = () => {
    if (queryString.length !== 0) {
      localStorage.setItem("url", `${baseURL}?term=${queryString}`);
    } else {
      localStorage.setItem("url", "/FastFood/list");
    }
  };

  return (
    <form className="w-1/4 mx-auto h-10">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        جستجو
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-emerald-500 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-400 dark:focus:ring-emerald-500 dark:focus:border-emerald-500 h-10"
          placeholder="جستجو کنید..."
          required
          onChange={(e) => {
            queryString = e.target.value;
            handleChange();
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
