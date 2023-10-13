import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.log('[SIGN_UP]', error);
    next(errorHandler(500, error.message));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let userInfo = await User.findOne({ email });
    if (!userInfo) return next(errorHandler(404, 'use not found'));
    const login = bcryptjs.compareSync(password, userInfo.password);
    if (!login) return next(errorHandler(401, 'invalid password'));
    const token = jwt.sign({ id: userInfo._id }, process.env.JWT_SECRET);
    userInfo.password = undefined;
    res.cookie('token', token, { httpOnly: true }).status(200).json(userInfo);
  } catch (error) {
    console.log('[SIGN_IN]', error);
    next(errorHandler(500, error.message));
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      user.password = undefined;
      res.cookie('token', token, { httpOnly: true }).status(200).json(user);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      newUser.password = undefined;
      res.cookie('token', token, { httpOnly: true }).status(200).json(newUser);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
