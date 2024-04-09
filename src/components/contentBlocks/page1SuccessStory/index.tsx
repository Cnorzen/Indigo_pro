import "./index.css";

const SuccessStory = () => {
  const data = {
    title:
      "Đồ Rê Mi Pha Sol Indigo … Bản nhạc chill Tết viết nên bởi Hộp quà Đĩa Nhạc",
    description:
      'Câu chuyện khởi nguồn từ những thanh âm trong trẻo và bản nhạc thủ công đầy cảm hứng của Indigo. Lần này, Indigo gửi gắm tâm huyết trong chiếc đĩa nhạc mang hình ảnh xe van, tô điểm cành Mai Anh Đào đặc trưng của Đà Lạt mộng mơ, cùng chở Tết về nhà với 04 sản phẩm ',
    totalFounded: "326",
    author: {
      name: "Nguyễn Kim Dét ",
      city: "Ho Chi Minh City, Viet Nam",
    },
  };

  return (
    <div className="container success_story">
      <div className="row pb-5">
        <div className="col-lg-6 col-md-12">
          <div className="title-title">
            <h4 className="text-uppercase text-success">
              Câu chuyện thương hiệu Indigo
            </h4>
            <h2 className="mt-4 title-title">Đọc Câu chuyện cùng Indigo</h2>
            <p className="mt-4">
              Indigo luôn trân quý, nâng niu những giá trị Nguyên Bản ở mỗi
              vùng đất mà chúng tôi đi qua, nơi tâm hồn được đồng điệu với thiên
              nhiên, với nỗi vất vả nhọc nhằn của người nông dân; cảm nhận được
              hết thảy những tầng hương ẩn sâu trong từng nguyên liệu. Một chặng
              đường dài đang chờ phía trước, Indigo đã sẵn sàng viết tiếp câu
              chuyện Nốt Hương Đặc Sản – Nguyên Bản – Thủ Công đầy cảm hứng và
              càng tự hào hơn khi được mang sứ mệnh: “Đánh thức những nốt hương
              đặc sản của nông sản Việt Nam”..
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 d-flex align-items-center success_story__button-col">
          <div className="col-lg-15 col-md-12">
            <img
              src="../image/mi-pham-xtd3zYWxEs4-unsplash.jpg"
              style={{ width: "100%" }}
              alt="#"
            />
          </div>
        </div>
      </div>
      <div className="row mt-5 d-flex align-items-center">
        <div className="col-lg-6 col-md-12">
          <img
            src="../image/le-tan-OLuTnePDR14-unsplash.jpg"
            style={{ width: "100%" }}
            alt="#"
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="title-title">
            <h3 className="">{data.title}</h3>
            <p className="mt-4">{data.description}</p>
            <h2 className="mt-4 text-success success-story-founded">
              {data.totalFounded}
            </h2>
            <h5 className="mt-2">Tổng người ủng hộ quyên góp</h5>
          </div>
          <div className="mt-5">
            <div className="d-flex title">
              <div className="mx-2">
                <div>
                  <h5>{data.author.name}</h5>
                </div>
                <div className="author-city">{data.author.city}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessStory;
