const express = require('express');
const { getAboutUs } = require('../../../controllers/public/aboutUsController');
 const router = express.Router();
 router.get('/', getAboutUs);
 module.exports = router;