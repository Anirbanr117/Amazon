import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import locationRoutes from './routes/locationRoutes.js';
import mockDb from './mockDb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Database Connection (for WebContainer environment)
mockDb.connect()
  .then(() => {
    console.log('🚀 Mock database initialized for WebContainer environment');
  })
  .catch((error) => {
    console.error('❌ Mock database initialization error:', error);
  });

// Routes
app.use('/api', locationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    database: 'Mock Database (WebContainer)',
    timestamp: new Date().toISOString() 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('📝 Using mock database for WebContainer compatibility');
});