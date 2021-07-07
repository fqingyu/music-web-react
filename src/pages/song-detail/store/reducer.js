import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({  
    showSong: {},
    showSongComments: {},
    showSongLyric: {},
    relatedSong: {},
    relatedSongList: {}
})

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_SHOW_SONG:
            return state.set("showSong", action.showSong);
        case actionTypes.CHANGE_SHOW_SONG_COMMENTS:
            return state.set("showSongComments", action.showSongComments);
        case actionTypes.CHANGE_SHOW_SONG_LYRIC:
            return state.set("showSongLyric", action.showSongLyric);
        case actionTypes.CHANGE_RELATED_SONG:
            return state.set("relatedSong", action.relatedSong);
        case actionTypes.CHANGE_RELATED_SONG_LIST:
            return state.set("relatedSongList", action.relatedSongList);
        case actionTypes.CLEAN_SHOW_SONG:
            return defaultState;
        default:
            return state;
    }
}

export default reducer;