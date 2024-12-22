import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            Twitter
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © 2024 Your Name. Built with{" "}
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Vite
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
