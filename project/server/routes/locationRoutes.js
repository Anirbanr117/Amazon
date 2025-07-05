import express from 'express';
import mockDb from '../mockDb.js';

const router = express.Router();

// Save location data
router.post('/save-location', async (req, res) => {
  try {
    const { latitude, longitude, timestamp, address } = req.body;
    
    // Validate required fields
    if (!latitude || !longitude) {
      return res.status(400).json({ 
        error: 'Latitude and longitude are required' 
      });
    }

    // Create location data object
    const locationData = {
      latitude,
      longitude,
      timestamp: timestamp || new Date(),
      address: address || {},
      userAgent: req.headers['user-agent'],
      ipAddress: req.ip || req.connection.remoteAddress,
      sessionId: req.sessionID || 'anonymous'
    };

    // Save to mock database
    const savedLocation = await mockDb.saveLocation(locationData);
    
    res.status(201).json({
      message: 'Location saved successfully',
      locationId: savedLocation._id,
      timestamp: savedLocation.timestamp
    });

  } catch (error) {
    console.error('Error saving location:', error);
    res.status(500).json({ 
      error: 'Failed to save location data',
      details: error.message 
    });
  }
});

// Get all locations (for admin/debugging)
router.get('/locations', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await mockDb.findLocations({
      page,
      limit,
      sort: { timestamp: -1 }
    });

    res.json({
      locations: result.locations,
      currentPage: page,
      totalPages: Math.ceil(result.total / limit),
      totalLocations: result.total
    });

  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ 
      error: 'Failed to fetch locations',
      details: error.message 
    });
  }
});

// Get location statistics
router.get('/location-stats', async (req, res) => {
  try {
    const stats = await mockDb.getLocationStats();
    res.json(stats);

  } catch (error) {
    console.error('Error fetching location stats:', error);
    res.status(500).json({ 
      error: 'Failed to fetch location statistics',
      details: error.message 
    });
  }
});

export default router;