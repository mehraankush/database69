const express = require('express');
const credentials = require('../controllers/credentials');
const router = express.Router();

router.get('/getallids', credentials.getAllIds);
router.post('/create', credentials.authorClient);
router.delete('/delete/:id', credentials.deleteCreditials);

module.exports = router;