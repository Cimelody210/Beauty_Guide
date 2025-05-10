import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  {
    img: "img/testimonial-1.jpg",
    name: "Nguyễn Văn A",
    profession: "Nhân viên văn phòng",
    text: "Dịch vụ chăm sóc da ở đây thực sự tuyệt vời! Sau liệu trình, da tôi căng bóng, mịn màng hơn hẳn. Nhân viên rất tận tình và chuyên nghiệp.",
  },
  {
    img: "img/testimonial-2.jpg",
    name: "Trần Văn B",
    profession: "Doanh nhân",
    text: "Tôi đã thử nhiều spa khác nhau, nhưng đây là nơi khiến tôi hài lòng nhất. Liệu trình trẻ hóa da thực sự hiệu quả, bạn bè ai cũng khen tôi trẻ ra vài tuổi!",
  },
  {
    img: "img/testimonial-3.jpg",
    name: "Thái Thị C",
    profession: "Giáo viên",
    text: "Tôi rất thích dịch vụ phun xăm thẩm mỹ ở đây! Màu mực tự nhiên, dáng chân mày hài hòa với khuôn mặt. Không đau, không sưng, rất hài lòng!",
  },
];

const Testimonial = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 pb-5 pb-lg-0">
            <img
              className="img-fluid w-100"
              src="img/testimonial.jpg"
              alt="Testimonial"
            />
          </div>
          <div className="col-lg-6">
            <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">
              Đánh Giá
            </h6>
            <h1 className="mb-4">Khách hàng nói gì về chúng tôi!</h1>
            <OwlCarousel className="owl-theme" loop margin={10} nav items={1}>
              {testimonials.map((testimonial, index) => (
                <div className="position-relative" key={index}>
                  <i
                    className="fa fa-3x fa-quote-right text-primary position-absolute"
                    style={{ top: "-6px", right: "0" }}
                  ></i>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid rounded-circle"
                      src={testimonial.img}
                      style={{ width: "60px", height: "60px" }}
                      alt={testimonial.name}
                    />
                    <div className="ml-3">
                      <h6 className="text-uppercase">{testimonial.name}</h6>
                      <span>{testimonial.profession}</span>
                    </div>
                  </div>
                  <p className="m-0">{testimonial.text}</p>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
