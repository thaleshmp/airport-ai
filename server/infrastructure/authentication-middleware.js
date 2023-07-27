const jwt = require('jsonwebtoken');
const { UnauthorizedException } = require('../exceptions/custom-exceptions');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    throw new UnauthorizedException({ message: 'Invalid token', code: 'UNAUTHORIZED' });
  }

  jwt.verify(token, 'somehash', (err, user) => {
    if (err) {
      throw new UnauthorizedException({ message: 'Invalid token', code: 'UNAUTHORIZED' });
    }

    req.user = user;

    next();
  });
}
