const express=require("express")
const router=express.Router()

const OrderController=require("../controller/adminOrder.controller.js")
const authenticate = require("../middleware/authenticate.js");

router.get("/",authenticate,OrderController.getAllOrder);
router.put("/:orderId/confirmed",authenticate,OrderController.confirmedOrder);
router.put("/:orderId/ship",authenticate,OrderController.shippOrder);
router.put("/:orderId/deliver",authenticate,OrderController.deliverOrder);
router.put("/:orderId/cancel",authenticate,OrderController.cancelledOrder);
router.delete("/:orderId/delete",authenticate,OrderController.deleteOrder);

module.exports=router;