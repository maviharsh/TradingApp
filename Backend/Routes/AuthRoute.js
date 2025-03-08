const { Signup,Login,Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/islogin",userVerification);
router.get("/logout",Logout);

module.exports = router;