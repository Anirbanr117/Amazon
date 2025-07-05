import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import GiftCardPopup from './components/GiftCardPopup';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGiftPopupVisible, setIsGiftPopupVisible] = useState(false);

  useEffect(() => {
    // Check if popup was closed before (using localStorage)
    const popupClosed = localStorage.getItem('giftPopupClosed');
    if (!popupClosed) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsGiftPopupVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGiftPopupClose = () => {
    setIsGiftPopupVisible(false);
    localStorage.setItem('giftPopupClosed', 'true');
  };

  const productCards = [
    {
      title: "Health and Personal Care",
      backgroundGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      linkText: "See more"
    },
    {
      title: "Get your game on",
      backgroundGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      linkText: "Shop gaming"
    },
    {
      title: "New year, new you",
      backgroundGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      linkText: "See more"
    },
    {
      title: "Beauty products",
      backgroundGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      linkText: "See more"
    },
    {
      title: "Deals on Electronics",
      backgroundGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      linkText: "See more"
    },
    {
      title: "Furniture",
      backgroundGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      linkText: "See more"
    },
    {
      title: "New arrival in toys",
      backgroundGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      linkText: "See more"
    },
    {
      title: "Discover Fashion trends",
      backgroundGradient: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
      linkText: "See more"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuToggle={handleMobileMenuToggle} isMobileMenuOpen={isMobileMenuOpen} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-700 to-gray-600 py-3 mb-6">
        <div className="text-center text-white text-sm max-w-4xl mx-auto px-4">
          <p>
            You are on amazon.com. You can also shop on Amazon India for millions of
            products with fast local delivery.{' '}
            <a href="#" className="text-blue-300 hover:underline">
              Click here to go to amazon.in
            </a>
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 mb-8">
        {productCards.map((card, index) => (
          <ProductCard
            key={index}
            title={card.title}
            backgroundGradient={card.backgroundGradient}
            linkText={card.linkText}
          />
        ))}
      </div>

      <Footer />
      
      <GiftCardPopup 
        isVisible={isGiftPopupVisible} 
        onClose={handleGiftPopupClose} 
      />
    </div>
  );
};

export default App;