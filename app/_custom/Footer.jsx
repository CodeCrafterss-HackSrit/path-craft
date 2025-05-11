import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-2 w-full p-24 h-auto text-lg bg-gray-100">
      <div className="text-center">Crafted by Abhishek Allaboina</div>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/abshek7"
          className="text-gray-600 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <span>|</span>

        <a
          href="https://www.linkedin.com/in/abhishekallaboina/"
          className="text-gray-600 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
