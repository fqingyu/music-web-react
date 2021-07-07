import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';

import { RelatedSongListWrapper } from './style';
import CMThemeHeader from '@/components/theme-header-player'

export default memo(function CMRelatedSongList() {

    const { relatedSongList } = useSelector(state => ({
        relatedSongList: state.getIn(["songDetail", "relatedSongList"])
    }))

    const relatedSongListMap = (relatedSongList && relatedSongList.playlists) || [];

    return (
        <RelatedSongListWrapper>
            <CMThemeHeader title="包含这首歌的歌单" />
            <ul>
                {
                    relatedSongListMap.map((item, index) => {
                        return (
                            <li key={item.id} className="item">
                                <div>
                                    <NavLink to={`/playlist?id=${item.id}`}>
                                        <img src={getSizeImage(item.coverImgUrl, 50)} alt="album-cover" />
                                    </NavLink>
                                </div>
                                <div className="info">
                                    <p>
                                        <NavLink to={`/playlist?id=${item.id}`} className="title text-nowrap">
                                            {item.name}
                                        </NavLink>
                                    </p>
                                    <p>
                                        <span>by</span>
                                        <NavLink to={`/user/home?id=${item.creator.userId}`} className="creator text-nowrap">
                                            {item.creator.nickname}
                                        </NavLink>
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </RelatedSongListWrapper>
    )
})
