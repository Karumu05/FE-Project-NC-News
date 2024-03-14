import React, { useState } from "react";
import SortByDropdownItem from "./SortByDropdownItem";

const SortByDropdown = ({ label, sortByItems, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="text-white font-medium focus:outline-none py-2 px-3 rounded-lg border border-blue-700 bg-blue-700 focus:ring-4 focus:ring-blue-200 focus:ring-blue-900 hover:bg-blue-800"
        onClick={toggleDropdown}
      >
        {label}
      </button>
      {isOpen && (
        <ul className="right-0 mt-2 w-40 rounded-lg shadow-md bg-white z-50">
          {sortByItems.map((sortByItem) => {
            return (
              <SortByDropdownItem
                key={sortByItem.value}
                value={sortByItem.value}
                label={sortByItem.label}
                setSearchQuery={setSearchQuery}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SortByDropdown;
