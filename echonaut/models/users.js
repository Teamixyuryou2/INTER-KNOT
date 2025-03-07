import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  names: String,
  bio: String,
  image: String,
  profilepicture: String,
  // Add other fields based on your collection
}, {collection: 'users'});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

