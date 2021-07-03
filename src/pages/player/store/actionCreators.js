import { getSongDetail, getSongComments, getSongLyric } from '@/services/player';
import { parseLyric } from '@/utils/parse-lyric';

import * as actionTypes from './constants';

const changeCurrentSong = (currentSong) => ({
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

const changeShowSongLyric = (showSongLyric) => ({
    type: actionTypes.CHANGE_SHOW_SONG_LYRIC,
    showSongLyric
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
        getSongLyric(ids).then((res) => {
            const lyric = parseLyric(res.lrc.lyric);
            let translateLyric = {};
            if(res.tlyric.lyric) {
                translateLyric = parseLyric(res.tlyric.lyric)
            }
            dispatch(changeShowSongLyric({...res, lyric, translateLyric}))
        })
    }
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}