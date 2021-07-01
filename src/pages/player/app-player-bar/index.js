import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction, getPlaySong } from '../store/actionCreators';
import default_album from '@/assets/img/default_album.jpg';
import { msToTime } from '@/utils/format-utils'

import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { Slider } from 'antd';

export default memo(function CMPAppPlayerBar() {
    // inner state
    const [currentTimeMS, setCurrentTimeMS] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    // redux hook
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    const audioRef = useRef();
    useEffect(() => {
        dispatch(getSongDetailAction(1854709891))
    }, [dispatch])

    // ohter logics
    const picUrl = (currentSong.al && getSizeImage(currentSong.al.picUrl)) || default_album;
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
    const duration = currentSong.dt || 0;
    const showCurrentTime = msToTime(currentTimeMS);

    const playMusic = () => {
        audioRef.current.src = getPlaySong(currentSong.id);
        audioRef.current.play();
    }

    // audio ref用的时间是秒钟， 其他时间用的是毫秒
    const timeUpdate = (e) => {
        if (!isChanging) {
            setCurrentTimeMS(e.target.currentTime * 1000);
            setProgress(currentTimeMS / duration * 100);
        }
    }

    const sliderChange = useCallback((value) => {
        setIsChanging(true);
        setProgress(value)
        const currentTimeMS = value / 100 * duration;
        setCurrentTimeMS(currentTimeMS);
    }, [duration])

    const sliderAfterChange = useCallback((value) => {
        const currentTimeS = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTimeS;
        setCurrentTimeMS(currentTimeS * 1000);
        setIsChanging(false);
    }, [duration])

    return (
        <PlayerBarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <Control>
                    <button className="sprite_playbar prev"></button>
                    <button className="sprite_playbar play" onClick={e => playMusic()}></button>
                    <button className="sprite_playbar next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <a href="/#">
                            <img src={picUrl} alt="song-pic" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
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
                <Operator>
                    <div className="left">
                        <button title="收藏" className="sprite_in btn in" />
                        <button title="收藏" className="sprite_playbar btn favor" />
                        <button className="sprite_playbar btn share" />
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume" />
                        <button className="sprite_playbar btn loop" />
                        <button className="sprite_playbar btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} />
        </PlayerBarWrapper>
    )
})
