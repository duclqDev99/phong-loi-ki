-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 04, 2024 lúc 08:27 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `book_shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `status`) VALUES
(1, 'Trinh thám', 'Truyện trinh thám', 1),
(2, 'Kinh tế', 'Sách kinh tế', 1),
(3, 'Văn học', 'Sách văn học', 1),
(4, 'Sách giáo khoa', 'Sách giáo khoa', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `id_user` bigint(20) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `total_amount` float NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'processing',
  `payment` varchar(50) NOT NULL DEFAULT 'cash',
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `id` bigint(20) NOT NULL,
  `id_order` bigint(20) NOT NULL,
  `id_product` bigint(20) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `sub_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `image` text DEFAULT NULL,
  `rating` float NOT NULL,
  `author` varchar(255) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `show_on_homepage` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `quantity`, `description`, `status`, `image`, `rating`, `author`, `category_id`, `show_on_homepage`) VALUES
(1, 'Án Mạng 11 Chữ', 120000, 100, 'Mô tả sản phẩm\nTình cờ phát hiện những điều bất thường sau cái chết thảm khốc của người yêu, nhân vật “tôi”, một nữ nhà văn viết tiểu thuyết trinh thám đã cùng bạn mình, Hagio Fuyuko, cũng là biên tập viên phụ trách sách của “tôi” quyết định điều tra về cái chết này. Trong quá trình điều tra hai người phát hiện người yêu của “tôi” đã từng gặp tai nạn lật thuyền trong chuyến du lịch đảo một năm trước. Và khi họ tìm tới những người cũng tham gia chuyến đi đó để tìm hiểu thì những người này cũng lần lượt bị sát hại. Cuối cùng “tôi” buộc phải tự mình phán đoán, điều tra để tìm ra chân tướng sự việc.\n\nÁn mạng mười một chữ cũng đã được chuyển thể thành phim truyền hình vào năm 2011.\n\nGIỚI THIỆU TÁC GIẢ:\n\nHigashino Keigo là tiểu thuyết gia trinh thám hàng đầu Nhật Bản với nhiều tác phẩm hàng triệu bản bán ra trong và ngoài nước, gặt hái vô vàn giải thưởng. Ông từng là Chủ tịch thứ 13 của Hội nhà văn Trinh thám Nhật Bản từ năm 2009 tới năm 2013.\n\nMỗi tác phẩm của ông đều có phong cách khác nhau, nhưng nhìn chung đều có diễn biến bất ngờ, khắc họa tâm lý nhân vật sâu sắc, làm nên nét riêng biệt trong chất văn của Higashino Keigo.\n\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 1, 'AnMang11Chu.jpg', 4.5, 'Higashino Keigo', 1, 1),
(2, 'Ác Ý', 10000, 100, 'Mô tả sản phẩm\r\nCông ty phát hành: IPM \r\n\r\nTác giả: Keigo Higashino\r\n\r\nNhà xuất bản: NXB Hồng Đức \r\n\r\nNăm xuất bản: 2019 \r\n\r\nSố trang: 320\r\n\r\n \r\n\r\nGiới thiệu sách:\r\n\r\n“Hàng xóm nuôi con mèo lông trắng điểm nâu. Mèo nhà mà cứ thả rông, để nó chạy sang vườn mình bứt cây đi bậy, phiền toái vô cùng, không làm sao mà chịu đựng được.”\r\n\r\n \r\n\r\nMột nhà văn có bài tùy bút đăng báo, đại ý như vậy.\r\n\r\n \r\n\r\nBáo phát hành được vài hôm thì con mèo hàng xóm chết vì trúng bả. Tình cờ là, chủ nó bắt gặp bài tùy bút. Và vấn đề là, con mèo của chị ta lông trắng điểm nâu.\r\n\r\n \r\n\r\nChiều hôm ấy, chị ta sang vườn nhà văn để tìm vết tích bả độc.\r\n\r\n \r\n\r\nTối hôm ấy, nhà văn bị giết.\r\n\r\n \r\n\r\nCó một nhân vật nổi tiếng từng tiêu diệt rất nhiều người, thậm chí phá tan cả mấy băng đảng, chỉ để báo thù cho một con chó.\r\n\r\n \r\n\r\nVậy đây, liệu có phải án mạng để báo thù cho một con mèo?\r\n\r\n \r\n\r\nTừ xuất phát điểm là vụ sát hại một nhà văn nhân cách vàng trong khu phố giàu sang, Keigo Higashino kéo tuột người đọc vào một lịch sử được viết lại bằng gian dối, một ma trận được vận hành theo nguyên tắc lấy oán trả ơn.', 1, 'AcY.jpg', 4, 'Higashino Keigo', 1, 1),
(3, 'Ảo Dạ', 20000, 100, 'Giới thiệu sách\r\n“Chúng ta không còn lựa chọn nào khác, chỉ có thể đi trên con đường ở trong bóng tối. Dẫu cho bốn phía xung quanh sáng rực như ban ngày, cũng chỉ là ánh sáng không chân thực mà thôi.”\r\n\r\nĐể thoát một khoản nợ, Masaya đã lợi dụng trận động đất kinh hoàng để giết chết ông cậu rồi dàn dựng thành một vụ tai nạn. Nhưng tất cả không qua được mắt Mifuyu, cô gái bí ẩn nhà hàng xóm. Mang theo bí mật của Masaya, Mifuyu cùng anh lên Tokyo, bỏ lại sau lưng một Kyoto hoang tàn sau cơn địa chấn.\r\n\r\nSong ở nơi đô hội là một chuỗi bi kịch nối tiếp nhau, nơi bóng đen của tội ác trong quá khứ như vũng dầu loang, vĩnh viễn không bao giờ xóa sạch, ngày một lan rộng. Bí ẩn nối liền bí ẩn, mọi người tiếp cận Mifuyu đều gặp chuyện không may, những ai chạm đến quá khứ của cô đều mất tích...\r\n\r\nRốt cuộc, cô gái bí ẩn luôn sát cánh bên Masaya trong bóng đêm tăm tối là ai?', 1, 'AoDa.jpg', 4.1, 'Higashino Keigo', 1, 0),
(4, 'Biến Thân', 210000, 100, 'Biến Thân\r\n\r\nMột thanh niên trung hậu hiền lành, hiền đến nỗi chẳng mấy khi phản đối lời người khác, không may may gặp tai bay vạ gió. Người ta đưa cậu vào bệnh viện, tiến hành một ca phẫu thuật lần đầu tiên xuất hiện trên thế giới.\r\n\r\nRa viện, thanh niên trở lại với công việc, với người yêu dịu dàng. Nhưng cậu không còn hiền lành,  trung hậu, cũng không nín nhịn nữa. Cậu trở nên hung hãn, bản năng và thú vật. Giữa những phút tỉnh táo hiếm hoi, thanh niên thống khổ đi tìm lại bản thân trước kia, bấy giờ mới biết người ta đã làm gì mình trong ca phẫu thuật…\r\n\r\nMã hàng	8935250704625\r\nTên Nhà Cung Cấp	IPM\r\nTác giả	Keigo Higashino\r\nNgười Dịch	Cẩm Hương\r\nNXB	NXB Hồng Đức\r\nNăm XB	2020\r\nNgôn Ngữ	Tiếng Việt\r\nTrọng lượng (gr)	250\r\nKích Thước Bao Bì	20.5 x 13.5 cm\r\nSố trang	384\r\nHình thức	Bìa Mềm\r\nSản phẩm hiển thị trong	\r\nIPM\r\nSản phẩm bán chạy nhất	Top 100 sản phẩm Truyện Trinh Thám - Kiếm Hiệp bán chạy của tháng\r\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\r\nChính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách Fahasa trên toàn quốc\r\nBiến Thân\r\n\r\nMột thanh niên trung hậu hiền lành, hiền đến nỗi chẳng mấy khi phản đối lời người khác, không may may gặp tai bay vạ gió. Người ta đưa cậu vào bệnh viện, tiến hành một ca phẫu thuật lần đầu tiên xuất hiện trên thế giới.\r\n\r\nRa viện, thanh niên trở lại với công việc, với người yêu dịu dàng. Nhưng cậu không còn hiền lành,  trung hậu, cũng không nín nhịn nữa. Cậu trở nên hung hãn, bản năng và thú vật. Giữa những phút tỉnh táo hiếm hoi, thanh niên thống khổ đi tìm lại bản thân trước kia, bấy giờ mới biết người ta đã làm gì mình trong ca phẫu thuật…', 1, 'BienThan.jpg', 4.6, 'Higashino Keigo', 1, 0),
(5, 'Những Kẻ Đáng Ngờ', 170000, 100, 'Những Kẻ Đáng Ngờ\r\n\r\nCuốn sách Những kẻ đáng ngờ được tạo nên từ bảy chương ngắn, đăng trên tờ Viên ngọc tiểu thuyết và Phụ lục Viên ngọc tiểu thuyết. Trừ Chương 6, tất cả các chương còn lại đều được kể với đại từ nhân xưng ngôi thứ nhất – “tôi”. Đặc biệt cuốn sách có hai truyện ngắn trong tuyển tập đã được chuyển thể trên Higashino Keigo Mystery Series (FujiTV).\r\n\r\nChương 1: Cô gái đang ngủ\r\n\r\nChương 2: Cho tôi làm lại một lần nữa\r\n\r\nChương 3: Chết rồi thì không thể làm việc nữa\r\n\r\nChương 4: Lẽ ra đã rất ngọt\r\n\r\nChương 5: Ngọn hải đăng\r\n\r\nChương 6: Thông báo kết hôn\r\n\r\nChương 7: Cơn mưa ở Costa Rica thật lạnh\r\n\r\nDù không phải những tác phẩm lớn và khiến người đọc kinh ngạc với từng tình tiết trong đó, nhưng chúng đều là những truyện ngắn xuất sắc với đoạn kết sắc bén, là tuyển tập tác phẩm chứng minh Keigo Higashino không chỉ có tài năng xuất chúng ở thể loại tiểu thuyết dài mà còn rất xuất sắc khi viết truyện ngắn.\r\n\r\nCác tác phẩm của nhà văn Keigo Higashino đã được Mintbooks phát hành:\r\n\r\n- Ngôi nhà của người cá say ngủ (2017)\r\n\r\n- Trứng chim cúc cu này thuộc về ai? (2018)\r\n\r\n- Cáp treo tình yêu (2019)\r\n\r\nMã hàng	8935325003462\r\nTên Nhà Cung Cấp	AZ Việt Nam\r\nTác giả	Keigo Higashino\r\nNgười Dịch	Vương Hải Yến\r\nNXB	NXB Văn Học\r\nNăm XB	2022\r\nNgôn Ngữ	Tiếng Việt\r\nTrọng lượng (gr)	320\r\nKích Thước Bao Bì	20.5 x 14.5 cm\r\nSố trang	300\r\nHình thức	Bìa Mềm\r\nSản phẩm hiển thị trong	\r\nAZ Việt Nam\r\nSản phẩm bán chạy nhất	Top 100 sản phẩm Tiểu thuyết bán chạy của tháng\r\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\r\nChính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách Fahasa trên toàn quốc\r\nNhững Kẻ Đáng Ngờ\r\n\r\nCuốn sách Những kẻ đáng ngờ được tạo nên từ bảy chương ngắn, đăng trên tờ Viên ngọc tiểu thuyết và Phụ lục Viên ngọc tiểu thuyết. Trừ Chương 6, tất cả các chương còn lại đều được kể với đại từ nhân xưng ngôi thứ nhất – “tôi”. Đặc biệt cuốn sách có hai truyện ngắn trong tuyển tập đã được chuyển thể trên Higashino Keigo Mystery Series (FujiTV).\r\n\r\nChương 1: Cô gái đang ngủ\r\n\r\nChương 2: Cho tôi làm lại một lần nữa\r\n\r\nChương 3: Chết rồi thì không thể làm việc nữa\r\n\r\nChương 4: Lẽ ra đã rất ngọt\r\n\r\nChương 5: Ngọn hải đăng\r\n\r\nChương 6: Thông báo kết hôn\r\n\r\nChương 7: Cơn mưa ở Costa Rica thật lạnh\r\n\r\nDù không phải những tác phẩm lớn và khiến người đọc kinh ngạc với từng tình tiết trong đó, nhưng chúng đều là những truyện ngắn xuất sắc với đoạn kết sắc bén, là tuyển tập tác phẩm chứng minh Keigo Higashino không chỉ có tài năng xuất chúng ở thể loại tiểu thuyết dài mà còn rất xuất sắc khi viết truyện ngắn.\r\n\r\nCác tác phẩm của nhà văn Keigo Higashino đã được Mintbooks phát hành:\r\n\r\n- Ngôi nhà của người cá say ngủ (2017)\r\n\r\n- Trứng chim cúc cu này thuộc về ai? (2018)\r\n\r\n- Cáp treo tình yêu (2019)', 1, 'NhungKeDangNgo.jpg', 5, 'Higashino Keigo', 1, 1),
(6, 'Nỗi Niềm Của Thám Tử Galileo', 110000, 100, 'Mô tả sản phẩm\r\nSách - Nỗi Niềm Của Thám Tử Galileo\r\n\r\n\"Tôi không tha thứ cho kẻ lấy khoa học làm công cụ giết người. Tuyệt đối không!\"\r\n\r\nMột lá thư kỳ quái được gửi đến Sở Cảnh sát Tokyo từ kẻ tự xưng \"Bàn tay của ác ma\" cảnh cáo về một vụ giết người hàng loạt, đồng thời khiêu khích đích danh phó giáo sư Yukawa Manabu của đại học Teito. Mục đích nhắm đến Yukawa của tên tội phạm là gì, cách thức giết người đáng sợ vượt qua hiểu biết thông thường là gì? Yukawa từng tuyên bố sẽ không hợp tác với cảnh sát nay lại phải đương đầu với một vụ án cận kề. Cuốn thứ tư trong series Thám tử Galileo khắc họa cuộc quyết đáu giữa tên tội phạm quỷ quyệt và nhà vật lý thiên tài ở một quy mô vượt mọi hình dung.\r\n\r\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 1, 'NoiNiemCuaThamTuGalileo.png', 5, 'Higashino Keigo', 1, 0),
(7, 'Phía Sau Nghi Can X', 300000, 100, 'Mô tả sản phẩm\r\n“Việc nghĩ ra một bài toán vô cùng khó và việc giải bài toán đó, việc nào khó hơn?”\r\n\r\nKhi nhấn chuông cửa nhà nghi can chính của một vụ án mới, điều tra viên Kusanagi không biết rằng anh sắp phải đương đầu với một thiên tài ẩn dật. Kusanagi càng không thể ngờ rằng, chỉ một câu nói vô thưởng vô phạt của anh đã kéo người bạn thân, Manabu Yukawa, một phó giáo sư vật lý tài năng, vào vụ án. Và điều làm sững sờ nhất, đó là vụ án kia chẳng qua cũng chỉ như một bài toán cấp ba đơn giản, tuy nhiên ấn số X khi được phơi bày ra lại không đem đến hạnh phúc cho bất cứ ai…\r\n\r\nVới một giọng văn tỉnh táo và dung dị, Higashino Keigo đã đem đến cho độc giả hơn cả một cuốn tiểu thuyết trinh thám. Mô tả tội ác không phải điều hấp dẫn nhất ở đây, mà còn là những giằng xé nội tâm thầm kín, những nhân vật bình dị, và sự quan tâm sâu sa tới con người. Tác phẩm đã đem lại cho Higashino Keigo Giải Naoki lần thứ 134, một giải thưởng văn học lâu đời sánh ngang giải Akutagawa tại Nhật.\r\n\r\nGiá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....', 1, 'PhiaSauNghiCanX.jpg', 4.7, 'Higashino Keigo', 1, 0),
(8, 'Vụ Án Mạng Ở Nhà Khách Núi Hakuba', 250000, 100, 'Giới thiệu sách\r\nMùa đông một năm trước, người anh trai tên Koichi đã tự sát, để lại một tấm bưu thiếp với câu hỏi: “Mẹ Maria về nhà khi nào?”\r\n\r\nNaoko, cô em gái đang là sinh viên đại học, vẫn luôn ôm mối hoài nghi về cái chết của anh trai. Cô cùng người bạn thân Makoto của mình đến thăm nhà khách “Mẹ Ngỗng” ở núi Hakuba thuộc tỉnh Nagano, nơi anh mình đã qua đời. Lạ lùng thay, nhà khách lại đón tiếp những vị khách quen thuộc hệt như một năm trước đó. Bí mật nào đang ẩn nấp sau những bài đồng dao Mẹ Ngỗng trong mỗi căn phòng? Quá khứ nào đang được giấu kín trong nhà khách?\r\n\r\nMột kiệt tác trinh thám về mật mã và phòng kín.', 1, 'VuAnMangONhaKhachHakuba.jpg', 4, 'Higashino Keigo', 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sliders`
--

INSERT INTO `sliders` (`id`, `image`) VALUES
(1, '572040a506f6a7a8fee7.jpg'),
(2, 'ada95e221871b92fe060.jpg'),
(3, '0ae14d650b36aa68f327.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL DEFAULT 'user',
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `is_admin` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `fullname`, `email`, `phone`, `is_admin`, `created_at`, `updated_at`) VALUES
(1, 'duclq', '$2b$10$B6NynPC5JHNzU1Vm5gR01eBN7dd1I2fcRbpeK4Lon4KUOg1Ox.zuu', 'user', 'dc@gmail.com', '0829445610', 1, '2024-03-07 17:55:26', '2024-03-07 17:55:26');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
