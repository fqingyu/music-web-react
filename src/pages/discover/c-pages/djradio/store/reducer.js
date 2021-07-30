import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    categories: [],

    songRecommend: [],
    life: [],
    emotion: [],
    cover: [],
    knowledge: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORIES:
            return state.set("categories", action.categories);
        case actionTypes.CHANGE_SONG_RECOMMEND:
            return state.set("songRecommend", action.songRecommend);
        case actionTypes.CHANGE_LIFE:
            return state.set("life", action.life);
        case actionTypes.CHANGE_EMOTION:
            return state.set("emotion", action.emotion);
        case actionTypes.CHANGE_COVER:
            return state.set("cover", action.cover);
        case actionTypes.CHANGE_KNOWLEDGE:
            return state.set("knowledge", action.knowledge);
        
        default:
            return state;
    }
}

export default reducer;