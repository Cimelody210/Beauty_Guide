import { ResponseHandler } from "../utils/response_handler.js";
import { HttpStatusCodes } from "../constants/constants.js";
import { COMMON_MESSAGE } from "../constants/messages.js";
import db from "../config/connect.js";

class DashboardController {
  // GET /dashboard
  async index(req, res) {
    try {
      const [users] = await db.query(
        `SELECT COUNT(*) AS total FROM users WHERE role = 'user'`
      );
      const [categories] = await db.query(
        `SELECT COUNT(*) AS total FROM categories`
      );
      const [posts] = await db.query(`SELECT  COUNT(*) AS total FROM posts`);

      const [comments] = await db.query(`SELECT  COUNT(*) AS total FROM comments`);

      const responseData = {
        users,
        categories,
        posts,
        comments,
      };

      return ResponseHandler.responseSuccess(
        res,
        responseData,
        "Lấy dashboard thành công",
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

export default new DashboardController();
