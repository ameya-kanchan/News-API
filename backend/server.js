const express = require('express');
const cors = require('cors');
const NewsAPI = require('newsapi');

// Use your own NewsAPI key
const NodeCache = require('node-cache');
const newsapi = new NewsAPI('322cecbab18143e6b13e9825843e1dc0');
const app = express();

app.use(cors()); // Enabled CORS for all routes

// Initialize cache with a 1-hour Time-To-Live (TTL)
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

// Endpoint to get top headlines
app.get('/api/news', (req, res) => {

  const cacheKey = 'topHeadlines'; // Unique key for caching

  // Check if data is already in cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log('Serving cached data');
    return res.json(cachedData); // Serve cached data if available
  }

 // If no cache found, fetch fresh data from NewsAPI
  newsapi.v2.topHeadlines({
   country: 'us', // Fetch headlines only from the US
   pageSize: 5, // Limit the number of articles to 5
  }).then(response => {
    if (response.status === 'ok') {
      cache.set(cacheKey, response.articles); // Cache the response data
      console.log('Fetching new data and caching it');
      res.json(response.articles);
    } else {
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  }).catch(error => {
    res.status(500).json({ error: 'Failed to fetch news' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
