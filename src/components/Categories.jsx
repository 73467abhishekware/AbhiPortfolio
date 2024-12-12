// import React from "react";
// import {
//   FaPaintBrush,
//   FaCode,
//   FaBullhorn,
//   FaPhoneAlt,
//   FaEdit,
//   FaCalculator,
// } from "react-icons/fa";

// const Categories = () => {
//   const categories = [
//     { title: "UI/UX Design", jobs: "12k+", icon: <FaPaintBrush className="text-green-600 text-5xl" /> },
//     { title: "Development", jobs: "8k+", icon: <FaCode className="text-green-600 text-5xl" /> },
//     { title: "Marketing", jobs: "10k+", icon: <FaBullhorn className="text-green-600 text-5xl" /> },
//     { title: "Telemarketing", jobs: "6k+", icon: <FaPhoneAlt className="text-green-600 text-5xl" /> },
//     { title: "Editing", jobs: "7k+", icon: <FaEdit className="text-green-600 text-5xl" /> },
//     { title: "Accounting", jobs: "17k+", icon: <FaCalculator className="text-green-600 text-5xl" /> },
//   ];

//   return (
//     <section className="py-20 bg-gray-100 text-center">
//       <div className="container mx-auto px-6">
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Most <span className="text-green-600">Demanding Categories</span>
//           </h2>
//           <p className="text-lg text-gray-600">
//             Together with useful notifications, collaboration, insights, and
//             improvement tips.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
//             >
//               <div className="mb-6">{category.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {category.title}
//               </h3>
//               <p className="text-gray-600">{category.jobs} Jobs</p>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12">
//           <a
//             href="/job-grid-v1"
//             className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 hover:bg-green-700"
//           >
//             Explore all fields
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;
import React from "react";
import { FaJava, FaLeaf, FaReact, FaHtml5, FaCss3, FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { title: "Java", jobs: "15k+", icon: <FaJava className="text-yellow-500 text-5xl" />, route: "/java" },
    { title: "Spring Boot", jobs: "10k+", icon: <FaLeaf className="text-yellow-500 text-5xl" />, route: "/project" },
    { title: "React", jobs: "20k+", icon: <FaReact className="text-yellow-500 text-5xl" />, route: "/project" },
    { title: "HTML & CSS", jobs: "25k+", icon: <FaHtml5 className="text-yellow-500 text-5xl" />, route: "/project" },
    { title: "React Vite", jobs: "8k+", icon: <FaReact className="text-yellow-500 text-5xl" />, route: "/project" },
    { title: "Tailwind CSS", jobs: "12k+", icon: <FaCss3 className="text-yellow-500 text-5xl" />, route: "/project" },
  ];

  return (
    <section className="py-20 bg-black text-center">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            projects <span className="text-yellow-500">bsed on technology</span>
          </h2>
          <p className="text-lg text-gray-400">
            Together with useful notifications, collaboration, insights, and
            improvement tips.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-8 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate(category.route)}
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400">{category.jobs} Jobs</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/job-grid-v1"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 hover:bg-yellow-600"
          >
            Explore all fields
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
