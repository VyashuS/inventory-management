import React from "react";

function CategoryFilter({ categories, onFilterChange }) {
  return (
    <div className="mb-4 w-full">
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="block w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
