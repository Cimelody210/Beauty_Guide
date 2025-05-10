import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormatCurrencyVND from "../utils/FormatCurrencyVND";
import { getItem } from "../utils/LocalStorage";
import { USER_KEY } from "../constants/constants";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/services/${id}`)
      .then((response) => {
        if (response.data.status && response.data.data.length > 0) {
          // Lấy thông tin dịch vụ từ phần tử đầu tiên
          setService(response.data.data[0]);
          // Lấy danh sách bình luận
          const extractedComments = response.data.data.map((item) => ({
            id: item.comment_id,
            content: item.comment_content,
            user: item.user_name,
            images: item.user_images,
          }));
          setComments(extractedComments);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu chi tiết dịch vụ:", error);
        setLoading(false);
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentData = { user_id: getItem(USER_KEY).id, content: newComment };

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/services/${id}/comments`,
        commentData
      )
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment("");
      })
      .catch((error) => {
        console.error("Lỗi khi gửi bình luận:", error);
      });
  };

  if (loading) {
    return <p className="text-center">Đang tải dữ liệu...</p>;
  }

  if (!service) {
    return <p className="text-center text-danger">Không tìm thấy dịch vụ.</p>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${import.meta.env.VITE_BASE_URL}/images/services/${
              service.service_images
            }`}
            alt={service.service_name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary">{service.service_name}</h2>
          <p className="text-muted">{service.description}</p>
          <h4 className="text-warning font-weight-bold">
            {FormatCurrencyVND(service.price)} VNĐ
          </h4>
          <button className="btn btn-primary mt-3">Đặt lịch ngay</button>
        </div>
      </div>

      {/* Bình luận */}
      <div className="mt-5">
        <h4>Bình luận</h4>
        {comments && comments.length > 0 ? (
          <div className="comments-section">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="comment-item p-3 mb-2 border rounded shadow-sm"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="comment-user d-flex align-items-center">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}/images/users/${
                        comment.images ?? "default.jpg"
                      }`}
                      alt="User Avatar"
                      className="rounded-circle mx-2"
                      width="40"
                      height="40"
                    />
                    <strong>{comment.user}</strong>
                  </div>
                  {getItem(USER_KEY) ? (
                    <div>
                      <button className="btn btn-sm btn-danger mx-2">
                        Xóa
                      </button>
                      <button className="btn btn-sm btn-primary mx-2">
                        Trả lời
                      </button>
                    </div>
                    
                  ) : null}
                </div>
                <p className="mt-2 mb-0 text-muted">{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">Chưa có bình luận nào.</p>
        )}

        {/* Form nhập bình luận */}
        <form onSubmit={handleCommentSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Nhập bình luận của bạn..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Gửi bình luận
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetail;
