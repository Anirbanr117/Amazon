import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  address: {
    city: String,
    town: String,
    village: String,
    country: String,
    postcode: String,
    state: String,
    road: String,
    house_number: String
  },
  userAgent: String,
  ipAddress: String,
  sessionId: String
}, {
  timestamps: true
});

// Create indexes for better query performance
locationSchema.index({ timestamp: -1 });
locationSchema.index({ 'address.city': 1 });
locationSchema.index({ 'address.country': 1 });

const Location = mongoose.model('Location', locationSchema);

export default Location;