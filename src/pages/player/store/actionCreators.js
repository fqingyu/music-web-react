import { getSongDetail } from '@/services/player';

import * as actionTypes from './constants';

const changeCurrentSong = (currentSong) =>({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

export const getSongDetailAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then((res) => {
            dispatch(changeCurrentSong(res.songs[0]))
        })
    }
}