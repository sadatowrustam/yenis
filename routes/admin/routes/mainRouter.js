 const express = require('express');
const router = express.Router()
const { editMainpage,uploadImages } = require("../../../controllers/admin/mainControllers");
const { deleteNewsImage } = require('../../../controllers/admin/newsController');
const { getMainpage } = require('../../../controllers/public/mainControllers');
router.get("/", getMainpage)
router.patch("/", editMainpage)
router.post("/upload-image",uploadImages)
router.delete("/:id",deleteNewsImage)
module.exports = router;