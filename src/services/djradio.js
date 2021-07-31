import request from './axios';

export function getDjRadioCatelist() {
    return request({
        url: "/dj/catelist"
    })
}

export function getDjRadioRecommend(type) {
    return request({
        url: "/dj/recommend/type",
        params: {
            type
        }
    })
}

export function getDjRadios(cateId, limit=24, offset=0) {
    return request({
        url: "/dj/radio/hot",
        params: {
            cateId,
            limit,
            offset
        }
    })
}