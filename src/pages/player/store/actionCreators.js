import { getSongDetail } from '@/services/player';
import { getRandom } from '@/utils/math-utils';

import * as actionTypes from './constants';

const changeCurrentSongAction = (currentSong) => ({
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

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeCurrentSong = (tag) => {
    return (dispatch, getState) => {
        const sequence = getState().getIn(["player", "sequence"]);
        const playList = getState().getIn(["player", "playList"]);
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
        switch(sequence) {
            case 1: // 随机播放
                let randomIndex = getRandom(playList.length);
                while(playList.length !== 1 && randomIndex === currentSongIndex) {
                    randomIndex = getRandom(playList.length);
                }
                currentSongIndex = randomIndex;
                break;
            default: // 顺序播放
                currentSongIndex += tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0;
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        }

        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
    }
}

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
            dispatch(changeCurrentSongAction(song));
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
                dispatch(changeCurrentSongAction(song));
            })
        }
        
    }
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}