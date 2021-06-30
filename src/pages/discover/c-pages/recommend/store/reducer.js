import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],

    // ranking list
    upRanking: {},
    newRanking: {},
    originalRanking: {},

    settleSingers: [],
})

function reducer(state=defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners", action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMENDS:
            return state.set("hotRecommends", action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUMS:
            return state.set("newAlbums", action.newAlbums);
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking", action.rankList);
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking", action.rankList);
        case actionTypes.CHANGE_ORIGINAL_RANKING:
            return state.set("originalRanking", action.rankList);
        case actionTypes.CHANGE_SETTLE_SINGER:
            return state.set("settleSingers", action.settleSingers)
        default:
            return state;
    }
}

export default reducer;