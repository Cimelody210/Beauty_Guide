import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/posts`)
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy bài đăng:", error);
      });
  }, []);

  return (
    <>
      <Header text="Bài viết" />
      <div className="container my-5">
        <h2 className="text-center text-primary mb-5">
          Bài viết hướng Dẫn Làm Đẹp
        </h2>
        <div className="row">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/images/categories/${
                      post.category_image
                    }`}
                    alt={post.title}
                    className="card-img-top img-fluid"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.excerpt}</p>
                    <Link
                      to={`/post-detail/${post.id}`}
                      className="btn btn-primary"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-100">Đang tải bài viết...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
