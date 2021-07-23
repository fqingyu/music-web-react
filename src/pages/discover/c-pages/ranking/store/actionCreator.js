import * as actionTypes from './constants';
import { getTopList } from '@/services/ranking';

const changeTopListAction = (topList) => ({
    type: actionTypes.CHANGE_TOP_LIST,
    topList
})

export const getTops = () => {
    return dispatch => {
        getTopList().then(res => {
            dispatch(changeTopListAction(res.list));
        })
    }
}