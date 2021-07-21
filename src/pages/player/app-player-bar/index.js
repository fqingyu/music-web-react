import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';
import default_album from '@/assets/img/default_album.jpg';
import { msToTime } from '@/utils/format-utils';
import {
    getPlaySong,
    changeSequenceAction,
    changeCurrentLyricIndexAction,
    changeCurrentIndexAndSong,
    changeIsPlayingAction,
} from '../store/actionCreators';

import CMPlayList from './c-cpns/play-list';
// import { message } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { Slider } from 'antd';

export default memo(function CMPAppPlayerBar() {
    // inner state
    const [isChanging, setIsChanging] = useState(false);
    const [progress, setProgress] = useState(0);
    const [bufferedPercent, setBufferedPercent] = useState(0);
    const [currentTimeMS, setCurrentTimeMS] = useState(0);

    // redux hook
    const {
        currentSong,
        playList,
        sequence,
        lyric,
        currentLyricIndex,
        isPlaying,
    } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        playList: state.getIn(["player", "playList"]),
        sequence: state.getIn(["player", "sequence"]),
        lyric: state.getIn(["player", "lyric"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        isPlaying: state.getIn(["player", "isPlaying"]),
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    const audioRef = useRef();

    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        if (currentSong.id) {
            audioRef.current.play().then(res => {
                dispatch(changeIsPlayingAction(true));
            }).catch(err => {
                dispatch(changeIsPlayingAction(false));
            })
            setCurrentTimeMS(0);
            setProgress(0);
            setBufferedPercent(0);
        }

        // 切歌时移除active class
        const lyrics = document.querySelectorAll('.list-lyric-wrapper .lyric');
        for (let i = 0; i < lyrics.length; i++){
            lyrics[i].classList.remove('active');   
        }

        // 切歌时移除inline style
        const lyricWrapper = document.querySelector('.list-lyric-wrapper');
        if(lyricWrapper) {
            lyricWrapper.style.removeProperty("transform");
        }
    }, [currentSong, dispatch])


    // ohter logics
    const picUrl = (currentSong.al && getSizeImage(currentSong.al.picUrl)) || default_album;
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
    const duration = currentSong.dt || 0;
    const showCurrentTime = msToTime(currentTimeMS);

    const playMusic = useCallback(() => {
        if (JSON.stringify(currentSong) !== '{}') {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
            dispatch(changeIsPlayingAction(!isPlaying))
        }
    }, [dispatch, isPlaying, currentSong])

    // audio ref用的时间是秒钟， 其他时间用的是毫秒
    const timeUpdate = useCallback((e) => {
        const currentTime = e.target.currentTime;
        if (!isChanging) {
            if (currentTimeMS !== Math.round(e.target.currentTime * 1000)) {
                setCurrentTimeMS(Math.round(e.target.currentTime * 1000));
            }
            if (progress !== Math.round(currentTimeMS / duration * 100)) {
                setProgress(Math.round(currentTimeMS / duration * 100));
            }
        }

        // preload loding bar
        if (audioRef.current.buffered) {
            const buffer = audioRef.current.buffered;
            if (bufferedPercent < 100) {
                for (let i = 0; i < buffer.length; i++) {
                    const maxBuffered = Math.round(buffer.end(i) / (duration / 1000) * 100);
                    if (bufferedPercent < maxBuffered) {
                        setBufferedPercent(maxBuffered);
                    }
                }
            }
            else {
                if (bufferedPercent !== 100) {
                    setBufferedPercent(100);
                }
            }
        }

        // 获取当前的歌词
        let i = 0;
        for (; i < lyric.length; i++) {
            let lyricItem = lyric[i];
            if (currentTime * 1000 < lyricItem.time) {
                break
            }
        }
        // console.log(i);
        if (currentLyricIndex !== i - 1) {
            dispatch(changeCurrentLyricIndexAction(i - 1));
            // const content = lyric[i - 1] && lyric[i - 1].content;
            // if (content) {
            //     message.open({
            //         key: "lyric",
            //         content: content,
            //         duration: 1000,
            //         className: "lyric-class"
            //     })
            // }
            const lyrics = document.querySelectorAll('.list-lyric-wrapper .lyric');
            for (let i = 0; i < lyrics.length; i++){
                lyrics[i].classList.remove('active');   
            }

            const currentLyric = document.querySelector(`.lyric-${i-1}`);
            if(currentLyric) {
                currentLyric.classList.add("active");
            }

            if(i - 1 >=4 && i - 1 <= lyric.length - 3) {
                const lyricItem = document.querySelector('.list-lyric-wrapper');
                lyricItem.style.transform = `translateY(${-(i-4)*32}px)`;
            }
        }
    }, [bufferedPercent, currentLyricIndex, currentTimeMS, dispatch, duration, isChanging, lyric, progress])
    const changeMusic = useCallback((tag) => {
        dispatch(changeCurrentIndexAndSong(tag));
    }, [dispatch])

    const preventDefault = useCallback((e) => {
        if (!currentSong.id) {
            e.preventDefault();
        }
    }, [currentSong.id])

    const handleMusicEnded = useCallback(() => {
        if (sequence === 2) { // 单曲循环
            audioRef.current.curentTime = 0;
            audioRef.current.play();
        }
        else {
            if (playList.length >= 2) {
                dispatch(changeCurrentIndexAndSong(1))
                setCurrentTimeMS(0);
                setProgress(0);
                setBufferedPercent(0);
            }
            else {
                audioRef.current.curentTime = 0;
                audioRef.current.play();
            }
        }
    }, [dispatch, sequence, playList.length])

    const changeSequence = useCallback(() => {
        let currentSequence = sequence + 1;
        if (currentSequence > 2) {
            currentSequence = 0;
        }
        dispatch(changeSequenceAction(currentSequence));
    }, [dispatch, sequence])

    const sliderChange = useCallback((value) => {
        setIsChanging(true);
        setProgress(Math.round(value));
        const currentTimeMS = value / 100 * duration;
        setCurrentTimeMS(currentTimeMS);
    }, [duration])

    const sliderAfterChange = useCallback((value) => {
        const currentTimeS = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTimeS;
        setCurrentTimeMS(currentTimeS * 1000);
        setIsChanging(false);
        audioRef.current.play();
        dispatch(changeIsPlayingAction(true));
    }, [duration, dispatch])

    return (
        <PlayerBarWrapper className="sprite_playbar">
            <CMPlayList />
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_playbar prev" onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_playbar play" onClick={e => playMusic()}></button>
                    <button className="sprite_playbar next" onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo bufferPercentage={bufferedPercent}>
                    <div className="image">
                        <NavLink to={`/song?id=${currentSong.id}`}  onClick={e => preventDefault(e)}>
                            <img src={picUrl} alt="song-pic" />
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <NavLink className="song-name" to={`/song?id=${currentSong.id}`} onClick={e => preventDefault(e)}>
                                <span>{currentSong.name}</span>
                            </NavLink>
                            <a href="#/" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30}
                                tooltipVisible={false}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange} />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{msToTime(duration)}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button title="画中画歌词" className="sprite_in btn in" />
                        <button title="收藏" className="sprite_playbar btn favor" />
                        <button className="sprite_playbar btn share" />
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume" />
                        <button className="sprite_playbar btn loop" onClick={e => changeSequence()} />
                        <button className="sprite_playbar btn playlist">
                            <span className="songs-count">{playList.length}</span>
                        </button>
                    </div>
                </Operator>
            </div>
            <audio className="audio" ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
                onEnded={e => handleMusicEnded()} />
        </PlayerBarWrapper>
    )
})
