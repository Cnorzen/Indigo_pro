import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

// Phần Home  - 2
const WeHelpSurface = () => {
  return (
    <div className="container we_help_surface">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="d-flex align-items-center title">
            <img src="/image/page1_we_help_surface_panel.svg" alt="" />
            <h4 className="text-success mx-3">
              TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
            </h4>
          </div>
          <div className="title-title">
            <h1 className="mt-3">Nông Trại Đà Lạt</h1>
            <h3 className="mt-1">Thương Hiệu Indigo: </h3>
            <p className="mt-4">
              Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và
              hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng
              những trải nghiệm giá trị nhất khi thưởng thức, Indigo liên tục là
              thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong
              ngành trà và cà phê. Chúng tôi tin rằng từng sản phẩm trà và cà
              phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không
              ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự
              trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn
              hóa thưởng trà và cà phê ngày càng bay cao, vươn xa.
            </p>
          </div>
          <div className="d-flex row pb-5">
            <div className="col-lg-4 col-md-12 btn-center mt-2">
              <button className="mt-2 button-bg-pink-text-white">
                <div className="d-flex">
                  <div style={{ paddingRight: "15px" }}>Tìm Hiểu Thêm</div>
                  <img src="/image/page1_we_help_surface_arrow.svg" alt="" />
                </div>
              </button>
            </div>
            <div className="col-lg-8 col-md-12 d-flex btn-center">
              <button className="mt-2 button-bg-white-text-gray">
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-end">
          <div>
            <img
              src="./image/le-tan-OLuTnePDR14-unsplash.jpg"
              className="img-fluid mt-5 help-panel"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHelpSurface;
