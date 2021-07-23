import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
    topList: [],
})

function reducer(state=defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_LIST:
            return state.set("topList", action.topList);
        default:
            return state;
    }
}

export default reducer;