import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <p className="text-center">Copyright © {new Date().getFullYear()} My Website</p>
      </div>
    </footer>
  );
};

export default Footer;