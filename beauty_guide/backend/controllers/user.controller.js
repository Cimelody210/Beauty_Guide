import { ResponseHandler } from "../utils/response_handler.js";
import { HttpStatusCodes } from "../constants/constants.js";
import { COMMON_MESSAGE } from "../constants/messages.js";
import db from "../config/connect.js";
import {
  validateRegister,
  validateLogin,
} from "../validators/auth.validator.js";
import { validationResult } from "express-validator";
import Paginator from "../utils/Paginator.js";

class UserController {
  // POST /register
  async register(req, res) {
    await validateRegister(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ResponseHandler.responseError(
        res,
        "validation_error",
        errors.array(),
        HttpStatusCodes.BAD_REQUEST
      );
    }

    try {
      const { name, email, password } = req.body;
      await db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password]
      );

      return ResponseHandler.responseSuccess(
        res,
        null,
        "Đăng ký tài khoản thành công",
        HttpStatusCodes.OK
      );
    } catch (error) {
      return ResponseHandler.responseError(
        res,
        "server_error",
        COMMON_MESSAGE.INVALID_SERVER_ERROR,
        HttpStatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // POST /login
  async login(req, res) {
    await validateLogin(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ResponseHandler.responseError(
        res,
        "validation_error",
        errors.array(),
        HttpStatusCodes.BAD_REQUEST
      );
    }

    try {
      const { email, password } = req.body;
      const [user] = await db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password]
      );
      if (user.length === 0) {
        return ResponseHandler.responseError(
          res,
          "not_found",
          "Không tìm thấy tài khoản",
          HttpStatusCodes.UNAUTHORIZED
        );
      }

      return ResponseHandler.responseSuccess(
        res,
        user,
        "Đăng nhập thành công",
        HttpStatusCodes.OK
      );
    } catch (error) {
      return ResponseHandler.responseError(
        res,
        "server_error",
        COMMON_MESSAGE.INVALID_SERVER_ERROR,
        HttpStatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // GET /users
  async users(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      // total users
      const [[{ total }]] = await db.query(
        "SELECT COUNT(*) as total FROM users"
      );
      // total users without limit and offset
      const [users] = await db.query("SELECT * FROM users LIMIT ? OFFSET ?", [
        limit,
        offset,
      ]);

      if (users.length === 0) {
        return ResponseHandler.responseError(
          res,
          "not_found",
          "Hiện tại chưa có tài khoản nào",
          HttpStatusCodes.BAD_REQUEST
        );
      }

      // Gọi hàm Paginator
      const paginator = Paginator(page, limit, total, users);

      const data = {
        paginator,
        users,
      };

      return ResponseHandler.responseSuccess(
        res,
        data,
        "Lấy danh sách tài khoản thành công",
        HttpStatusCodes.OK
      );
    } catch (error) {
      return ResponseHandler.responseError(
        res,
        "server_error",
        COMMON_MESSAGE.INVALID_SERVER_ERROR,
        HttpStatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export default new UserController();
