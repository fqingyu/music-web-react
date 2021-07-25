import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
    topList: [],
    rankingList: [],
})

function reducer(state=defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_LIST:
            return state.set("topList", action.topList);
        case actionTypes.CHANGE_RANKING_LIST:
            return state.set("rankingList", action.rankingList);
        default:
            return state;
    }
}

export default reducer;