import { ResponseHandler } from "../utils/response_handler.js";
import { HttpStatusCodes } from "../constants/constants.js";
import { COMMON_MESSAGE } from "../constants/messages.js";
import db from "../config/connect.js";

class PostController {
  // GET /posts
  async posts(req, res) {
    try {
      const [rows] =
        await db.query(`SELECT posts.*, categories.image AS category_image 
                  FROM posts
                  JOIN categories ON posts.category_id = categories.id;
                  `);
      return ResponseHandler.responseSuccess(
        res,
        rows,
        "Lấy bài viết thành công",
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

  // GET /posts/:id
  async postDetail(req, res) {
    try {
      const { id } = req.params;
      const [rows] = await db.query(
        `SELECT posts.*, categories.image AS category_image 
         FROM posts
         JOIN categories ON posts.category_id = categories.id
         WHERE posts.id = ?`,
        [id]
      );

      if (rows.length === 0) {
        return ResponseHandler.responseError(
          res,
          "not_found",
          "Không tìm thấy bài viết",
          HttpStatusCodes.NOT_FOUND
        );
      }

      return ResponseHandler.responseSuccess(
        res,
        rows[0],
        "Lấy chi tiết bài viết thành công",
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
export default new PostController();
