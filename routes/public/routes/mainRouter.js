const express = require('express');
const router = express.Router()
const { getMainpage,addOne,getStatisctics } = require('../../../controllers/public/mainControllers');
router.get("/", getMainpage)
router.post("/add-one", addOne)
router.get("/statistics", getStatisctics)

module.exports = router;