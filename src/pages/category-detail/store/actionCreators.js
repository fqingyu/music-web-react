import { getDjRadios, getDjRadioRecommend } from '@/services/djradio';

import * as actionTypes from './constants';

const changeRadioRankingAction = (radioRanking) => ({
    type: actionTypes.CHANGE_RADIO_RANKING,
    radioRanking
})

const changeGreatRadioAction = (greatRadio) => ({
    type: actionTypes.CHANGE_GREAT_RADIO,
    greatRadio
})

const changeToltalItemAction = (totalItem) => ({
    type: actionTypes.CHANGE_RANKING_TOTAL,
    totalItem
})

export const getDjRadiosAction = (cateId, limit, offset) => {
    return dispatch => {
        getDjRadios(cateId, limit, offset).then((res) => {
            dispatch(changeRadioRankingAction(res.djRadios));
            dispatch(changeToltalItemAction(res.count));
        })
    }
}

export const getDjRadioRecommendAction = (id) => {
    return dispatch => {
        getDjRadioRecommend(id).then((res) => {
            dispatch(changeGreatRadioAction(res.djRadios));
        })
    }
}
