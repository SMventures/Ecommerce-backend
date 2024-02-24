const express=require("express");
const authenticate = require("../middleware/authenticate.js");
const router=express.Router();
const orderController=require("../controllers/order.controller.js")

router.post("/",authenticate,orderController.createOrder);
router.get("/user",authenticate,orderController.usersOrderHistory);
router.get("/:id",authenticate,orderController.findOrderById);
// router.get("/", authenticate, orderController.getAllOrders);




module.exports=router; 