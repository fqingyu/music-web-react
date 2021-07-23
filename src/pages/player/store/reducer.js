import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    playList: [],
    currentSongIndex: 0,
    currentSong: {},
    sequence: 0, // 0 循环 1 随机 2 单曲
    lyric: [],
    currentLyricIndex: 0,
    playListShowUp: false,
    volumeShowUp: false,

    isPlaying: false,
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
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyric", action.lyric);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.currentLyricIndex);
        case actionTypes.CHANGE_PLAYLIST_SHOW_UP:
            return state.set("playListShowUp", action.playListShowUp);
        case actionTypes.CHANGE_VOLUME_SHOW_UP:
            return state.set("volumeShowUp", action.volumeShowUp);

        // 进度条相关数据
        case actionTypes.CHANGE_IS_PLAYING:
            return state.set("isPlaying", action.isPlaying);

        default:
            return state;
    }
}

export default reducer;