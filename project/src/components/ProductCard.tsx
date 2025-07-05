import React from 'react';

interface ProductCardProps {
  title: string;
  backgroundGradient: string;
  linkText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, backgroundGradient, linkText }) => {
  return (
    <div className="bg-white rounded p-5 shadow-sm hover:shadow-md transition-shadow duration-300 hover:transform hover:-translate-y-1">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
        <div 
          className="w-full h-70 rounded mb-4"
          style={{
            background: backgroundGradient,
            minHeight: '280px'
          }}
        />
        <p className="text-blue-600 text-sm cursor-pointer hover:text-orange-600 hover:underline">
          {linkText}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;