import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    currentSong: {},
    showSong: {},
    showSongComments: {},
    showSongLyric: {},
})

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong)
        case actionTypes.CHANGE_SHOW_SONG:
            return state.set("showSong", action.showSong)
        case actionTypes.CHANGE_SHOW_SONG_COMMENTS:
            return state.set("showSongComments", action.showSongComments)
        case actionTypes.CHANGE_SHOW_SONG_LYRIC:
            return state.set("showSongLyric", action.showSongLyric)
        default:
            return state
    }
}

export default reducer;