const app = require(".");
const {connectDb} = require('./config/db');


const PORT = process.env.PORT || 5454; // Use environment variable or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    try{
        connectDb();
        console.log("Connected to database");

    }
    catch(error){
        console.log("Error while connecting to the database",error);
    }
});
