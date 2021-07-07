import { getSongDetail } from '@/services/player';

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

export const changeIsPlayingAction = (isPlaying) => ({
    type: actionTypes.CHANGE_IS_PLAYING,
    isPlaying
})

export const changePROGRESSAction = (progress) => ({
    type:actionTypes.CHANGE_PROGRESS,
    progress
})

export const changeBufferedPercentAction = (bufferedPercent) => ({
    type: actionTypes.CHANGE_BUFFERED_PERCENT,
    bufferedPercent
})


export const changeCurrentTimeMSAction = (currentTimeMS) => ({
    type: actionTypes.CHANGE_CURRENT_TIME_MS,
    currentTimeMS
})


export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 根据id查找playList中是否已经有了该歌曲
        const playList = getState().getIn(["player", "playList"]);
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

                // 更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSong(song));
            })
        }
        
    }
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}