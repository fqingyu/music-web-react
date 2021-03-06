import React, { memo, useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';
import default_album from '@/assets/img/default_album.jpg';
import { actionCreators } from '@/pages/player/store';

import { SongCover, SongDetailWrapper } from './style';
import CMSongOperationBar from '@/components/song-operation-bar';

export default memo(function CMSongBasicInfo() {

    // inner state
    const [moreLyric, setmoreLyric] = useState(false);

    // redux logics
    const { showSong, currentSong, showSongComments, showSongLyric, playList } = useSelector((state) => ({
        showSong: state.getIn(["songDetail", "showSong"]),
        currentSong: state.getIn(["player", "currentSong"]),
        showSongComments: state.getIn(["songDetail", "showSongComments"]),
        showSongLyric: state.getIn(["songDetail", "showSongLyric"]),
        playList: state.getIn(["player", "playList"]),
    }), shallowEqual)
    const dispatch = useDispatch();

    // other logics
    const picUrl = (showSong.al && getSizeImage(showSong.al.picUrl)) || default_album;
    const alia = (showSong.alia && showSong.alia[0]) || null;
    const artistName = (showSong.ar && showSong.ar[0].name) || null;
    const artistId = (showSong.ar && showSong.ar[0].id) || null;
    const albumName = (showSong.al && showSong.al.name) || null;
    const albumId = (showSong.al && showSong.al.id) || null;

    const lyric = showSongLyric.lyric, translateLyric = showSongLyric.translateLyric;
    let wholeLyric = [];
    let lyricFirst = [];
    let lyricSecond = [];
    if (lyric && lyric.length && translateLyric && translateLyric.length) {
        let indexTrans = 0;
        for (let itr = 0; itr < lyric.length; itr++) {
            while (indexTrans < translateLyric.length && translateLyric[indexTrans].time < lyric[itr].time) {
                wholeLyric.push(translateLyric[indexTrans].content)
                indexTrans += 1
            }
            wholeLyric.push(lyric[itr].content)
        }
        lyricFirst = wholeLyric.slice(0, 10);
        lyricSecond = wholeLyric.slice(10);
    }
    else if (lyric && lyric.length) {
        for (let itr = 0; itr < lyric.length; itr++) {
            wholeLyric.push(lyric[itr].content);
        }
        lyricFirst = wholeLyric.slice(0, 10);
        lyricSecond = wholeLyric.slice(10);
    }

    // ??????
    const play = () => {
        if (currentSong && (currentSong.id !== showSong.id ||  playList.length === 0)) {
          dispatch(actionCreators.getSongDetailAction(showSong.id))
          dispatch(actionCreators.changeIsPlayingAction(true));
        }
        else if (currentSong && currentSong.id === showSong.id) {
          const audioDom = document.querySelector('.audio');
          audioDom.currentTime = 0;
          audioDom.play();
          dispatch(actionCreators.changeIsPlayingAction(true));
        }
    }

    // ????????????????????????????????????
    useEffect(() => {
        return () => {
            setmoreLyric(false)
        }
    }, [showSong.id])


    return (
        <>
            <SongCover>
                <div className="cover">
                    <img src={picUrl} alt="album" />
                    <span className="background sprite_cover"></span>
                </div>
                <div className="outchain">
                    <i className="icon sprite_icon2"></i>
                    <a href="/todo">?????????????????????</a>
                </div>
            </SongCover>
            <div className="song-info">
                <SongDetailWrapper moreLyric={moreLyric}>
                    <div className="title">
                        <i className="icon sprite_icon2" />
                        <div className="title-wrapper">
                            <em className="title-name">{showSong.name}</em>
                            {
                                showSong.mv === 0 ? null :
                                    <NavLink className="mv-icon" to={`/mv?id=${showSong.mv}`}>
                                        <i className="sprite_icon2"></i>
                                    </NavLink>
                            }
                            <div className="subtitle-name">{alia}</div>
                        </div>
                    </div>

                    <p className="artist">
                        ?????????
                        <span title={artistName}>
                            <NavLink to={`/artist?id=${artistId}`}>
                                {artistName}
                            </NavLink>
                        </span>
                    </p>
                    <p className="album">
                        ???????????????
                        <span title={albumName}>
                            <NavLink to={`/album?id=${albumId}`}>
                                {albumName}
                            </NavLink>
                        </span>
                    </p>
                    <CMSongOperationBar favorTitle="??????"
                        shareTitle="??????"
                        downloadTitle="??????"
                        commentTitle={`(${showSongComments.total ? showSongComments.total : 0})`} 
                        play={play}/>
                    <div className="lyric-content">
                        {
                            lyricFirst.map((item, index) => {
                                return (
                                    item === "" ? <br key={index}></br> :
                                        <p key={index}>
                                            {item}
                                        </p>
                                )
                            })
                        }
                        <div className="hide-lyric">
                            {
                                lyricSecond.map((item, index) => {
                                    return (
                                        item === "" ? <br key={index}></br> :
                                            <p key={index}>
                                                {item}
                                            </p>
                                    )
                                })
                            }
                        </div>
                        {
                            lyricSecond ?
                                <div className="expand" onClick={e => setmoreLyric(!moreLyric)}>
                                    {
                                        moreLyric ? "??????" : "??????"
                                    }
                                    <i className="icon sprite_icon2"></i>
                                </div> :
                                null
                        }
                    </div>
                    <div className="user-operation">
                        <p>
                            <NavLink to={`/lyric?id=${showSong.id}`} className="report">??????</NavLink>
                        </p>
                        <p>
                            {
                                showSongLyric.lyricUser ?
                                    <span className="contribute">???????????????
                                        <a href="todo">
                                            {showSongLyric.lyricUser.nickname}
                                        </a>
                                    </span> : null
                            }
                            {
                                showSongLyric.transUser ?
                                    <span className="contribute">&nbsp;&nbsp;&nbsp;&nbsp;???????????????
                                        <a href="todo">
                                            {showSongLyric.transUser.nickname}
                                        </a>
                                    </span> : null
                            }
                        </p>
                    </div>
                </SongDetailWrapper>
            </div>
        </>
    )
})
