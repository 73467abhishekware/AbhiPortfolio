import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      {/* Main Content */}
      <div className="textstructure mt-20 px-5 md:px-20">
        {["I am", "Abhishek", "Ware"].map((item, index) => (
          <div key={index} className="masker">
            <h1 className="uppercase text-5xl sm:text-6xl md:text-7xl leading-[8vw] sm:leading-[6vw] md:leading-[5.5vw] tracking-tight font-['Founders Grotesk Condensed'] font-semibold">
              {item}
            </h1>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="border-t-[1px] border-zinc-800 mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-20 gap-4 md:gap-0">
        {/* Left Text */}
        <div className="text-center md:text-left flex flex-col gap-3 md:gap-10 font-bold">
          {["Designing and building innovative solutions", "Crafting experiences for the web"].map((item, index) => (
            <p
              key={index}
              className="text-md sm:text-lg md:text-xl font-light tracking-tight leading-none mb-2 md:mb-0"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Start Project Button and Icon */}
        <div className="start flex flex-col md:flex-row items-center gap-5">
          <div className="px-4 py-2 border-[2px] border-zinc-300 font-light rounded-full text-center cursor-pointer hover:bg-zinc-300 hover:text-zinc-900 transition">
            Start the project
          </div>
          <div className="w-12 h-12 flex items-center justify-center border-[1px] border-zinc-500 rounded-full cursor-pointer hover:border-zinc-300 transition">
            <span className="rotate-[45deg] text-xl">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;



// import React from 'react';
// import { FaArrowUpLong } from "react-icons/fa6";

// function LandingPage() {
//   return (
//     <div className="w-full h-screen bg-zinc-900 pt-2">
//       {/* Main Content */}
//       <div className="textstructure mt-20 px-5 md:px-20">
//         {["I am", "Abhishek", "Ware"].map((item, index) => (
//           <div key={index} className="masker">
//             <h1 className="uppercase text-4xl md:text-7xl leading-[8vw] md:leading-[5.5vw] tracking-tight font-['Founders Grotesk Condensed'] font-semibold">
//               {item}
//             </h1>
//           </div>
//         ))}
//       </div>

//       {/* Footer Section */}
//       <div className="border-t-[1px] border-zinc-800 mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-20 gap-4 md:gap-0">
//         {/* Left Text */}
//         <div className="text-center md:text-left flex gap-10 font-bold">
//           {["Designing and building innovative solutions", "Crafting experiences for the web"].map((item, index) => (
//             <p
//               key={index}
//               className=" text-sm md:text-md font-light tracking-tight leading-none mb-2 md:mb-0 "
//             >
//               {item}
//             </p>
//           ))}
//         </div>

//         {/* Start Project Button and Icon */}
//         <div className="start flex flex-col md:flex-row items-center gap-5">
//           <div className="px-4 py-2 border-[2px] border-zinc-300 font-light rounded-full text-center cursor-pointer hover:bg-zinc-300 hover:text-zinc-900 transition">
//             Start the project
//           </div>
//           <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full cursor-pointer hover:border-zinc-300 transition">
//             <span className="rotate-[45deg] text-lg">
//               <FaArrowUpLong />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
