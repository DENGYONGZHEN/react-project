import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'data:image/jpeg;base64,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',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
