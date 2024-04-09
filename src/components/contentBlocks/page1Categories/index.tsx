import "./index.css";

const Page1Categories = () => {
  const categories = [
    {
      img: "../image/page1_categories_technology.svg",
      title: "Công Nghệ Sản Xuất",
    },
    {
      img: "../image/page1_categories_education.svg",
      title: "Kiến Thức Nguyên Liệu ",
    },
    {
      img: "../image/page1_categories_videos.svg",
      title: "Video Sản Phẩm",
    },
    {
      img: "../image/page1_categories_medical.svg",
      title: "An Toàn Thực Phẩm",
    },
    {
      img: "../image/page1_categories_fashion.svg",
      title: "Tái Chế May Mặc",
    },
    {
      img: "../image/page1_categories_design_hand.svg",
      title: "Phát Triển Sản Phẩm",
    },
  ];

  return (
    <div className="container">
      <div className="text-center mx-auto container-text">
        <h4 className="text-uppercase text-success mt-5">Danh Mục</h4>
        <h2 className="mt-4 categories-explore-title">
          Khám phá các danh mục nổi bật về nông trại Indigo của chúng
          tôi
        </h2>
        <p className="mt-4">
          Khám phá các danh mục nổi bật về huy động vốn từ cộng đồng của chúng
          tôi là một chuyến hành trình đến với những điều tuyệt vời nhất mà tình
          người có thể mang lại. Trong danh sách này, mỗi danh mục đều là một
          cánh cửa mở ra cho những trải nghiệm đầy ý nghĩa và tình cảm. Mỗi danh mục đều mang trong mình một ý nghĩa và một
          mục tiêu cao cả, và mỗi đóng góp của bạn sẽ là một bước tiến quan
          trọng trong hành trình chung của chúng ta, hướng tới một cộng đồng hòa
          bình, phát triển và nhân văn hơn.
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        {categories.map(({ img, title }, index) => (
          <section
            key={index}
            className="main_container__icon item col-lg-2 mt-5"
          >
            <figure>
              <img src={img} alt="icon" />
              <h5 className="mt-4">{title}</h5>
            </figure>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Page1Categories;
