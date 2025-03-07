import { connectToDatabase } from "../../lib/mongoconnect";
import User from "../../models/users"; // Import the User model

export default async function handler(req, res) {
  // Connect to MongoDB
  await connectToDatabase();
if (req.method === "GET"){
    try{
        const users = await User.find({})
        console.log("fetchedusers: ", users)
        if(!users.length){
            return res.status(404).json({message: "No users found"})
        }
        return res.status(200).json({users})
    }
    catch (error){
        return res.status(500).json({message: "error fetching users"})
    }
}

  res.status(200).json({message: "database successful"})
}