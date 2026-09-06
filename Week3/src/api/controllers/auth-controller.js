import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { findUserByUsername } from '../models/user-model.js';
import 'dotenv/config';

const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const userWithNoPassword = {
    user_id: user.user_id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(userWithNoPassword, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });

  res.json({ user: userWithNoPassword, token });
};

const getMe = async (req, res) => {
  if (res.locals.user) {
    res.json({ message: 'token ok', user: res.locals.user });
  } else {
    res.sendStatus(401);
  }
};

export { postLogin, getMe };