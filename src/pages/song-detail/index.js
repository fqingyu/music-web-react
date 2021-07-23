import React, { memo, useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';

import { getShowSongDetailAction, cleanShowSongAction } from './store/actionCreators';

import CMDiscoverWrapper from '@/components/discover-wrapper';
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style';
import CMSongBasicInfo from './c-cpns/song-basic-info';
import CMRelatedSongList from './c-cpns/related-song-list';
import CMRelatedSong from './c-cpns/related-song';
import CMDownloadIcons from './c-cpns/download-icons';

export default memo(function CMSongDetail(props) {
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
        return () => {
            dispatch(cleanShowSongAction());
        }
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
                        <CMRelatedSongList />
                        <CMRelatedSong />
                        <CMDownloadIcons />
                    </PlayerRight>
                </div>
            </PlayerWrapper>
        </div>
    )
})
