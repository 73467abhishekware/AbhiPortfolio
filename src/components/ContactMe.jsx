// import React from 'react';

// const ContactMe = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 "> 
//             <div className="bg-white rounded-lg shadow-md max-w-6xl w-full p-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Map */}
//                 <div className="flex flex-col items-center">
//                     <h2 className="text-2xl font-semibold text-gray-700 mb-4">Find Me Here</h2>
//                     <div className="aspect-w-16 aspect-h-12 rounded-md overflow-hidden shadow-lg w-full h-full">
//                         <iframe 
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60823.73282227646!2d73.97706120669436!3d17.674614746847883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239be08d96bbd%3A0x5f4adf559fb4b19a!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735060537060!5m2!1sen!2sin" 
//                             allowFullScreen="" 
//                             loading="lazy" 
//                             title="Location Map"
//                             className="w-full h-full"
//                         ></iframe>
//                     </div>
//                 </div>

//                 {/* Right Column - Contact Form */}
//                 <div className="bg-zinc-900 text-zinc-100 py-16">
//   <div className="container mx-auto px-6 md:px-12 lg:px-20">
//     <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
//     <p className="text-center text-lg text-zinc-400 mb-12">
//       Feel free to connect with me through any of the platforms below!
//     </p>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-md">
//         <span className="text-blue-400 text-2xl">📞</span>
//         <div>
//           <h3 className="text-xl font-semibold">Contact Number</h3>
//           <p className="text-zinc-400">+91 12345 67890</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-md">
//         <span className="text-blue-400 text-2xl">✉️</span>
//         <div>
//           <h3 className="text-xl font-semibold">Email</h3>
//           <p className="text-zinc-400">abhishekware@example.com</p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-md">
//         <span className="text-green-400 text-2xl">💬</span>
//         <div>
//           <h3 className="text-xl font-semibold">WhatsApp</h3>
//           <a 
//             href="https://wa.me/911234567890" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             Message me on WhatsApp
//           </a>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-md">
//         <span className="text-blue-700 text-2xl">🔗</span>
//         <div>
//           <h3 className="text-xl font-semibold">LinkedIn</h3>
//           <a 
//             href="https://www.linkedin.com/in/abhishek-ware-8a6b89139/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             View my LinkedIn Profile
//           </a>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-md">
//         <span className="text-pink-400 text-2xl">📸</span>
//         <div>
//           <h3 className="text-xl font-semibold">Instagram</h3>
//           <a 
//             href="https://www.instagram.com/abhishekware7/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             Follow me on Instagram
//           </a>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-md">
//         <span className="text-blue-400 text-2xl">💻</span>
//         <div>
//           <h3 className="text-xl font-semibold">GitHub</h3>
//           <a 
//             href="https://github.com/abhishekware" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             Visit my GitHub
//           </a>
//         </div>
//       </div>

//       <div className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-md">
//         <span className="text-blue-300 text-2xl">📞</span>
//         <div>
//           <h3 className="text-xl font-semibold">Skype</h3>
//           <p className="text-zinc-400">live:abhishekware</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//             </div>
//         </div>
//     );
// };

// export default ContactMe;

import React from 'react';

const ContactMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Location Map */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Find Me Here</h3>
            <div className="rounded-lg overflow-hidden shadow-md w-full aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60823.73282227646!2d73.97706120669436!3d17.674614746847883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239be08d96bbd%3A0x5f4adf559fb4b19a!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735060537060!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Get in Touch</h3>
            <p className="text-center text-gray-600 mb-6">
              Feel free to reach out to me through any of the platforms below!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Cards */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                <span className="text-blue-500 text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Contact Number</h4>
                  <p className="text-gray-600">+91 7038510434</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                <span className="text-blue-500 text-2xl">✉️</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <p className="text-gray-600">abhishekware1122@gmil.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                <span className="text-green-500 text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold text-gray-700">WhatsApp</h4>
                  <a
                    href="https://wa.me/917038510434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Message me on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                <span className="text-blue-700 text-2xl">🔗</span>
                <div>
                  <h4 className="font-semibold text-gray-700">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/abhishek-ware-8a6b89139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                <span className="text-pink-500 text-2xl">📸</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Instagram</h4>
                  <a
                    href="https://www.instagram.com/abhishekware7/profilecard/?igsh=MWhua3djb2t3NHZybw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Follow me on Instagram
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                <span className="text-gray-800 text-2xl">💻</span>
                <div>
                  <h4 className="font-semibold text-gray-700">GitHub</h4>
                  <a
                    href="https://github.com/73467abhishekware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
                <span className="text-blue-300 text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Skype</h4>
                  <p className="text-gray-600">live:abhishekware</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
