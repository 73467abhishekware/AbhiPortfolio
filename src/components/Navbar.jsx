
// import React from 'react';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// const Navbar = () => {
//   return (
//     <nav className="bg-zinc-900 px-5 py-4 font-roboto">
//       <div className="flex justify-between items-center h-20">
//         <Link to="/" className="text-2xl font-bold text-zinc-200">  {/* Use Link for Home */}
//           <span className="text-orange-500">Abhishek</span> Ware
//         </Link>

//         <button
//           className="text-2xl text-zinc-200 md:hidden"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="material-icons">menu</span>
//         </button>

//         <div className="hidden md:flex md:flex-row md:justify-center" id="navbarNav">
//           <ul className="flex gap-10">
//             <li>
//               <Link
//                 to="/home"  
//                 className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/aboutme"  
//                 className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/educationexperience"  
//                 className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
//               >
//                 Education Experience
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/categories" 
//                 className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
//               >
//                 Project
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contactMe"  
//                 className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
//               >
//                 Contact Me
//               </Link>
//             </li>
//           </ul>

//           <div className="flex items-center ml-8">
//             <a
//               href="sign-in.html"
//               className="text-gray-800 text-2xl mr-6 hover:text-orange-500 transition duration-300"
//             >
//               <i className="bi-person"></i>
//             </a>
//             <a
//               href="product-detail.html"
//               className="text-gray-800 text-2xl hover:text-orange-500 transition duration-300"
//             >
//               <i className="bi-bag"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-900 px-5 py-4 font-roboto">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-zinc-200">
          <span className="text-orange-500">Abhishek</span> Ware
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-zinc-200 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="material-icons">{isOpen ? "close" : "menu"}</span>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-zinc-900 md:static md:w-auto md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 px-5 md:px-0">
            <li>
              <Link
                to="/home"
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutme"
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                About Me
              </Link>
            </li>
            
            <li>
              <Link
                to="/categories"
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/servicepage"
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/contactMe"
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                Contact 
              </Link>
            </li>
            <li>
              <Link
                to="/educationexperience"
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                Education&Experience
              </Link>
            </li>
            
           
          </ul>   

          {/* Icons for Mobile and Desktop */}
          <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0">
            <a
              href="sign-in.html"
              className="text-gray-800 text-2xl mr-6 hover:text-orange-500 transition duration-300"
            >
              <i className="bi-person"></i>
            </a>
            <a
              href="product-detail.html"
              className="text-gray-800 text-2xl hover:text-orange-500 transition duration-300"
            >
              <i className="bi-bag"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
