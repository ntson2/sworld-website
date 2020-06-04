const produceIconRed = process.env.PUBLIC_URL + '/icon/sw-produce-red.svg';
const produceIconWhite = process.env.PUBLIC_URL + '/icon/sw-produce-white.svg';
const publishingWhite = process.env.PUBLIC_URL + '/icon/sw-publishing-white.svg';
const publishingRed = process.env.PUBLIC_URL + '/icon/sw-publishing-red.svg';
const connectWhite = process.env.PUBLIC_URL + '/icon/sw-connect-white.svg';
const connectRed = process.env.PUBLIC_URL + '/icon/sw-connect-red.svg';
const eventWhite = process.env.PUBLIC_URL + '/icon/sw-event-white.svg';
const eventRed = process.env.PUBLIC_URL + '/icon/sw-event-red.svg';


const ServicesList = [
    {
        _name: 'Produce',
        _decs: [
            `Liên kết với báo điện tử nhằm thực hiện các format mới`,   
            `Xây dựng đa kênh trên các nền tảng đa phương tiện`
        ],
        _icon: [produceIconRed, produceIconWhite],
    },
    {
        _name: 'Connective and Release',
        _decs: [
            `Hợp tác sản xuất và phát hành các sản phẩm truyền hình`,
            `Hợp tác sản xuất và phát hành các sản phẩm báo chí`,
            `Phát hành đa nền tảng`
        ],
        _icon: [publishingRed, publishingWhite],
    },
    {
        _name: 'International Connection',
        _decs: [
            `Kết nối các công ty, đơn vị, cá nhân nước ngoài muốn đến Việt Nam đầu tư, khám phá, tổ chức sự kiện`
        ],
        _icon: [connectRed, connectWhite]
    },
    {
        _name: 'Event',
        _decs: [
            `Kết nối các công ty, đơn vị, cá nhân nước ngoài muốn đến Việt Nam đầu tư, khám phá, tổ chức sự kiện`
        ],
        _icon: [eventRed, eventWhite]
    }
]

export default ServicesList;