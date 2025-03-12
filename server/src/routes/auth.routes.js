const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller.js");
const verifyRefreshToken = require("../middleware/verifyRefreshToken.js");

//* Маршрут для обновления токенов доступа, требует валидный refresh токен
router.get("/refreshTokens", verifyRefreshToken, AuthController.refreshTokens);
//* Маршрут для регистрации нового пользователя
router.post("/signUp", AuthController.signUp);
//* Маршрут для входа существующего пользователя
router.post("/signIn", AuthController.signIn);
//* Маршрут для выхода пользователя из системы
router.get("/signOut", AuthController.signOut);

module.exports = router;
