import React, { memo } from 'react';

import { getSizeImage, msToDate } from '@/utils/format-utils';
import { useSelector, shallowEqual } from 'react-redux';

import { RankingHeaderWrapper, RankingHeaderLeft, RankingHeaderRight } from './style';
import CMSongOperationBar from '@/components/song-operation-bar';

export default memo(function CMRankingHeader() {

    // redux hooks
    const { rankingList } = useSelector(state => ({
        rankingList: state.getIn(["ranking", "rankingList"])
    }), shallowEqual)

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
                <CMSongOperationBar favorTitle={`(${rankingList.subscribedCount  || 0})`} 
                    shareTitle={`(${rankingList.shareCount  || 0})`}
                    downloadTitle="下载"
                    commentTitle={`(${rankingList.commentCount || 0})`}
                />
            </RankingHeaderRight>
        </RankingHeaderWrapper>
    )
})
