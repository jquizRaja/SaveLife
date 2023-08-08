const express = require("express");
const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
//router object

const router = express.Router();
//routes Register|| POST
router.post("/register",registerController);

//Login ||POST
router.post("/login", loginController)

//GET CURRENT USER||GET
router.get('/current-user',authMiddleware,currentUserController)

module.exports = router;
