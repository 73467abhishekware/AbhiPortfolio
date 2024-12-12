// import React from 'react'

// function Navbar() {
//   return (
//     <div className="fixted z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between itemsicenter ">
//         <div className='logo'>
//             <b>Kolekars</b>
//         </div>
//         <div className='links flex gap-10'>
//             {["Home","About Me","Experiance","Work"].map((item, index)=>(
//                 <a key={index} className={`text-lg capitalize font-light ${index === 3 && "ml-32"}`}>{item}</a>
//             ))}
//         </div>
//     </div>
//   )
// }
 
// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 px-5 py-4 font-roboto">
      <div className="flex justify-between items-center h-20">
        <Link to="/" className="text-2xl font-bold text-zinc-200">  {/* Use Link for Home */}
          <span className="text-orange-500">Abhishek</span> Ware
        </Link>

        <button
          className="text-2xl text-zinc-200 md:hidden"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-icons">menu</span>
        </button>

        <div className="hidden md:flex md:flex-row md:justify-center" id="navbarNav">
          <ul className="flex gap-10">
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
                to="/educationexperience"  
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                Education Experience
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
                to="/contact-me"  
                className="text-zinc-200 font-medium hover:text-orange-500 transition duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <div className="flex items-center ml-8">
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
