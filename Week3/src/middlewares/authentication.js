import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    res.locals.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export { authenticateToken };