import { getSongDetail, getSongComments, getSongLyric, getRelatedSongList, getRelatedSong } from '@/services/song-detail';
import { parseLyric } from '@/utils/parse-lyric';

import * as actionTypes from './constants';

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

const changeRelatedSong = (relatedSong) => ({
    type: actionTypes.CHANGE_RELATED_SONG,
    relatedSong
})

const changeRelatedSongList = (relatedSongList) => ({
    type: actionTypes.CHANGE_RELATED_SONG_LIST,
    relatedSongList
})

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
        getRelatedSong(ids).then((res) => {
            dispatch(changeRelatedSong(res))
        })
        getRelatedSongList(ids).then((res) => {
            dispatch(changeRelatedSongList(res))
        })
    }
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export const cleanShowSongAction = () => ({
    type: actionTypes.CLEAN_SHOW_SONG
})