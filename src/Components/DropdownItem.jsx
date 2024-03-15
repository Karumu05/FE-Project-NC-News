import React from "react";

const DropdownItem = ({ label, value, setSearchQuery }) => {
  const handleClick = () => {
    setSearchQuery(() => {
      return { order: value };
    });
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

export default DropdownItem;
