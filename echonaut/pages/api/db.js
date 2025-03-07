import { connectToDatabase } from "../../lib/mongoconnect";
import User from "../../models/users"; // Import the User model

export default async function handler(req, res) {
  // Connect to MongoDB
  await connectToDatabase();
  res.status(200).json({message: "database successful"})

  // Query the User collection
//   try {
//     // const users = await User.find({}); // Use Mongoose model to query the collection
//     // console.log("error", users.json())
//     // res.status(200).json(users); // Send the users data as response
//     const users = await db.collection("users").find({}).toArray()
//     res.status(200).json(users)
//   } 
//   catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ error: "Errorasd as fetching users" });
//   }
}