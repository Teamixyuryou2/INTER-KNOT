// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Replace with your DB URI
let isconnected = false


async function connectToDatabase() {
  // console.log("Entered Connect to Database function")
  // if (cached.conn) {
  //   console.log("Connected")
  //   return cached.conn;
  // }

  // if (!cached.promise) {
  //   const opts = {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   };

  //   cached.promise = mongoose
  //     .connect(MONGODB_URI, opts)
  //     .then((mongoose) => mongoose);
  // }

  // cached.conn = await cached.promise;
  // console.log("Connected")
  // return cached.conn;
  
  try{
    if(isconnected){
      console.log("Already connected to mongodb")
      return 
    }
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to database", db.connection.db.databaseName)
    isconnected = db.connections[0].readyState === 1;
    console.log("connected to mongodb", isconnected)
  }
  catch(error){
    console.error("mongodb error", error)
  }
}

export { connectToDatabase };