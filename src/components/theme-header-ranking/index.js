import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { ThemeHeaderRankingWrapper } from './style';

export default memo(function CMThemeHeaderRanking() {

    const { rankingList } = useSelector(state => ({
        rankingList: state.getIn(["ranking", "rankingList"])
    }))

    // other logic
    const rankingListLength = (rankingList.tracks && rankingList.tracks.length) || 0;
    const playCount = rankingList.playCount || 0;

    return (
        <ThemeHeaderRankingWrapper>
            <div className="content">
                <div className="left">
                    <h3 className="title">歌曲列表</h3>
                    <div className="song-count">{`${rankingListLength}首歌`}</div>
                </div>
                <div className="right">
                    <div className="play-count__wrapper">
                        播放：<span className="play-count">{playCount}</span>次
                    </div>
                </div>
            </div>
        </ThemeHeaderRankingWrapper>
    )
})
