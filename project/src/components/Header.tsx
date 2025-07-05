import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMobileMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2 h-15 flex-wrap gap-2">
        <button 
          className="lg:hidden text-white p-2"
          onClick={onMenuToggle}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        <div className="flex items-center min-w-[100px] hover:border hover:border-white hover:rounded p-2 transition-colors">
          <div className="text-white font-bold text-xl">amazon</div>
        </div>
        
        <div className="hidden lg:flex flex-col text-white min-w-[120px] hover:border hover:border-white hover:rounded p-2 transition-colors">
          <span className="text-xs text-gray-300">Deliver to</span>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="text-sm font-bold">India</span>
          </div>
        </div>

        <div className="flex items-center flex-1 min-w-[200px] max-w-[600px] h-10 mx-4 order-3 lg:order-none w-full lg:w-auto">
          <select className="bg-gray-200 border-none px-2 h-full rounded-l text-sm cursor-pointer">
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Clothing</option>
          </select>
          <input 
            type="text"
            placeholder="Search Amazon"
            className="flex-1 h-full px-3 border-none outline-none text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-orange-400 h-full w-12 flex items-center justify-center rounded-r hover:bg-orange-500 transition-colors">
            <Search size={18} />
          </button>
        </div>
        
        <div className="hidden lg:flex items-center gap-1 text-white min-w-[50px] hover:border hover:border-white hover:rounded p-2 transition-colors">
          <img 
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 15'><rect fill='%23ff9933' width='20' height='5'/><rect fill='%23fff' y='5' width='20' height='5'/><rect fill='%23138808' y='10' width='20' height='5'/></svg>" 
            alt="India Flag" 
            className="w-5 h-4"
          />
          <span className="text-sm">EN</span>
        </div>

        <div className="flex flex-col text-white min-w-[120px] hover:border hover:border-white hover:rounded p-2 transition-colors">
          <span className="text-xs text-gray-300">Hello, sign in</span>
          <span className="text-sm font-bold">Account & Lists</span>
        </div>

        <div className="flex flex-col text-white min-w-[120px] hover:border hover:border-white hover:rounded p-2 transition-colors">
          <span className="text-xs text-gray-300">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>

        <div className="flex items-center gap-1 text-white min-w-[80px] hover:border hover:border-white hover:rounded p-2 transition-colors">
          <ShoppingCart size={18} />
          <span className="text-sm font-bold">Cart</span>
        </div>
      </div>

      <div className="bg-gray-800 flex items-center px-4 h-10 text-white text-sm overflow-x-auto gap-5">
        <div className="flex items-center gap-1 font-bold whitespace-nowrap">
          <Menu size={16} />
          <span>All</span>
        </div>
        <div className="hidden lg:flex gap-5 whitespace-nowrap">
          <span className="hover:border-b hover:border-white cursor-pointer">Today's Deals</span>
          <span className="hover:border-b hover:border-white cursor-pointer">Customer Service</span>
          <span className="hover:border-b hover:border-white cursor-pointer">Registry</span>
          <span className="hover:border-b hover:border-white cursor-pointer">Gift Cards</span>
          <span className="hover:border-b hover:border-white cursor-pointer">Sell</span>
        </div>
        <div className="ml-auto font-bold text-orange-400 whitespace-nowrap">
          Shop deals in Electronics
        </div>
      </div>
    </header>
  );
};

export default Header;