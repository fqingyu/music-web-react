import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RelatedSongWrapper } from './style';
import CMThemeHeader from '@/components/theme-header-player'

export default memo(function CMRelatedSong() {

    // redux hooks
    const { relatedSong } = useSelector(state => ({
        relatedSong: state.getIn(["player", "relatedSong"])
    }))

    // other logics
    const relatedSongMap = (relatedSong && relatedSong.songs) || [];
    const getArtists = (artists) => {
        let artistsList = [];
        for(let i = 0; i <artists.length; i ++) {
            artistsList.push(artists[i].name)
        }
        return artistsList.join('/')
    }

    return (
        <RelatedSongWrapper>
            <CMThemeHeader title="相似歌曲" />
            <ul>
                {
                    relatedSongMap.map((item, index) => {
                        return (
                            <li key={item.id} className="item">
                                <div className="info">
                                    <div>
                                        <NavLink to={`/song?id=${item.id}`} className="title text-nowrap">
                                            {item.name}
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to={`/song?id=${item.id}`} className="artist text-nowrap">
                                            {
                                                getArtists(item.artists)
                                            }
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="btn-list">
                                    <button className="play sprite_icon3"></button>
                                    <button className="addto sprite_icon3"></button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </RelatedSongWrapper>
    )
})
