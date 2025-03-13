require('dotenv').config();
const jwt = require('jsonwebtoken');
const formatResponse = require('../utils/formatResponse');

function verifyTokens(req, res, next) {
  let user = null;

  // Проверка access token
  if (req.headers.authorization) {
    try {
      const accessToken = req.headers.authorization.split(' ')[1];
      const decodedAccessToken = jwt.verify(accessToken, process.env.SECRET_ACCESS_TOKEN);
      user = decodedAccessToken.user;
    } catch (accessTokenError) {
      console.log('======verifyAccessToken=======>>>>>>>', accessTokenError.message);
    }
  }

  // Если access token не прошел проверку, проверяем refresh token
  if (!user && req.cookies.refreshToken) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const decodedRefreshToken = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
      user = decodedRefreshToken.user;
    } catch (refreshTokenError) {
      console.log('======verifyRefreshToken=======>>>>>>>', refreshTokenError.message);
    }
  }

  // Если ни один токен не прошел проверку, возвращаем ошибку
  if (!user) {
    return res
      .status(403)
      .clearCookie('refreshToken')
      .json(
        formatResponse(
          403,
          'Invalid tokens',
          null,
          'Neither access token nor refresh token is valid'
        )
      );
  }

  // Если хотя бы один токен прошел проверку, добавляем пользователя в res.locals и продолжаем
  res.locals.user = user;
  next();
}

module.exports = verifyTokens;