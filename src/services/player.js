import request from './axios';

export function getSongDetail(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}

export function getSongComments(id, offset = null) {
    let params = {};
    if(offset) {
        params = {
            id,
            offset
        }
    }
    else {
        params = {
            id
        }
    }
    return request({
        url: "/comment/music",
        params: params
    })
}