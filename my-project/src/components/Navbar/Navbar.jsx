import React from 'react'

const Navbar = () => {
  return (
    <div className="py-6">
        <div className="container flex justify-between items-center">
            {/* logo section */}
            <div>   
                <p className='text-lg font-semibold'>
                    Kingsukh <span className='text-red-500' ><br></br>Guest House</span>
                </p>
            </div>
            {/* Menu section */}
            <div className='hidden md:block'>
                <ul className="flex gap-8">
                    {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map((item, index) => (
                        <li
                        key={index}
                        className="relative group uppercase cursor-pointer text-gray-700 transition-transform duration-300 transform hover:-translate-y-1 hover:text-primary"
                        >
                        {item}
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* button section */}
            <div>
                <a
                    href="https://www.apple.com"
                    className="bg-primary text-white px-4 py-4 rounded-xl hover:bg-secondary transform transition-transform duration-300 hover:-translate-y-2"
                    >
                    BOOK NOW
                    </a>
            </div>
        </div> 
    </div>
  )
}

export default Navbar
