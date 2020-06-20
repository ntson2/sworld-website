import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
    // we init with resources
    resources: {
        en: {
            translations: {
                home_tab: "Home",
                products_tab: "Products",
                forum_tab: "Media Community",
                about_tab: "About Us",
                contact_tab: "Contact",
                learn_more_text: "Learn more",
                production_text: "Media production",
                production_detail: "Media production",
                partnership_text: "Partnership",
                partnership_detail: "Partnership",
                international_connection_text: "International Connections",
                international_connection_detail: "International Connections",
                events_text: "Events",
                events_detail: "Events",
                about_us_title: "About Us",
                our_advisors_title: "Our Advisors",
                our_partner: 'Our partner',
                our_member: 'About us',
                our_services: 'Our services',
                our_services_sologan: 'We work with you, not for you',
                sw_founder: `S-World Multimedia Founder & CEO`,
                sw_founder_name: `Dang Soan`,
                sw_inspirational_advisor: `Inspirational Advisor`,
                sw_communication_advisor: `Communication Advisor`,
                sw_organizational_advisor: `Organizational advisor`,
                sw_entrepreneurial_advisor: `Entrepreneurial advisor`,
                sw_our_story_label: `Our Story`,
                sw_our_story_sub_label: `Why we here, here we are`,
                sw_freddy_carrier: `Organizational advisor`,
                sw_vy_le_carier: `Director of ESP Capital`,
                sw_vy_le_decs: `Vy is currently the General Partner of ESP Capital, an early stage venture fund
                with the mission to support tech startups in Vietnam and Southeast Asia. ESP aims to
                invest in companies that have potential to create profound impact, improve life quality and
                effectively utilize technological innovations to disrupt the market, with the goal of becoming the a next unicorn in Asia.
                Vy has developed her interest in Information Technology since a young age. At the age of 13, she founded TmSpeed Network,
                specialized in web designing and hosting trading. Her passion for entrepreneurship has empowered her to become
                an energetic businesswoman, who is highly committed to excellence and innovation. In 2009, Vy founded Chon.vn and
                served as CEO, developing the site into one of the most popular fashion e-commerce platform in
                Vietnam. From 2014 to 2017, she served as Managing Director of Adayroi.com, one of the leading e-commerce platforms in
                Vietnam that offers more than 12 product categories and generates an annual total sales of US $200+ million. 
                Vy graduated as a valedictorian from McDonough School of Business, Georgetown University in the United States.`,
                sw_nguyen_viet_duc_carier: `CEO Succulents Box`,
                sw_erik_jonsson_carier: `Strategic Initiatives Director`,
                sw_nguye_quoc_hung_carier: `CEO LogiGear Hoa Kỳ`,
                sw_gs_truong_carier: `French government's International Commerce Advisor`,
                sw_gs_phuc_carier: `CEO Metran Japan`,
                sw_don_le_carier: `Co-Founder &CEO Everest Education`,
                sw_erik_josson_carier: `Strategic Initiatives Director`,
                sw_address_label: 'Address',

                sw_founder_decs: ``,
                sw_about_us_sologan: `Sologan`,

                sw_service_production: `Producing`,
                sw_services_connect_and_publishing: `PUBLISHING`,
                sw_service_international_connect: `INTERNATIONAL RELATIONS`,
                sw_service_event: `events`,

                sw_service_production_detail_header: `We offer 3 services`,
                sw_service_production_detail_1: `TV Shows: Documentaries, narratives, reportages, reality shows, talkshows, gameshows...`,
                sw_service_production_detail_2: `Digital products: Videos for digital news outlets and social media`,
                sw_service_production_detail_3: `TVC, Viral, corporate stories, documentaries...`,

                sw_service_connect_and_publishing_detail_header: `Optimizing media products and multi-channel publication: Broadcasting - Online News - Digital`,
                sw_service_connect_and_publishing_detail_1: `Broadcasting: VTV, VTC, VOV, HTV, THVL, LA34, ANTV...`,
                sw_service_connect_and_publishing_detail_2: `Online News: Zingnews, Vnexpress, Kinh tế đô thị`,
                sw_service_connect_and_publishing_detail_3: `S-World Channel: Multichannel Facebook, Youtube, Instagram, Google Ad, LinkedIn...`,
                sw_service_connect_and_publishing_detail_4: `Out-of-home (OOH) Advertising: Airport, elevators, public transportation...`,

                sw_service_international_connect_detail_1: `Connecting foreign entities, partners, businesses that wish to come to Vietnam for investments and event hosting.`,
                sw_service_international_connect_detail_2: `Connecting Vietnamese entities, partners, businesses that wish to reach globally for investments and event hosting.`,

                sw_service_event_detail_1: `Ceremonies`,
                sw_service_event_detail_2: `Conferences`,
                sw_service_event_detail_3: `Launching`,
                sw_service_event_detail_4: `Shows/Festivals`,

                contact_name: "Name*",
                contact_phone: "Tel",
                contact_email: "Email*",
                contact_message: "Your Message*",
                contact_submit: "Submit",
                contact_submit_error: "Error submitting the form. Please try again.",
                contact_submit_success: "Your message has been sent. We will contact you shortly.",
                close_button: "Close",
                contact_title: "Send us a feedback",

                sw_our_story: `On a full moon early Summer day, S-World Multimedia was founded…

                Dear our beloved partners,
                
                The journey embarks on the letter “S” with many meanings: “S” is the shape of Vietnam, a rare country that takes the shape of a Latin letter.  Covered by the East Sea and centered in the large Pacific Ocean, S – Viet is small yet remarkable on the world map, embracing the national pride in many Vietnamese souls.
                
                S is also the consonant that begins many sentimental yet familiar words: the symbol of Lotus (hoa Sen), of the Pearl of the Orient - Saigon, of the dear mother’s breast milk (Sữa mẹ), of the idyllic countryside (Sông quê), of the precious streams of slit (Phù Sa), enabling the growth of rice paddy fields and the civilization which followed, and a vital part of Vietnam: The Paracel Islands (Hoàng Sa) and Spratly Islands (Trường Sa).
                
                S is the first letter of Skyview, where you and I can stand on the tallest ground of Vietnam with the ambition of reaching new heights. Hence, Landmark 81 is where S-World Multimedia is based.
                
                S is also the first letter of the founder’s name – Ms. Soan, a difficult yet memorable name. Soan in Vietnamese stands for a simple delicate flower that blooms in white and purple, bearing lively and inspirational qualities. Ms. Soan had the opportunity to grow from the paddy fields, travel to the metropolitan city of Saigon and was destined to “travel the world” to fully understand “the small world”. At the age of 30, she embraced her “be myself” journey and wants to send out the message: The World is small if only we connect, new values will be created once we can grow closer by connecting with each other.
                
                S-W = Vietnam and the World: It’s the journey for Vietnam to step into the world with both distinctive and common values. After many decades, though the S-shaped country has gone through many historical milestones and challenges under the rising digital age, it still persists, persevers, and takes pride in itself matching with the world, together forming new values.
                
                Embracing connecting values and creating unique new values that derived from multimedia will be the path of S-World. Not only in Vietnam, but we will also bring the Vietnamese spirit and talents to step into the world confidently.
                
                Ho Chi Minh City, June 07th, 2020 (Lunar date: April 16, 2020)
                `
            }
        },
        vn: {
            translations: {
                home_tab: "Trang chủ",
                products_tab: "Dịch vụ",
                forum_tab: "Diễn Đàn",
                about_tab: "Về Chúng Tôi",
                contact_tab: "Liên Hệ",
                learn_more_text: "Chi tiết",
                production_text: "Sản Xuất",
                production_detail: "Sản Xuất",
                partnership_text: "Liên Kết Phát Hành",
                partnership_detail: "Liên Kết Phát Hành",
                international_connection_text: "Kết Nối Quốc Tế",
                international_connection_detail: "Kết Nối Quốc Tế",
                events_text: "Sự Kiện",
                events_detail: "Sự Kiện",
                about_us_title: "Chúng Tôi Là Ai",
                about_us_content: "Một đội ngũ tuyệt vời",
                our_advisors_title: "Cố Vấn",
                our_partner: 'Đối tác',
                our_member: 'Về chúng tôi',
                our_services: 'Dịch vụ',
                our_services_sologan: 'We work with you, not for you',
                sw_founder: `Nhà sáng lập và Giám đốc điều hành S-World Multimedia`,
                sw_founder_name: `Đặng Soan`,
                sw_inspirational_advisor: `Cố vấn truyền cảm hứng`,
                sw_communication_advisor: `Cố vấn truyền thông`,
                sw_organizational_advisor: `Cố vấn quản trị`,
                sw_entrepreneurial_advisor: `Cố vấn khởi nghiệp`,
                sw_our_story_label: `Chuyện chúng tôi`,
                sw_our_story_sub_label: `Sworld chuyện chưa kể`,
                sw_freddy_carrier: `Nhà báo, phóng viên ảnh Thụy Sĩ`,
                sw_vy_le_carier: `Giám đốc quỹ ESP Capital`,
                sw_vy_le_decs: `Lê Hoàng Uyên Vy hiện là General Partner của ESP Capital,
                quỹ đầu tư mạo hiểm với sứ mệnh hỗ trợ các công ty khởi nghiệp công nghệ tại Việt Nam và Đông Nam Á.
                ESP Capital đặt mục tiêu đầu tư vào các doanh nghiệp có thể tạo ra những tác động sâu sắc trong việc
                cải thiện chất lượng cuộc sống và sử dụng hiệu quả đổi mới công nghệ để phát triển thị trường.
                Vy đã khởi nghiệp từ năm 13 tuổi. Năm 2000, cô bắt đầu thành lập TmSpeed ​​Network, công ty chuyên kinh
                doanh thiết kế website và cho thuê nơi lưu trữ (hosting). Năm 2009, cô thành lập Chon.vn và giữ vai trò CEO,
                phát triển website thành một trong những kênh mua sắm thời trang trực tuyến phổ biến nhất tại Việt Nam.
                Từ năm 2014 đến năm 2017, cô trở thành giám đốc điều hành của Adayroi.com, nền tảng thương mại điện tử của
                Vingroup với tổng giá trị giao dịch hằng năm hơn 200 triệu đô la Mỹ. Năm 2015 và 2016, cô được tôn vinh trong danh sách
                Forbes 30 under 30 của Việt Nam và Châu Á. Vy tốt nghiệp thủ khoa trường kinh doanh McDonough thuộc Đại học Georgetown,
                Hoa Kỳ.`,
                sw_nguyen_viet_duc_carier: `CEO Succulents Box`,
                sw_erik_jonsson_carier: `Giám đốc sáng kiến chiến lược`,
                sw_nguye_quoc_hung_carier: `Chủ tịch LogiGear Hoa Kỳ`,
                sw_gs_truong_carier: `Cố vấn của Chính phủ Pháp về Thương mại quốc tế`,
                sw_gs_phuc_carier: `CEO Metran Japan`,
                sw_don_le_carier: `Co-Founder &CEO Everest Education`,
                sw_erik_josson_carier: `Giám đốc sáng kiến chiến lược`,
                sw_address_label: 'Địa chỉ',
                sw_founder_decs: `Tôi sinh ra ở huyện miền núi biên giới Hương Sơn - Hà Tĩnh.
                Tuổi thơ của tôi gắn với cánh đồng. Tôi chăn trâu, cắt cỏ và gặt lúa.
                Mùa xuân hạ là lúc trăng tròn vằng vặc, gia đình tôi và nhiều `,
                sw_about_us_sologan: `Không đơn thuần chỉ là một team media`,

                sw_service_production: `SẢN XUẤT`,
                sw_services_connect_and_publishing: `LIÊN KẾT - PHÁT HÀNH`,
                sw_service_international_connect:`KẾT NỐI QUỐC TẾ`,
                sw_service_event: `SỰ KIỆN`,

                sw_service_production_detail_header: `3 sản phẩm cộng hưởng`,
                sw_service_production_detail_1: `Sản phẩm dành cho TV Show: Phim tài liệu, ký sự, phóng sự, truyền hình thực tế, Talkshow, Gamshow...`,
                sw_service_production_detail_2: `Sản phẩm dành cho Digital: Kết hợp lan toả từ Báo điện tử và mạng xã hội`,
                sw_service_production_detail_3: `Sản phẩm dành cho doanh nghiệp: TVC, Viral, phóng sự, phim tài liệu doanh nghiệp`,

                sw_service_connect_and_publishing_detail_header: `Tối ưu hoá sản phẩm và phát hành đa kênh: Truyền hình - Báo điện tử - Digital`,
                sw_service_connect_and_publishing_detail_1: `Truyền hình: VTV, VTC, VOV, HTV, THVL, LA34, ANTV...`,
                sw_service_connect_and_publishing_detail_2: `Online News: Zingnews, Vnexpress, Kinh tế đô thị`,
                sw_service_connect_and_publishing_detail_3: `S-World Channel: Multichannel Facebook, Youtube, Instagram, Google Ad, LinkedIn...`,
                sw_service_connect_and_publishing_detail_4: `Quảng cáo OOH (Out-of-home advertising): Sân bay, thang máy, phương tiện giao thông…`,

                sw_service_international_connect_detail_1: `Kết nối các công ty, các đơn vị, cá nhân nước ngoài muốn đến Việt Nam đầu tư, khám phá, tổ chức sự kiện`,
                sw_service_international_connect_detail_2: `Kết nối các công ty, các đơn vị, cá nhân Việt Nam muốn ra nước ngoài đầu tư, khám phá, tổ chức sự kiện `,

                sw_service_event_detail_1: `Hội nghị`,
                sw_service_event_detail_2: `Hội thảo`,
                sw_service_event_detail_3: `Kỷ niệm, Hội chợ`,
                sw_service_event_detail_4: `Triển lãm, Festival...`,

                contact_name: "Tên*",
                contact_phone: "Số Điện Thoại",
                contact_email: "Email*",
                contact_message: "Lời Nhắn Cho Chúng Tôi*",
                contact_submit: "Gửi",
                contact_submit_error: "Gửi bị lỗi. Xin vui lòng gửi lại.",
                contact_submit_success: "Lời nhắn của bạn đã được gửi đi. Chúng tôi sẽ liên lạc trong thời gian sớm nhất.",
                close_button: "Đóng",
                contact_title: "Để lại lời nhắn",

                sw_our_story: `Nhân một ngày trăng tròn khi đất trời giao mùa xuân hạ, S-World Multimedia được ra đời....{{ -myvar}}

                Gửi lời chào đến thế giới!
                
                Chúng tôi bắt đầu hành trình bằng chữ S nhiều ý nghĩa:
                
                Đó là dáng hình Việt Nam - một trong những quốc gia hiếm hoi được trải mình trên 1 ký tự Latin duyên dáng. Được biển Đông rộng lớn - một dòng mạch của Thái Bình Dương bao la, ôm trọn và bao bọc. S - Việt tuy nhỏ nhắn, nhưng ấn tượng trên bản đồ thế giới, đã gieo trong trái tim mỗi người dân Việt niềm tự tôn dân tộc...
                
                Chữ S còn là thanh âm của những ý nghĩa thiêng liêng mà vô cùng gần gũi: của biểu tượng hoa Sen, của hòn ngọc viễn đông "Sài Gòn", của bầu Sữa ngọt ngào nơi mẹ nhân từ, đôn hậu; của hình ảnh gần gũi bình dị Sông quê; của dòng phù Sa màu mỡ nuôi dưỡng những cánh đồng lúa bát ngát, tạo nên nền văn minh lúa nước và của một phần máu thịt không thể tách rời tổ quốc Việt Nam: Hoàng Sa và Trường Sa.
                
                S là chữ cái bắt đầu của Skyview nơi tôi và bạn có thể đứng từ đỉnh cao toà nhà Việt Nam, để nhìn ra bầu trời cao rộng, ươm những khát vọng mới. Và Landmark 81 cũng là nơi S-world Multimedia đã được thành hình.
                
                Chữ S còn là tên của người sáng lập công ty - Soan - cái tên khó đọc mà dễ nhớ. Soan là tên một loài hoa bình dị, mong manh, nhẹ nhàng nhưng ấm áp trong 1 chùm sắc trắng và tím, đầy sức sống và giàu cảm hứng.  Soan đã may mắn được đi từ những phèn lầy của ruộng lúa, rồi hoà mình vào Sài Gòn hoa lệ và có được những cơ duyên bắt đầu hành trình "vòng quanh thế giới" để cảm nhận đủ đầy ý nghĩa "trái đất tròn". Tuổi 30, với hành trình "be MySelf" - S-world mong muốn gửi đến thông điệp: trái đất rất gần nếu chúng ta kết nối, những giá trị mới sẽ đến rất gần nếu chúng ta ngồi lại cùng nhau. 
                
                2. S-W = Việt Nam và thế giới: Đó là hành trình Việt Nam bước ra thế giới với những bản sắc riêng và tiếng nói chung cộng hưởng. Sau hàng thế kỷ, đất nước hình chữ S tuy nhỏ, tuy đi lên từ tro tàn và tuy trải qua nhiều thử thách trong làn sóng công nghệ như vũ bão, nhưng luôn bền bỉ, kiên cường, tự tôn để vươn mình sát cánh cùng thế giới, kiến tạo những giá trị mới.
                
                Và S-world mong muốn nhân những giá trị kết nối, để cùng kiến tạo những giá trị mới khác biệt từ multimedia. Khát vọng lớn hơn là mang tinh thần Việt, tự tin bước ra thế giới. `
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;