import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({  
    greatRadio: [],
    radioRanking: [],

    totalItem: 0,
})

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_RADIO_RANKING:
            return state.set("radioRanking", action.radioRanking);
        case actionTypes.CHANGE_GREAT_RADIO:
            return state.set("greatRadio", action.greatRadio);
        case actionTypes.CHANGE_RANKING_TOTAL:
            return state.set("totalItem", action.totalItem);
        default:
            return state;
    }
}

export default reducer;