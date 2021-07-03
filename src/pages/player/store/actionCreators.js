import { getSongDetail, getSongComments } from '@/services/player';

import * as actionTypes from './constants';

const changeCurrentSong = (currentSong) =>({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

const changeShowSong = (showSong) => ({
    type: actionTypes.CHANGE_SHOW_SONG,
    showSong
})

const changeShowSongComments = (showSongComments) => ({
    type: actionTypes.CHANGE_SHOW_SONG_COMMENTS,
    showSongComments
})

export const getSongDetailAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then((res) => {
            dispatch(changeCurrentSong(res.songs[0]))
        })
    }
}

export const getShowSongDetailAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then((res) => {
            dispatch(changeShowSong(res.songs[0]))
        })
        getSongComments(ids).then((res) => {
            dispatch(changeShowSongComments(res))
        })
    }
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}