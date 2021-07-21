import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { msToTime } from '@/utils/format-utils';

import { PlayListSongWrapper } from './style';

export default memo(function CMPlayListSong(props) {
    const { song, isPlaying } = props;

    return (
        <PlayListSongWrapper className={isPlaying ? "playing" : null} isPlaying={isPlaying}>
            <div className="col col-1">
                {
                    isPlaying ?
                        <div className="play-icon sprite_playlist"></div> :
                        null
                }
            </div>
            <div className="col col-2 text-nowrap">{song.name}</div>
            <div className="col col-3">
                <i className="icon-add sprite_playlist">收藏</i>
                <i className="icon-share sprite_playlist">分享</i>
                <i className="icon-download sprite_playlist">下载</i>
                <i className="icon-delete sprite_playlist">删除</i>
            </div>
            <div className="col col-4">
                <span className="artist text-nowrap">
                    {
                        song.ar && song.ar.map((item, index) => {
                            return (
                                <React.Fragment>
                                    <NavLink to={`/artist?id=${item.id}`}>{item.name}</NavLink>
                                    {
                                        index !== song.ar.length && song.ar.length !== 1 ? <span>/</span> : null
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </span>
            </div>
            <div className="col col-5">{msToTime(song.dt)}</div>
            <div className="col col-6">
                <NavLink to="todo" className="icon-from sprite_playlist">来源</NavLink>
            </div>
        </PlayListSongWrapper>
    )
})
