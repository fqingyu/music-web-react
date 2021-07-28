import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    playlists: [],
    currentCategory: "",
    totalItems: 0,

    catList: [],
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PLAYLISTS:
            return state.set("playlists", action.playlists);
        case actionTypes.CHANGE_CURRENT_CATEGORY:
            return state.set("currentCategory", action.currentCategory);
        case actionTypes.CHANGE_TOTAL_ITEMS:
            return state.set("totalItems", action.totalItems);
        // case actionTypes.CHANGE_CURRENT_PAGE:
        //     return state.set("currentPage", action.currentPage);
        case actionTypes.CHANGE_CAT_LIST:
            return state.set("catList", action.catList);
        default:
            return state;
    }
}

export default reducer;