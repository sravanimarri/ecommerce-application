// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getFeaturedCategories,getTrendingProducts,getBestSellingProducts,getBanners } = require('../controllers/productController');

// Route for featured categories
router.get('/featured-categories', getFeaturedCategories);
router.get('/trending-products', getTrendingProducts);
router.get('/best-selling-products', getBestSellingProducts);
router.get('/banners', getBanners);




module.exports = router;
