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
    {
        "name": "22秒",
        "id": 1849998058,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 29235210,
                "name": "Aioz",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 3,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 128374941,
            "name": "22秒",
            "picUrl": "https://p2.music.126.net/IfFINzaq3yqFSOCiCJbauw==/109951166053751852.jpg",
            "tns": [],
            "pic_str": "109951166053751852",
            "pic": 109951166053751860
        },
        "dt": 171143,
        "h": {
            "br": 320002,
            "fid": 0,
            "size": 6847725,
            "vd": -34282
        },
        "m": {
            "br": 192002,
            "fid": 0,
            "size": 4108653,
            "vd": -31685
        },
        "l": {
            "br": 128002,
            "fid": 0,
            "size": 2739117,
            "vd": -30013
        },
        "a": null,
        "cd": "01",
        "no": 0,
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
        "version": 3,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 0,
        "mv": 0,
        "publishTime": 0
    },
    {
        "name": "挑衅的舞步",
        "id": 1858825072,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 34804565,
                "name": "张钰",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 95,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 3,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 129951878,
            "name": "挑衅的舞步",
            "picUrl": "https://p1.music.126.net/WYvug1AQ9-V4nUfki25b1g==/109951166150317477.jpg",
            "tns": [],
            "pic_str": "109951166150317477",
            "pic": 109951166150317470
        },
        "dt": 191529,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 7663325,
            "vd": -62424
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 4598013,
            "vd": -59821
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3065356,
            "vd": -58119
        },
        "a": null,
        "cd": "01",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 262144,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "resourceState": true,
        "version": 3,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 0,
        "mv": 0,
        "rtype": 0,
        "rurl": null,
        "publishTime": 0
    }
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