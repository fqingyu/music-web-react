import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    playList:[],
    currentSongIndex: 0,
    currentSong: {},

    isPlaying: false,
    progress: 0,
    bufferedPercent: 0,
    currentTimeMS: 0
})

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index);
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