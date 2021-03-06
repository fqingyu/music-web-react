import { getSongDetail, getSongLyric, getPlaylist } from '@/services/player';
import { getRandom } from '@/utils/math-utils';
import { parseLyric } from '@/utils/parse-lyric';

import * as actionTypes from './constants';

const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

export const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

const changeLyricListAction = (lyric) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyric
})

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})

// 自动播放完毕时根据当前播放顺序决定下一首歌
export const changeCurrentIndexAndSong = (tag) => {
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

        // 请求歌词
        dispatch(getLyricAction(currentSong.id));
    }
}

// 播放列表点击时切换到对应歌曲
export const changeCurrentIndexAndSongByClick = (index) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"]);
        const currentSongIndex = index;
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));

        // 请求歌词
        dispatch(getLyricAction(currentSong.id));
    }
}

// 播放当前排行榜歌曲
export const changeRankingListSong = (playList) => {
    return dispatch => {
        const currentSong = playList[0];
        dispatch(changePlayListAction(playList));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(0));

        // 请求歌词
        dispatch(getLyricAction(currentSong.id));
    }
}

export const changePlaylists = (id) => {
    return dispatch => {
        getPlaylist(id).then(res => {
            const playList = (res.playlist && res.playlist.tracks) || [];
            if(playList) {
                const currentSong = playList[0];
                dispatch(changePlayListAction(playList));
                dispatch(changeCurrentSongAction(currentSong));
                dispatch(changeCurrentSongIndexAction(0));

                // 请求歌词
                dispatch(getLyricAction(currentSong.id));
            }
        })
    }
}

export const changeIsPlayingAction = (isPlaying) => ({
    type: actionTypes.CHANGE_IS_PLAYING,
    isPlaying
})

export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 根据id查找playList中是否已经有了该歌曲
        const playList = getState().getIn(["player", "playList"]);
        const songIndex = playList.findIndex(song => song.id === ids);

        //判断是否找到歌曲
        let song = null;
        if (songIndex !== -1) {
            dispatch(changeCurrentSongIndexAction(songIndex));
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));

            // 请求歌词
            dispatch(getLyricAction(ids))
        }
        else { // 没找到歌曲
            // 请求歌曲数据
            getSongDetail(ids).then((res) => {
                song = res.songs && res.songs[0];
                if(!song) return;
                // 将最新请求到的歌曲添加到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);

                // 更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song));
                
                // 请求该歌曲的歌词
                dispatch(getLyricAction(ids))
            })
        }

        
    }
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function getLyricAction(id) {
    return dispatch => {
        getSongLyric(id).then(res => {
            const lyric = (res.lrc && parseLyric(res.lrc.lyric)) || [];
            if(!lyric) {
                dispatch(changeLyricListAction([]));
            }
            else {
                dispatch(changeLyricListAction(lyric));
            }
            
        })
    }
}

export const changePlayListShowUpAction = (playListShowUp) => ({
    type: actionTypes.CHANGE_PLAYLIST_SHOW_UP,
    playListShowUp
})

export const changeVolumeShowUpAction = (volumeShowUp) => ({
    type: actionTypes.CHANGE_VOLUME_SHOW_UP,
    volumeShowUp
})