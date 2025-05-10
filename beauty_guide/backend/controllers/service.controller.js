import { ResponseHandler } from "../utils/response_handler.js";
import { HttpStatusCodes } from "../constants/constants.js";
import { COMMON_MESSAGE } from "../constants/messages.js";
import db from "../config/connect.js";

class ServiceController {
  // GET /services
  async services(req, res) {
    try {
      const [rows] = await db.query("SELECT * FROM services");
      return ResponseHandler.responseSuccess(
        res,
        rows,
        "Lấy dịch vụ thành công",
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

  // GET /services/:id
  async serviceDetail(req, res) {
    try {
      const { id } = req.params;
      const [rows] = await db.query(
        `
            SELECT 
              s.id AS service_id, 
              s.name AS service_name, 
              s.price, 
              s.description,
              s.images as service_images,
              c.id AS comment_id, 
              c.content AS comment_content, 
              u.name AS user_name,
              u.images as user_images
            FROM 
                services s
            LEFT JOIN 
                comments c ON s.id = c.service_id
            LEFT JOIN 
                users u ON c.user_id = u.id
            WHERE 
                s.id = ${id};
        `,
        [id]
      );

      if (rows.length === 0) {
        return ResponseHandler.responseError(
          res,
          "not_found",
          "Không tìm thấy dịch vụ",
          HttpStatusCodes.NOT_FOUND
        );
      }

      return ResponseHandler.responseSuccess(
        res,
        rows,
        "Lấy chi tiết dịch vụ thành công",
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

  //  Create a new comment
  // POST /services/:id/comments
  async createComment(req, res) {
    try {
      const { id } = req.params;
      const { user_id, content } = req.body;

      if (!user_id || !content) {
        return ResponseHandler.responseError(
          res,
          "bad_request",
          "Vui lòng nhập đầy đủ thông tin",
          HttpStatusCodes.BAD_REQUEST
        );
      }

      const [result] = await db.query(
        "INSERT INTO comments (service_id, user_id, content) VALUES (?, ?, ?)",
        [id, user_id, content]
      );

      if (result.affectedRows === 1) {
        return ResponseHandler.responseSuccess(
          res,
          { id: result.insertId, service_id: id, user_id, content },
          "Thêm bình luận thành công",
          HttpStatusCodes.CREATED
        );
      } else {
        return ResponseHandler.responseError(
          res,
          "server_error",
          "Không thể thêm bình luận",
          HttpStatusCodes.INTERNAL_SERVER_ERROR
        );
      }
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
export default new ServiceController();
