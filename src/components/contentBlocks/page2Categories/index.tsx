import "./index.css";

const Page2Categories = () => {
  const categories = [
    {
      img: "../image/page2_categories_icon-head.svg",
      title: "Cảm hứng",
      description:
        "Mỗi sản phẩm, chiến dịch của Indigo đều được xây dựng dựa theo những nguồn cảm hứng rất đỗi bình dị trong cuộc sống. Với Indigo, đó là nơi bắt nguồn của những điều mới mẻ và kết nối những tâm hồn đồng điệu nhưng vẫn mang cá tính riêng biệt.",
    },
    {
      img: "../image/page2_categories_icon-square.svg",
      title: "Trách nhiệm",
      description:
        "Indigo mong muốn tạo ra dấu ấn mạnh mẽ cho Ô Long đặc sản khi sát cánh cùng người nông dân và đề cao sự phát triển bền vững của nguồn nguyên liệu. Bởi chúng tôi tin rằng đây sẽ là bước đệm vững chắc giúp Indigo giới thiệu rộng rãi đặc sản của người Việt tới cộng đồng và vươn ra thế giới.",
    },
    {
      img: "../image/page2_categories_icon-medical_bag.svg",
      title: "Thủ công ",
      description:
        "Tại Indigo, sự tâm huyết, tỉ mỉ và tinh tế được thể hiện qua từng sản phẩm. Những lá trà Ô long được thu hoạch và sơ chế thủ công, kết hợp cùng việc nghiên cứu và sáng tạo, Indigo đã làm nên những sản phẩm mang hương vị nguyên bản và chân thật nhất.",
    },
    {
      img: "../image/page2_categories_icon-book.svg",
      title: "Quan tâm",
      description:
        "Tối ưu trải nghiệm của từng khách hàng là tiêu chí hàng đầu của Indigo. Đó cũng là lý do mọi dịch vụ, sản phẩm của Indigo luôn xoay quanh yếu tố con người. Indigo tin rằng, khách hàng - hay rộng hơn là cộng đồng sẽ luôn sát cánh cùng thương hiệu và lan tỏa những giá trị tốt đẹp đến xã hội..",
    },
  ];

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="text-center mx-auto" style={{ maxWidth: "805px" }}>
        <h4 className="text-success">CATEGORIES</h4>
        <h2>Về Indigo</h2>
        <p>
        Indigo luôn trân quý, nâng niu những giá trị Nguyên Bản ở mỗi vùng đất mà chúng tôi đi qua, nơi tâm hồn được đồng điệu với thiên nhiên, với nỗi vất vả nhọc nhằn của người nông dân; cảm nhận được hết thảy những tầng hương ẩn sâu trong từng nguyên liệu.
		Một chặng đường dài đang chờ phía trước,  Indigo đã sẵn sàng viết tiếp câu chuyện Nốt Hương Đặc Sản – Nguyên Bản – Thủ Công đầy cảm hứng và càng tự hào hơn khi được mang sứ mệnh: “Đánh thức những nốt hương đặc sản của nông sản Việt Nam”.
        </p>
      </div>
      <div className="p-0">
        <div className="row d-flex justify-content-between">
          {categories.map(({ img, title, description }, index) => (
            <div className="col-lg-6 col-md-12" key={index}>
              {" "}
              <div className="d-flex item mt-5">
                <img src={img} className="categories-main__part__logo" />
                <div style={{ marginLeft: "2%" }}>
                  <div className="categories-title mt-2">{title}</div>
                  <p className="my-2">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2Categories;
