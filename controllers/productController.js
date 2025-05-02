// controllers/productController.js
const db = require('../models/db');

// Get all featured categories
const getFeaturedCategories = (req, res) => {
  const query = 'SELECT * FROM categories';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching categories:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json({ categories: results });
  });
};


const getTrendingProducts = (req, res) => {
    const query = 'SELECT * FROM products WHERE is_trending = TRUE';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching trending products:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json({ trending: results });
    });
  };

  // Get best-selling products
const getBestSellingProducts = (req, res) => {
    const query = 'SELECT * FROM products WHERE is_best_selling = TRUE';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching best-selling products:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json({ best_sellers: results });
    });
  };
  
  // Get homepage banners
const getBanners = (req, res) => {
    const query = 'SELECT * FROM banners';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching banners:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json({ banners: results });
    });
  };
  

module.exports = { getFeaturedCategories , 
                    getTrendingProducts,
                    getBestSellingProducts,
                    getBanners};
