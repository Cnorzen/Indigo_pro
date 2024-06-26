import Footer from "../components/Footer";
import Header from "../components/Header";
import DontMiss from "../components/contentBlocks/DontMiss";
import SyNews from "../components/contentBlocks/SyNews";
import Page1Categories from "../components/contentBlocks/page1Categories";
import TeamMember from "../components/contentBlocks/page1MeetOur";
import SuccessStory from "../components/contentBlocks/page1SuccessStory";
import WeHelpSurface from "../components/contentBlocks/page1WeHelpSurface";


export const HomePage = () => {
  // page 1

  const team = [
    {
      name: "Do Thai Binh",
      job: "Hanoi Cỉy, VietNam",
      img: "/image/robot-human-silhouettes.jpg",
      job2: " Developer",
    },
  ];

  const news = [
    {
      title:
        "Chung tay hỗ trợ sinh hoạt phí cho ba thiếu niên đặc biệt khó khăn tại Lào Cai",
      description:
        "Dù mang cái tên rất đẹp – “Núi mặt trời mọc”, xã Thải Giàng Phố (huyện Bắc Hà, tỉnh Lào Cai) vẫn đang trong “cuộc chiến” xóa đói giảm nghèo khi tỉ lệ hộ nghèo và cận nghèo của toàn xã lên tới 62,37% (Theo Cổng thông tin điện tử tỉnh Lào Cai, 2023). Với những hạn chế về vị trí, điều kiện kinh tế và hỗ trợ xã hội, xã Thải Giàng Phố vẫn còn nhiều hoàn cảnh kém may mắn đang rất cần sự quan tâm và hỗ trợ từ cộng đồng.",
      author: "Nguyen Thao Anh",
      image: "/image/huyen-pham-ZKcoColeq7U-unsplash.jpg",
      date: "4/03/2024",
    },
    {
      title: "Gây Quỹ cho Vườn Xả",
      description:
        "Vườn Xả là một không gian sinh hoạt chung, nằm tại phường Ea Tam, thành phố Buôn Ma Thuột. Là một dự án phi lợi nhuận, Vườn Xả tạo nên một nơi chốn cho người lưu trú kết nối với chính mình, với người khác và với thiên nhiên. Thực hành lắng nghe không phán xét, tinh thần thấu cảm và lòng trắc ẩn, người đến Vườn cùng tạo ra một không gian để an trú và chữa lành qua việc làm vườn, đóng đồ gỗ, nấu ăn, yoga, thiền, trò chuyện, thảo luận sách và sáng tạo nghệ thuật. Tại đây, mọi người tự xây dựng sự vững chãi, yêu thương bản thân, khả năng tha thứ cho người khác và cho bản thân. Không gian Vườn Xả giúp mọi người được an ủi, tiếp sức lực tinh thần và làm mới cho cuộc sống. Từ khi mở cửa vào tháng 4/2022 tới cuối năm 2022, Vườn Xả đã tổ chức 9 khóa học, đem lại niềm tin, hy vọng và sự bình an cho gần 200 người lưu trú. ",
      author: "Trinh Ngoc Lan",
      date: "20/04/2024",
      image: "/image/elliot-andrews-6keOhd7idJo-unsplash.jpg",
    },
    {
      title:
        "Góp gạch xây nhà tặng Cựu binh mặt trận Vị Xuyên – Nguyễn Văn Chiến",
      description:
        "Rời ghế nhà trường chàng thanh niên Nguyễn Quang Chiến nghe theo tiếng gọi của Đảng lên đường nhập ngũ tháng 8/1985. Khi chiến sự Vị xuyên đang diễn ra khốc liệt Anh được bổ xung về E876F356. Ba năm sống chiến đấu và phục vụ chiến đấu tại Thanh thủy, huyện Vị xuyên, tỉnh Hà giang, rất nhiều Đồng đội cùng trang lứa đã nằm lại mảnh đất này, Anh may mắn sống sót trở về… Trở về đời thường vùng nông thôn xã Tuy Lộc, giáp TP Yên Bái, ruộng thì ít, nghề nghiệp lại không có nên Anh chịu khó bươn chải làm đủ mọi nghề mong một ngày cuộc sống khá hơn…Nhưng Cuộc đời đối với Anh đâu có phẳng lặng, 4 năm sau khi rời quân ngũ Anh ốm đau suốt, căn bệnh thần kinh tọa đeo bám lấy Anh gần chục năm trời, nhà bố mẹ Anh rất nghèo lại đông anh em nên gia đình Anh đã khó lại càng khó thêm.",
      author: "Tran Ngoc Duc",
      date: "14/05/2024",
      image: "/image/huyen-pham-57wGYYsS0ak-unsplash.jpg",
    },
  ];

  return (
    <section>
      <Header />
      <WeHelpSurface />
      <Page1Categories />
      <TeamMember team={team} />
      <SuccessStory />
      <SyNews news={news} />
      <DontMiss />
      <Footer />
    </section>
  );
};
