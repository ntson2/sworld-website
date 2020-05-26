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
                events_detail: "Events"
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
                events_detail: "Sự Kiện"
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