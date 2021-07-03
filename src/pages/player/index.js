import React, { memo, useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';

import { getShowSongDetailAction } from './store/actionCreators';

import CMDiscoverWrapper from '@/components/discover-wrapper';
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style';
import CMSongBasicInfo from './c-cpns/song-basic-info';

export default memo(function CMPlayerSong(props) {
    // inner state
    const { id } = queryString.parse(props.location.search)

    // redux hooks
    const dispatch = useDispatch()

    // ohter hooks
    useEffect(() => {
        const recommendDom = document.querySelector(".content .select-list .select-item a");
        recommendDom.setAttribute("class", "active");
    }, [])

    useEffect(() => {
        dispatch(getShowSongDetailAction(id));
    }, [dispatch, id])

    return (
        <div>
            <CMDiscoverWrapper />
            <PlayerWrapper>
                <div className="content wrap-v2">
                    <PlayerLeft>
                        <CMSongBasicInfo />
                    </PlayerLeft>
                    <PlayerRight>
                        <h2>Songs</h2>
                        <h2>相似歌曲</h2>
                    </PlayerRight>
                </div>
            </PlayerWrapper>
        </div>
    )
})
