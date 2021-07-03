import React, { memo, useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';
import default_album from '@/assets/img/default_album.jpg';

import { SongCover, SongDetailWrapper } from './style';
import CMSongOperationBar from '@/components/song-operation-bar';

export default memo(function CMSongBasicInfo() {

    // inner state
    const [moreLyric, setmoreLyric] = useState(false);

    // redux logics
    const { showSong, showSongComments, showSongLyric } = useSelector((state) => ({
        showSong: state.getIn(["player", "showSong"]),
        showSongComments: state.getIn(["player", "showSongComments"]),
        showSongLyric: state.getIn(["player", "showSongLyric"])
    }), shallowEqual)

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
                    <a href="/todo">生成外链播放器</a>
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
                        歌手：
                        <span title={artistName}>
                            <NavLink to={`/artist?id=${artistId}`}>
                                {artistName}
                            </NavLink>
                        </span>
                    </p>
                    <p className="album">
                        所属专辑：
                        <span title={albumName}>
                            <NavLink to={`/album?id=${albumId}`}>
                                {albumName}
                            </NavLink>
                        </span>
                    </p>
                    <CMSongOperationBar favorTitle="收藏"
                        shareTitle="分享"
                        downloadTitle="下载"
                        commentTitle={`(${showSongComments.total})`} />
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
                                        moreLyric ? "收起" : "展开"
                                    }
                                    <i className="icon sprite_icon2"></i>
                                </div> :
                                null
                        }
                    </div>
                    <div className="user-operation">
                        <p>
                            <NavLink to={`/lyric?id=${showSong.id}`} className="report">报错</NavLink>
                        </p>
                        <p>
                            {
                                showSongLyric.lyricUser ?
                                    <span className="contribute">贡献歌词：
                                        <a href="todo">
                                            {showSongLyric.lyricUser.nickname}
                                        </a>
                                    </span> : null
                            }
                            {
                                showSongLyric.transUser ?
                                    <span className="contribute">&nbsp;&nbsp;&nbsp;&nbsp;贡献翻译：
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
