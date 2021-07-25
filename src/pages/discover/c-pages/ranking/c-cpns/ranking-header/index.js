import React, { memo, useEffect } from 'react';

import { getSizeImage, msToDate } from '@/utils/format-utils';
import { useSelector } from 'react-redux';

import { RankingHeaderWrapper, RankingHeaderLeft, RankingHeaderRight } from './style';
import CMSongOperationBar from '@/components/song-operation-bar';

export default memo(function CMRankingHeader() {

    // redux hooks
    const { rankingList, topList } = useSelector(state => ({
        rankingList: state.getIn(["ranking", "rankingList"])
    }))

    // other logic
    const imageUrl = rankingList && rankingList.coverImgUrl;

    const activeRanking = document.querySelector('.active-exact .frequency');
    let frequencyText = "";
    if (activeRanking) {
        frequencyText = activeRanking.innerText;
    }


    return (
        <RankingHeaderWrapper>
            <RankingHeaderLeft>
                <div className="image-wrapper">
                    <img src={getSizeImage(imageUrl, 150)} alt="cover" className="cover-image" />
                    <span className="mask sprite_cover"></span>
                </div>
            </RankingHeaderLeft>
            <RankingHeaderRight>
                <div>
                    <h2 className="ranking-title">{rankingList.name}</h2>
                    <div className="time-wrapper">
                        <i className="icon sprite_icon2"></i>
                        <span className="update-time">最近更新：{msToDate(rankingList.updateTime)}</span>
                        <span className="frequency">{`（${frequencyText}）`}</span>
                    </div>
                </div>
                <CMSongOperationBar favorTitle={`(${rankingList.subscribedCount})`} 
                    shareTitle={`(${rankingList.shareCount})`}
                    downloadTitle="下载"
                    commentTitle={`(${rankingList.commentCount})`}
                />
            </RankingHeaderRight>
        </RankingHeaderWrapper>
    )
})
