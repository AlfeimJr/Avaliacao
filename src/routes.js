const express = require("express");
const router = express.Router();

const authController = require("./controllers/Auth");
const mainController = require('./controllers/Main');

router.get('/home', mainController.showHome )
router.post('/home', authController.register)
router.get('/home', authController.register )


module.exports = router;