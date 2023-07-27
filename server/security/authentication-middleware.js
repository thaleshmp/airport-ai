const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'somehash', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
      
      req.user = user;
      
      console.log(user);

      next();
    });
  }
  