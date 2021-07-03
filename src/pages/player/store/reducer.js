import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    currentSong: {},
    showSong: {},
    showSongComments: {}
})

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong)
        case actionTypes.CHANGE_SHOW_SONG:
            return state.set("showSong", action.showSong)
        case actionTypes.CHANGE_SHOW_SONG_COMMENTS:
            return state.set("showSongComments", action.showSongComments)
        default:
            return state
    }
}

export default reducer;