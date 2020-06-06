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