import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';
import default_album from '@/assets/img/default_album.jpg';
import { msToTime } from '@/utils/format-utils';
import { getPlaySong, changeSequenceAction, changeCurrentIndexAndSong, changePROGRESSAction, changeBufferedPercentAction, changeIsPlayingAction, changeCurrentTimeMSAction } from '../store/actionCreators';

import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { Slider } from 'antd';

export default memo(function CMPAppPlayerBar() {
    // inner state
    const [isChanging, setIsChanging] = useState(false);

    // redux hook
    const { currentSong, playList, sequence, isPlaying, progress, bufferedPercent, currentTimeMS } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        playList: state.getIn(["player", "playList"]),
        sequence: state.getIn(["player", "sequence"]),
        isPlaying: state.getIn(["player", "isPlaying"]),
        progress: state.getIn(["player", "progress"]),
        bufferedPercent: state.getIn(["player", "bufferedPercent"]),
        currentTimeMS: state.getIn(["player", "currentTimeMS"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    const audioRef = useRef();

    // Initial test
    // useEffect(() => {
    //     dispatch(getSongDetailAction(1843319489));
    // }, [dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        if (currentSong.id) {
            audioRef.current.play().then(res => {
                dispatch(changeIsPlayingAction(true));
            }).catch(err => {
                dispatch(changeIsPlayingAction(false));
            })
            dispatch(changeCurrentTimeMSAction(0));
            dispatch(changePROGRESSAction(0));
            dispatch(changeBufferedPercentAction(0));
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
    const timeUpdate = (e) => {
        if (!isChanging) {
            dispatch(changeCurrentTimeMSAction(e.target.currentTime * 1000));
            dispatch(changePROGRESSAction(currentTimeMS / duration * 100));
        }

        // preload loding bar
        if (audioRef.current.buffered) {
            const buffer = audioRef.current.buffered;
            if (bufferedPercent < 100) {
                for (let i = 0; i < buffer.length; i++) {
                    if (bufferedPercent < buffer.end(i) / (duration / 1000) * 100) {
                        dispatch(changeBufferedPercentAction(buffer.end(i) / (duration / 1000) * 100))
                    }
                }
            }
            else {
                dispatch(changeBufferedPercentAction(100));
            }
        }
    }
    const changeMusic = useCallback((tag) => {
        dispatch(changeCurrentIndexAndSong(tag));
    }, [dispatch])

    const handleMusicEnded = useCallback(() => {
        if (sequence === 2) { // 单曲循环
            audioRef.current.curentTime = 0;
            audioRef.current.play();
        }
        else {
            dispatch(changeCurrentIndexAndSong(1))
            audioRef.current.play();
        }
        dispatch(changeCurrentTimeMSAction(0));
        dispatch(changePROGRESSAction(0));
        dispatch(changeBufferedPercentAction(0));
    }, [dispatch, sequence])

    const changeSequence = useCallback(() => {
        let currentSequence = sequence + 1;
        if (currentSequence > 2) {
            currentSequence = 0;
        }
        dispatch(changeSequenceAction(currentSequence));
    }, [dispatch, sequence])

    const sliderChange = useCallback((value) => {
        setIsChanging(true);
        dispatch(changePROGRESSAction(value));
        const currentTimeMS = value / 100 * duration;
        dispatch(changeCurrentTimeMSAction(currentTimeMS));
    }, [duration, dispatch])

    const sliderAfterChange = useCallback((value) => {
        const currentTimeS = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTimeS;
        dispatch(changeCurrentTimeMSAction(currentTimeS * 1000));
        setIsChanging(false);
    }, [duration, dispatch])

    return (
        <PlayerBarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_playbar prev" onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_playbar play" onClick={e => playMusic()}></button>
                    <button className="sprite_playbar next" onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo bufferPercentage={bufferedPercent}>
                    <div className="image">
                        <NavLink to={`/song?id=${currentSong.id}`}>
                            <img src={picUrl} alt="song-pic" />
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <NavLink className="song-name" to={`/song?id=${currentSong.id}`}>
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
