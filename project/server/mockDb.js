// Mock database implementation for WebContainer environment
class MockDatabase {
  constructor() {
    this.locations = [];
    this.connected = false;
  }

  connect() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.connected = true;
        console.log('✅ Connected to Mock Database successfully');
        resolve();
      }, 100);
    });
  }

  async saveLocation(locationData) {
    if (!this.connected) {
      throw new Error('Database not connected');
    }

    const newLocation = {
      _id: Date.now().toString(),
      ...locationData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.locations.push(newLocation);
    return newLocation;
  }

  async findLocations(options = {}) {
    if (!this.connected) {
      throw new Error('Database not connected');
    }

    const { page = 1, limit = 10, sort = { timestamp: -1 } } = options;
    const skip = (page - 1) * limit;

    // Sort locations by timestamp (newest first)
    const sortedLocations = [...this.locations].sort((a, b) => {
      if (sort.timestamp === -1) {
        return new Date(b.timestamp) - new Date(a.timestamp);
      }
      return new Date(a.timestamp) - new Date(b.timestamp);
    });

    const paginatedLocations = sortedLocations.slice(skip, skip + limit);

    return {
      locations: paginatedLocations,
      total: this.locations.length
    };
  }

  async getLocationStats() {
    if (!this.connected) {
      throw new Error('Database not connected');
    }

    // Group by country
    const countryStats = {};
    this.locations.forEach(location => {
      const country = location.address?.country || 'Unknown';
      if (!countryStats[country]) {
        countryStats[country] = {
          _id: country,
          count: 0,
          cities: new Set()
        };
      }
      countryStats[country].count++;
      if (location.address?.city) {
        countryStats[country].cities.add(location.address.city);
      }
    });

    // Convert to array and sort by count
    const statsArray = Object.values(countryStats)
      .map(stat => ({
        ...stat,
        cities: Array.from(stat.cities)
      }))
      .sort((a, b) => b.count - a.count);

    // Get recent locations
    const recentLocations = [...this.locations]
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 5)
      .map(location => ({
        address: location.address,
        timestamp: location.timestamp
      }));

    return {
      totalLocations: this.locations.length,
      countryStats: statsArray,
      recentLocations
    };
  }

  async countDocuments() {
    if (!this.connected) {
      throw new Error('Database not connected');
    }
    return this.locations.length;
  }
}

// Create singleton instance
const mockDb = new MockDatabase();

export default mockDb;