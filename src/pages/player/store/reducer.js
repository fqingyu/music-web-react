import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    playList: [{
        "name": "人间会一如平常",
        "id": 1499175682,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 12023517,
                "name": "宫阁",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 9,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 98895978,
            "name": "幻日年代",
            "picUrl": "https://p2.music.126.net/mNdWse7O1lOsJ_oF_nBd_A==/109951166148946490.jpg",
            "tns": [],
            "pic_str": "109951166148946490",
            "pic": 109951166148946500
        },
        "dt": 353841,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 14156205,
            "vd": -60226
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 8493741,
            "vd": -57686
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 5662509,
            "vd": -56218
        },
        "a": null,
        "cd": "01",
        "no": 6,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 0,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "resourceState": true,
        "version": 9,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 0,
        "mv": 0,
        "rtype": 0,
        "rurl": null,
        "publishTime": 1625414400000
    },
    ],
    currentSongIndex: 0,
    currentSong: {
        "name": "人间会一如平常",
        "id": 1499175682,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 12023517,
                "name": "宫阁",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 9,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 98895978,
            "name": "幻日年代",
            "picUrl": "https://p2.music.126.net/mNdWse7O1lOsJ_oF_nBd_A==/109951166148946490.jpg",
            "tns": [],
            "pic_str": "109951166148946490",
            "pic": 109951166148946500
        },
        "dt": 353841,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 14156205,
            "vd": -60226
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 8493741,
            "vd": -57686
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 5662509,
            "vd": -56218
        },
        "a": null,
        "cd": "01",
        "no": 6,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 0,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "resourceState": true,
        "version": 9,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 0,
        "mv": 0,
        "rtype": 0,
        "rurl": null,
        "publishTime": 1625414400000
    },
    sequence: 0, // 0 循环 1 随机 2 单曲

    isPlaying: false,
    progress: 0,
    bufferedPercent: 0,
    currentTimeMS: 0
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        // 播放相关数据
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence);

        // 进度条相关数据
        case actionTypes.CHANGE_IS_PLAYING:
            return state.set("isPlaying", action.isPlaying);
        case actionTypes.CHANGE_PROGRESS:
            return state.set("progress", action.progress);
        case actionTypes.CHANGE_BUFFERED_PERCENT:
            return state.set("bufferedPercent", action.bufferedPercent);
        case actionTypes.CHANGE_CURRENT_TIME_MS:
            return state.set("currentTimeMS", action.currentTimeMS);

        default:
            return state;
    }
}

export default reducer;