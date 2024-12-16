import React from "react";

function nav2() {
  return (
    <div className="md:hidden mt-4">
      <ul className="flex flex-col items-center gap-2 transition-transform duration-300 ease-in-out">
        {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
          (item, index) => (
            <li
              key={index}
              className="uppercase cursor-pointer text-gray-700 transition-transform duration-300 transform hover:scale-105 text-white"
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default nav2;
