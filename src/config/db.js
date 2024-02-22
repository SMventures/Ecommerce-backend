const mongoose = require('mongoose');

const mondbUrl = "mongodb+srv://sventures815:%40S1s2s3s4@cluster0.mbtmzep.mongodb.net/test?retryWrites=true&w=majority";

const connectDb = async() => {
   return await mongoose.connect(mondbUrl);
}

module.exports = { connectDb };
