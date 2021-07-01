import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true /*공백을 없애주는 기능 */,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
