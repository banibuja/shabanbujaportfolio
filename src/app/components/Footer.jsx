import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <img 
            src="images/logo-removebg-preview.png" 
            alt="CV" 
            className="w-8 h-8 md:w-16 md:h-16" 
            width={64} 
            height={64} 
          />        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
