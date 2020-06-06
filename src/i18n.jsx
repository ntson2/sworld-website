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
                forum_tab: "Forum",
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