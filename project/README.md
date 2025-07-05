# Amazon-Style E-commerce App with Location Tracking

A full-stack React application that replicates Amazon's design with integrated location tracking functionality using an in-memory database.

## Features

- **Authentic Amazon Design**: Responsive layout with header, search functionality, and product cards
- **Location Tracking**: Captures and stores user geolocation data when claiming gift cards
- **In-Memory Database**: Stores location data in memory for WebContainer compatibility
- **RESTful API**: Express.js backend with proper error handling
- **Mobile Responsive**: Works seamlessly across all device sizes

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express.js, Mock Database (In-Memory)
- **Database**: Mock Database for WebContainer compatibility
- **Development**: Vite, Nodemon, Concurrently

## Getting Started

### Prerequisites

- Node.js (v16 or higher)

### Installation

1. **Clone and setup the project:**
   ```bash
   npm install
   ```

2. **Start the development servers:**
   ```bash
   npm run dev
   ```

   This will start both the React frontend (port 5173) and Express backend (port 3000).

### Environment Variables

Create a `.env` file in the root directory (optional for WebContainer):

```env
PORT=3000
```

## API Endpoints

### POST /api/save-location
Saves user location data to the in-memory database.

**Request Body:**
```json
{
  "latitude": 40.7128,
  "longitude": -74.0060,
  "timestamp": "2025-01-15T12:00:00Z",
  "address": {
    "city": "New York",
    "country": "United States",
    "postcode": "10001"
  }
}
```

### GET /api/locations
Retrieves all saved locations with pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

### GET /api/location-stats
Returns location statistics including country distribution and recent locations.

## Database Schema

### Location Collection (In-Memory)
```javascript
{
  _id: String,             // Auto-generated timestamp ID
  latitude: Number,        // -90 to 90
  longitude: Number,       // -180 to 180
  timestamp: Date,         // When location was captured
  address: {
    city: String,
    country: String,
    postcode: String,
    state: String,
    road: String,
    house_number: String
  },
  userAgent: String,       // Browser information
  ipAddress: String,       // User's IP address
  sessionId: String,       // Session identifier
  createdAt: Date,         // Auto-generated
  updatedAt: Date          // Auto-generated
}
```

## Features in Detail

### Location Tracking
- Uses browser's Geolocation API
- Reverse geocoding with OpenStreetMap Nominatim API
- Stores comprehensive location data in memory
- Handles geolocation errors gracefully

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Collapsible mobile menu
- Adaptive search bar and navigation
- Optimized for all screen sizes

### Error Handling
- Comprehensive error handling for API calls
- User-friendly error messages
- Graceful degradation for unsupported features

## Development

### Running Individual Services

**Frontend only:**
```bash
npm run client
```

**Backend only:**
```bash
npm run server
```

### Building for Production

```bash
npm run build
```

## WebContainer Compatibility

This application uses an in-memory mock database instead of MongoDB to ensure compatibility with WebContainer environments. The mock database provides the same API as MongoDB but stores data in memory, which means:

- Data persists only during the current session
- No external database setup required
- Perfect for development and demonstration purposes
- All API endpoints work exactly the same

## Security Considerations

- User location data is stored securely in memory
- No sensitive information is exposed in client-side code
- Proper error handling prevents information leakage
- IP address and user agent logging for security monitoring

## License

This project is for educational purposes only. Amazon's design elements are used for demonstration purposes.