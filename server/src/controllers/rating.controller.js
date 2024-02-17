const reviewService = require('../services/review.service.js');

const createRating = async (req, res) => {
  const user = req.user
 
  try {
    
    const review =await ratingService.createRating(req.body, user);
        
    return res.status(201).send(review);
  } catch (error) {
   
    return res.status(500).send({ error: error.message });
  }
};

const getAllRating = async (req, res) => {
  const productId = req.params.productId;
  const user=req.user
  try {
   
    const reviews =await ratingService.getAllRatings(productId)
    return res.status(200).send(reviews);
  } catch (error) {
    
    return res.status(500).json({ error:error.message });
  }
};

module.exports = {createRating,getAllRating}
