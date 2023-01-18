  const express = require('express');
 const {editAboutUs,uploadAboutUsImage } = require('../../../controllers/admin/aboutUsController');
const { getAboutUs } = require('../../../controllers/public/aboutUsController');
 const router = express.Router();
 router.get('/', getAboutUs);
 router.patch('/', editAboutUs);
 router.post("/upload-image/:id",uploadAboutUsImage)
 module.exports = router; 