import React from 'react'

const nav = () => {
  return (
    <div>
        <ul className="flex gap-8">
            {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="relative group uppercase cursor-pointer text-white transition-transform duration-300 transform hover:-translate-y-1 hover:text-primary"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </li>
              )
            )}
        </ul>
    </div>
  )
}

export default nav

