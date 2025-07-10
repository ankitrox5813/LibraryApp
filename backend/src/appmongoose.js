const {connect} = require("mongoose");

const MONGO_DB_URL = "mongodb+srv://ankitrox5813:ankit123@mern.ubcchet.mongodb.net";

const DB_NAME = "libraryapp";

const connectDB = async()=>{
    try{
        await connect(`${MONGO_DB_URL}/${DB_NAME}`);
        console.log(`Mongo Connection Successful...`);
    }catch(err){
        console.error(err);
    }
};

connectDB();

module.exports={};