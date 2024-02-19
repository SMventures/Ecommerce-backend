const orderService = require("../services/orderService.js");

const createOrder = async (req, res) => {
    const user = req.user;
    // console.log("userr ",user,req.body)
    try {
      let createdOrder = await orderService.createOrder(user, req.body);
  
      
  
      return res.status(201).send(createdOrder);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  const findOrderById = async (req, res) => {
    const user = req.user;
    // console.log("userr ",user,req.body)
    try {
      let createdOrder = await orderService.findOrderById(req.params.id);
  
      
  
      return res.status(201).send(createdOrder);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  const orderHistory = async (req, res) => {
    const user = req.user;
    // console.log("userr ",user,req.body)
    try {
      let createdOrder = await orderService.usersOrderHistory(user, req.body);
  
      
  
      return res.status(201).send(createdOrder);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
 module.exports = {
    createOrder,
    findOrderById

 }



