const bucketUrl = 'https://sworldmedia-website.s3.amazonaws.com/image/Products/';

const ServicesList = [
    {
        _id: 0,
        _name: 'sw_service_production',
        _img: `${bucketUrl}sanXuat.jpg`,
        _decs: [
            {
                _id: 0,
                _text: `sw_service_production_detail_1`
            },
            {
                _id: 1,
                _text: `sw_service_production_detail_2`
            },
            {
                _id: 2,
                _text: `sw_service_production_detail_3`
            }
        ],
    },
    {
        _id: 1,
        _img: `${bucketUrl}phatHanh.jpg`,
        _name: 'sw_services_connect_and_publishing',
        _decs: [
            {
                _id: 0,
                _text: `sw_service_connect_and_publishing_detail_1`
            },
            {
                _id: 1,
                _text: `sw_service_connect_and_publishing_detail_2`
            },
            {
                _id: 2,
                _text: `sw_service_connect_and_publishing_detail_3`
            }
        ],
    },
    {
        _id: 2,
        _img: `${bucketUrl}ketNoi.jpg`,
        _name: 'sw_service_international_connect',
        _decs: [
            {
                _id: 0,
                _text: `sw_service_international_connect_detail_1`
            },
            {
                _id: 1,
                _text: `sw_service_international_connect_detail_2`
            },
        ],
    },
    {
        _id: 3,
        _img: `${bucketUrl}suKien.jpg`,
        _name: 'sw_service_event',
        _decs: [
            {
                _id: 0,
                _text: `sw_service_event_detail_1`
            },
            {
                _id: 1,
                _text: `sw_service_event_detail_2`
            },
            {
                _id: 2,
                _text: `sw_service_event_detail_3`
            },
            {
                _id: 3,
                _text: `sw_service_event_detail_4`
            },
        ],
    }
]

export default ServicesList;