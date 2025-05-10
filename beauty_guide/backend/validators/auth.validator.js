import { body } from "express-validator";
import db from "../config/connect.js";

export const validateRegister = async (req) => {
  await Promise.all([
    body("name").notEmpty().withMessage("Họ & Tên không được thiếu").run(req),
    body("email")
      .isEmail()
      .withMessage("Email không đúng định dạng")
      .custom(async (email) => {
        const [existingUser] = await db.query(
          "SELECT * FROM users WHERE email = ?",
          [email]
        );

        if (existingUser.length > 0) {
          return Promise.reject("Email đã được sử dụng");
        }
      })
      .run(req),
    body("password")
      .notEmpty()
      .withMessage("Mật khẩu không được thiếu")
      .run(req),
  ]);
};

export const validateLogin = async (req) => {
  await Promise.all([
    body("email").isEmail().withMessage("Email không đúng định dạng").run(req),
    body("password")
      .notEmpty()
      .withMessage("Mật khẩu không được thiếu")
      .run(req),
  ]);
};
