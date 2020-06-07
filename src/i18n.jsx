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
                about_tab: "About",
                contact_tab: "Contact",
                learn_more_text: "Learn more",
                production_text: "Media production",
                production_detail: "Media production",
                partnership_text: "Partnership",
                partnership_detail: "Partnership",
                international_connection_text: "International Connection",
                international_connection_detail: "International Connection",
                events_text: "Events",
                events_detail: "Events",
                about_us_title: "About Us",
                about_us_content: "We are awesome people",
                our_partner: 'Our partner',
                our_member: 'About us',
                our_services: 'Our services',
                sw_founder: `S-World Multimedia Co-founder & CEO`,
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
                with the mission to support tech startups companies in Vietnam and Southeast Asia. ESP aims to
                invest in companies that can have potential to create profound impact to improve life quality and
                effectively utilize technological innovations to disrupt the market, with the goal of becoming the a next unicorns in Asia.
                Vy has developed her interest in Information Technology since her young age. At the age of 13, she founded TmSpeed Network,
                specialized in web designing and hosting trading. Her passion for entrepreneurship has empowered her to become
                a dynamic businesswoman, who is highly committed to excellence and innovation. In 2009, Vy founded Chon.vn and
                served as CEO, developing the website into one of the most popular online fashion shopping centers ecomerce platform in
                Vietnam. From 2014 to 2017, she served as Managing Director of Adayroi.com, one of the leading e-commerce platforms in
                Vietnam that offers more than 12 product categories and generates an annual GMV total sales of US $200+ million. 
                Vy graduated as a valedictorian from McDonough School of Business, Georgetown University in the United States.`,
                sw_nguyen_viet_duc_carier: `CEO Succulents Box`,
                sw_nguye_quoc_hung_carier: `CEO LogiGear Hoa Kỳ`,
                sw_gs_truong_carier: `French government's International Commerce Advisor`,
                sw_gs_phuc_carier: `CEO Metran Japan`,
                sw_don_le_carier: `Co-Founder &CEO Everest Education`,
                sw_address_label: 'Address',

                sw_founder_decs: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum`,
                sw_about_us_sologan: `We're more than meadia team`,
                sw_product_sologent: `WE WORK WITH YOU. NOT FOR YOU`,

                sw_service_production: `Producing`,
                sw_services_connect_and_publishing: `PUBLISHING`,
                sw_service_international_connect: `INTERNATIONAL RELATIONS`,
                sw_service_event: `events`,

                sw_service_production_detail_header: `We offer 3 services`,
                sw_service_production_detail_1: `TV Shows: Documentaries, narratives, reportages, reality shows, talkshows, gameshows...`,
                sw_service_production_detail_2: `Digital products: Videos for digital news outlets and social media`,
                sw_service_production_detail_3: `TVC, Viral, corporate stories, documentaries...`,

                sw_service_connect_and_publishing_detail_header: `Optimizing media products and omnichannel publication: Broadcasting - Online News - Digital`,
                sw_service_connect_and_publishing_detail_1: `Broadcasting: VTV, VTC, VOV, HTV, THVL, LA34, ANTV...`,
                sw_service_connect_and_publishing_detail_2: `Online News: Zingnews, Vnexpress, Kinh tế đô thị`,
                sw_service_connect_and_publishing_detail_3: `S-World Channel: multichannel Facebook, Youtube, Instagram, Google Ad, LinkedIn...`,
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
                contact_title: "Send us a feedback"
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
                our_partner: 'Đối tác',
                our_member: 'Về chúng tôi',
                out_services: 'Dịch vụ',
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
                sw_nguye_quoc_hung_carier: `Chủ tịch LogiGear Hoa Kỳ`,
                sw_gs_truong_carier: `Cố vấn của Chính phủ Pháp về Thương mại quốc tế`,
                sw_gs_phuc_carier: `CEO Metran Japan`,
                sw_don_le_carier: `Co-Founder &CEO Everest Education`,
                sw_address_label: 'Địa chỉ',
                sw_founder_decs: `Tôi sinh ra ở huyện miền núi biên giới Hương Sơn - Hà Tĩnh.
                Tuổi thơ của tôi gắn với cánh đồng. Tôi chăn trâu, cắt cỏ và gặt lúa.
                Mùa xuân hạ là lúc trăng tròn vằng vặc, gia đình tôi và nhiều `,
                sw_about_us_sologan: `Không đơn thuần chỉ là một team media`,
                sw_product_sologent: `WE WORK WITH YOU. NOT FOR YOU`,

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
                sw_service_connect_and_publishing_detail_3: `S-World Channel: multichannel Facebook, Youtube, Instagram, Google Ad, LinkedIn...`,
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
                contact_title: "Để lại lời nhắn"
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