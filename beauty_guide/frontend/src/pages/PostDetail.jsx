import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/posts/${id}`)
      .then((response) => {
        setPost(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy bài viết chi tiết:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Đang tải bài viết...</p>;
  }

  if (!post) {
    return <p className="text-center mt-5">Không tìm thấy bài viết!</p>;
  }

  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  return (
    <>
      <Header text="Bài viết" />
      <div className="container my-5">
        <h1 className="text-center fw-bold text-primary mb-5">{post.title}</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Mở đầu bài viết */}
            <div className="mb-4">
              <p className="lead font-italic text-muted">{post.prologue}</p>
            </div>

            {/* Hình ảnh đại diện của bài viết */}
            {post.category_image && (
              <div className="text-center mb-4">
                <img
                  src={`${import.meta.env.VITE_BASE_URL}/images/categories/${
                    post.category_image
                  }`}
                  alt={post.title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            )}

            {/* Nội dung chính */}
            <div className="content mb-4">
              <p>{post.content}</p>
            </div>

            {/* Video nếu có */}
            {post.video_url && (
              <div className="embed-responsive embed-responsive-16by9 mt-4 text-center">
                <iframe
                  className="embed-responsive-item w-100"
                  src={getYoutubeEmbedUrl(post.video_url)}
                  title="Video hướng dẫn"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Kết luận */}
            <div className="mt-4 border-top pt-3">
              <p className="font-weight-bold">Kết luận:</p>
              <p>{post.conclude}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
