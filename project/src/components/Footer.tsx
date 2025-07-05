import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div 
        className="bg-gray-700 text-center py-4 text-sm cursor-pointer hover:bg-gray-600 transition-colors"
        onClick={scrollToTop}
      >
        Back to top
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-6xl mx-auto">
        <div>
          <h3 className="font-bold text-base mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:underline">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">About Amazon</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Investor Relations</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Amazon Devices</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Amazon Science</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:underline">Sell products on Amazon</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Sell on Amazon Business</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Sell apps on Amazon</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Become an Affiliate</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Advertise Your Products</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Self-Publish with Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base mb-3">Amazon Payment Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:underline">Amazon Business Card</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Shop with Points</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Reload Your Balance</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Amazon Currency Converter</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:underline">Amazon and COVID-19</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Your Account</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Your Orders</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Shipping Rates & Policies</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Returns & Replacements</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Help</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 py-8 text-center">
        <div className="text-white font-bold text-xl mb-4">amazon</div>
      </div>

      <div className="bg-gray-900 text-center py-8 text-sm">
        <div className="flex justify-center gap-5 mb-3 flex-wrap">
          <a href="#" className="text-gray-300 hover:underline">Conditions of Use</a>
          <a href="#" className="text-gray-300 hover:underline">Privacy Notice</a>
          <a href="#" className="text-gray-300 hover:underline">Your Ads Privacy Choices</a>
        </div>
        <div className="text-gray-300">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;