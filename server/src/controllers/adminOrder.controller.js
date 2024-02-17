const orderService = require("../services/order.service");

const getAllOrders = async (req, res) => {
    try {
      const orders = await orderService.getAllOrders(orderId);
      return res.status(200).send(orders);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
  const confirmedOrder =async (req, res) => {
    const orderId = req.params.orderId;
    try {
      
      const order = await orderService.confirmedOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).send({ error: error.message});
    }
  };
  const shippOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
      
      const order = await orderService.shipOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const deliverOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
     
      const order = await orderService.deliveredOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };  
  const cancelledOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
     
      const order = await orderService.cancelledOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }; 
  const deleteOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
     
      const order = await orderService.deleteOrder(orderId);
      return res.status(202).send(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }; 
  ViewModule.exports={
    getAllOrders,
    confirmedOrder,
    shippOrder ,
    deliverOrder,
    cancelledOrder ,
    deleteOrder



  }
  