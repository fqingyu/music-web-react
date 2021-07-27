import request from './axios';

export function getSongDetail(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}

export function getSongLyric(id) {
    return request({
        url:"/lyric",
        params: {
            id
        }
    })
}

export function getPlaylist(id) {
    return request({
        url:"/playlist/detail",
        params: {
            id
        }
    })
}