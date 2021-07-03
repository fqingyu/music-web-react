import React, { memo, useEffect } from 'react';
import queryString from 'query-string';

import CMDiscoverWrapper from '@/components/discover-wrapper';
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style';

export default memo(function CMPlayerSong(props) {
    // inner state
    const { id } = queryString.parse(props.location.search)

    // ohter hooks
    useEffect(() => {
        const recommendDom = document.querySelector(".content .select-list .select-item a");
        recommendDom.setAttribute("class", "active");
    }, [])


    return (
        <div>
            <CMDiscoverWrapper />
            <PlayerWrapper>
                <div className="content wrap-v2">
                    <PlayerLeft></PlayerLeft>
                    <PlayerRight></PlayerRight>
                </div>
            </PlayerWrapper>
        </div>
    )
})
