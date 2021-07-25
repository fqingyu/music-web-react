import * as actionTypes from './constants';
import { getTopList, getRankingList } from '@/services/ranking';

const changeTopListAction = (topList) => ({
    type: actionTypes.CHANGE_TOP_LIST,
    topList
})

const changeRankingListAction = (rankingList) => ({
    type: actionTypes.CHANGE_RANKING_LIST,
    rankingList
})

export const changeTopList = () => {
    return dispatch => {
        getTopList().then(res => {
            dispatch(changeTopListAction(res.list));
        })
    }
}

export const changeRankingList = (id) => {
    return dispatch => {
        getRankingList(id).then(res => {
            dispatch(changeRankingListAction(res.playlist));
        })
    }
}