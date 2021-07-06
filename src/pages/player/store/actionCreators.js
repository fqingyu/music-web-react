import { getSongDetail, getSongComments, getSongLyric, getRelatedSongList, getRelatedSong } from '@/services/player';
import { parseLyric } from '@/utils/parse-lyric';

import * as actionTypes from './constants';

const changeCurrentSong = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
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

const changeRelatedSong = (relatedSong) => ({
    type: actionTypes.CHANGE_RELATED_SONG,
    relatedSong
})

const changeRelatedSongList = (relatedSongList) => ({
    type: actionTypes.CHANGE_RELATED_SONG_LIST,
    relatedSongList
})

export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 根据id查找playList中是否已经有了该歌曲
        const playList = getState().getIn(["player", "playList"]);
        console.log(getState().getIn(["player", "playList"]));
        const songIndex = playList.findIndex(song => song.id === ids);

        //判断是否找到歌曲
        if (songIndex !== -1) {
            dispatch(changeCurrentSongIndexAction(songIndex));
            const song = playList[songIndex];
            dispatch(changeCurrentSong(song));
        }
        else { // 没找到歌曲
            // 请求歌曲数据
            getSongDetail(ids).then((res) => {
                const song = res.songs && res.songs[0];
                if(!song) return;
                // 将最新请求到的歌曲添加到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);
                console.log(newPlayList)

                // 更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSong(song));
            })
        }
        
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