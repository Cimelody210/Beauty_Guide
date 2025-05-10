import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormatCurrencyVND from "../utils/FormatCurrencyVND";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/services`)
      .then((response) => {
        setServices(response.data.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, []);

  return (
    <>
      {/* <!-- Service Start --> */}
      <div className="container-fluid px-0 py-5 my-5">
        <div className="row mx-0 justify-content-center text-center">
          <div className="col-lg-6">
            <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">
              Dịch vụ của chúng tôi
            </h6>
            <h1>Spa & Dịch vụ làm đẹp</h1>
          </div>
        </div>
        <div className="row">
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                <div className="service-item position-relative">
                  <img
                    className="img-fluid"
                    src={`${import.meta.env.VITE_BASE_URL}/images/services/${
                      service.images
                    }`}
                    alt={service.name}
                  />
                  <div className="service-text text-center">
                    <h4 className="text-white font-weight-medium px-3">
                      {service.name}
                    </h4>
                    <p className="text-white px-3 mb-3">
                      {service.description}
                    </p>
                    <h5 className="text-warning font-weight-bold">
                      {FormatCurrencyVND(service.price)} VNĐ
                    </h5>
                    <div className="w-100 bg-white text-center p-4">
                      <Link
                        className="btn btn-primary"
                        to={`/service-detail/${service.id}`}
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-100">Đang tải dịch vụ...</p>
          )}
        </div>
      </div>
      {/* <!-- Service End --> */}
    </>
  );
};

export default Service;
