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
        _id: 0,
        _name: 'sw_service_production',
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
        _icon: [produceIconRed, produceIconWhite],
    },
    {
        _id: 1,
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
        _icon: [publishingRed, publishingWhite],
    },
    {
        _id: 2,
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
        _icon: [connectRed, connectWhite]
    },
    {
        _id: 3,
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
        _icon: [eventRed, eventWhite]
    }
]

export default ServicesList;