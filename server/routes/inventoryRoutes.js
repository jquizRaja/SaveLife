const {
  createInventoryController, getInventoryController,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const express = require("express");

const router = express.Router();

//add || create Inventory
router.post("/create-inventory", authMiddleware, createInventoryController);

//Get all Blood Records
router.get('/get-inventory',authMiddleware,getInventoryController)

module.exports = router;
