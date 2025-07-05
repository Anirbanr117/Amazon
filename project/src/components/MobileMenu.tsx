import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <nav className="fixed top-0 left-0 w-80 h-full bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h3 className="text-white font-bold text-lg">Browse</h3>
          <button onClick={onClose} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <a href="#" className="block text-white py-3 border-b border-gray-700 hover:bg-gray-800">Today's Deals</a>
          <a href="#" className="block text-white py-3 border-b border-gray-700 hover:bg-gray-800">Customer Service</a>
          <a href="#" className="block text-white py-3 border-b border-gray-700 hover:bg-gray-800">Registry</a>
          <a href="#" className="block text-white py-3 border-b border-gray-700 hover:bg-gray-800">Gift Cards</a>
          <a href="#" className="block text-white py-3 border-b border-gray-700 hover:bg-gray-800">Sell</a>
          <a href="#" className="block text-white py-3 border-b border-gray-700 hover:bg-gray-800">Returns & Orders</a>
          <a href="#" className="block text-white py-3 border-b border-gray-700 hover:bg-gray-800">Account & Lists</a>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;