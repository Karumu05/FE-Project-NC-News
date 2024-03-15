import React from "react";

const SortByDropdownItem = ({ label, value, setSearchQuery }) => {
  const handleClick = () => {
    setSearchQuery({ sort_by: value });
  };

  return (
    <div>
      <li
        onClick={handleClick}
        className="py-1 hover:bg-blue-700 cursor-pointer"
      >
        {label}
      </li>
    </div>
  );
};

export default SortByDropdownItem;
