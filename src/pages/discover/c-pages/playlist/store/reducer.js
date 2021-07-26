import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    playlists: [],
    currentCategory: "",
    totalPages: 0,
    currentPage: 0,
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PLAYLISTS:
            return state.set("playlists", action.playlists);
        case actionTypes.CHANGE_CURRENT_CATEGORY:
            return state.set("currentCategory", action.currentCategory);
        case actionTypes.CHANGE_TOTAL_PAGES:
            return state.set("totalPages", action.totalPages);
        case actionTypes.CHANGE_CURRENT_PAGE:
            return state.set("currentPage", action.currentPage);
        default:
            return state;
    }
}

export default reducer;