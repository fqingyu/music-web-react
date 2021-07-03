import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';
import default_album from '@/assets/img/default_album.jpg';

import { SongCover, SongDetailWrapper } from './style';
import CMSongOperationBar from '@/components/song-operation-bar';

export default memo(function CMSongBasicInfo() {

    // redux logics
    const { showSong, showSongComments } = useSelector((state) => ({
        showSong: state.getIn(["player", "showSong"]),
        showSongComments: state.getIn(["player", "showSongComments"])
    }), shallowEqual)

    // other logics
    const picUrl = (showSong.al && getSizeImage(showSong.al.picUrl)) || default_album;
    const alia = (showSong.alia && showSong.alia[0]) || null;
    const artistName = (showSong.ar && showSong.ar[0].name) || null;
    const artistId = (showSong.ar && showSong.ar[0].id) || null;
    const albumName = (showSong.al && showSong.al.name) || null;
    const albumId = (showSong.al && showSong.al.id) || null;


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
                <SongDetailWrapper>
                    <div className="title">
                        <i className="icon sprite_icon2" />
                        <em className="title-name">{showSong.name}</em>
                        {
                            showSong.mv === 0 ? null :
                                <NavLink className="mv-icon" to={`/mv?id=${showSong.mv}`}>
                                    <i className="sprite_icon2"></i>
                                </NavLink>
                        }
                    </div>
                    <div className="subtitle-name">{alia}</div>
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
                </SongDetailWrapper>
            </div>
        </>
    )
})
