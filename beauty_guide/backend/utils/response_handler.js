import { HttpStatusCodes } from "../constants/constants.js";
import { COMMON_MESSAGE } from "../constants/messages.js";
export class ResponseHandler {
  /**
   * Generate success response.
   *
   * @param res Express Response object
   * @param data Response data object
   * @param message Optional success message
   * @param statusCode HTTP status code, default is 200
   * @returns Json response
   */
  static responseSuccess(
    res,
    data,
    message = COMMON_MESSAGE.SUCCESSFUL,
    statusCode = HttpStatusCodes.OK
  ) {
    const response = {
      status: true,
      message,
      errors: null,
      data,
    };
    return res.status(statusCode).json(response);
  }
  /**
   * Generate error response.
   *
   * @param res Express Response object
   * @param errors Error object or array
   * @param message Optional error message
   * @param statusCode HTTP status code, default is 400
   * @returns Json response
   */
  static responseError(
    res,
    errors,
    message = COMMON_MESSAGE.DATA_INVALID,
    statusCode = HttpStatusCodes.BAD_REQUEST
  ) {
    const response = {
      status: false,
      message,
      errors,
      data: null,
    };
    return res.status(statusCode).json(response);
  }
}
