import { Router } from "express";
import {
  createaccount,
  logout_user,
  user_login,
  users,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.midlleware.js";
import { jwtverify } from "../middlewares/auth.middleware.js";

const route = Router();

route.post(
  "/signup",
  upload.fields([
    {
      name: "userImg",
      maxCount: 1,
    },
  ]),
  createaccount
);

route.post("/login", user_login);

route.post("/logout", jwtverify, logout_user);

route.get("/users",users)


export default route;
