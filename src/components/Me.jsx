// import React from 'react';
// import SkillComponent from './Skills';
// import HobbiesAchievements from './HobbyAndAchive';
// const Me = () => {
//   return (
//     <>
//     <section className="bg-zinc-900" id="about">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="w-full md:w-1/2 px-4 order-2 md:order-1">
//           <div className='textstructure mt-20 px-20 '>
//             {["I am creative","web devloper based in","satara maharashtra"].map((item,index)=>{
//                 return <div className="masker ">
//                 <h1 className="uppercase text-3xl leading-[4vw] tracking-tight font-['Founders Grotesk_Condensed'] font-semibold">{item}</h1>
//             </div>
//             })}
            
//         </div>
//             <p className="mt-4 text-lg text-zinc-200 leading-relaxed">
//              Beaing a fullstack devloper I have <span className="font-bold text-[#c70039]">6 months of experience as a Java Full Stack Developer</span>, and I specialize in:
//             </p>
//             <ul className="list-disc list-inside mt-4 text-zinc-300">
//               <li>Back-end: Java, Spring Boot, RESTful APIs</li>
//               <li>Front-end: React, HTML, CSS, JavaScript</li>
//               <li>Full Stack: Scalable, responsive web applications</li>
//             </ul>
//             <div className="read flex items-center gap-5 mt-4">
//               <a
//                 href="www.linkedin.com/in/abhishek-ware-8a6b89139"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600"
//               >
//                 Connect on LinkedIn 
//               </a>
//               <a
//                 href="https://www.instagram.com/abhishekware7/profilecard/?igsh=MWhua3djb2t3NHZybw=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-[#c70039] text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600"
//               >
//                 Connect on Instagrm
//               </a>
              
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 px-4 order-1 md:order-2 mt-6 md:mt-0">
//             <img
//               src="/AbhiFormal2.jpg"
//               alt="Abhishek Ware"
//               className="w-58 h-58 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-xl mx-auto md:mx-0 transform hover:scale-110 transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//     <SkillComponent />
//     <HobbiesAchievements/>
//     </>
//   );
// };

// export default Me;
import React from 'react';
import SkillComponent from './Skills';
import HobbiesAchievements from './HobbyAndAchive';

const Me = () => {
  return (
    <>
      <section className="bg-zinc-900 py-10" id="about">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="w-full md:w-1/2 px-4 order-2 md:order-1 text-center md:text-left">
              <div className="textstructure mt-10 md:mt-20 px-4 md:px-0">
                {["I am a creative", "web developer based in", "Satara, Maharashtra"].map((item, index) => (
                  <div key={index} className="masker">
                    <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl leading-[6vw] md:leading-[4vw] tracking-tight font-['Founders Grotesk_Condensed'] font-semibold text-zinc-100">
                      {item}
                    </h1>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm md:text-lg text-zinc-200 leading-relaxed">
                Being a full-stack developer, I have <span className="font-bold text-[#c70039]">6 months of experience as a Java Full Stack Developer</span>, and I specialize in:
              </p>
              <ul className="list-disc list-inside mt-4 text-sm md:text-md text-zinc-300">
                <li>Back-end: Java, Spring Boot, RESTful APIs</li>
                <li>Front-end: React, HTML, CSS, JavaScript</li>
                <li>Full Stack: Scalable, responsive web applications</li>
              </ul>
              <div className="read flex flex-col sm:flex-row items-center sm:justify-start gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/abhishek-ware-8a6b89139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/abhishekware7/profilecard/?igsh=MWhua3djb2t3NHZybw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#c70039] text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 transition"
                >
                  Connect on Instagram
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 px-4 order-1 md:order-2 mt-6 md:mt-0 flex justify-center">
              <img
                src="/AbhiFormal2.jpg"
                alt="Abhishek Ware"
                className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-xl transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <SkillComponent />
      <HobbiesAchievements />
    </>
  );
};

export default Me;

