import React, { memo, useCallback, useEffect } from 'react';

import { getSizeImage, msToDate } from '@/utils/format-utils';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { changeRankingListSong } from '@/pages/player/store/actionCreators';

import { RankingHeaderWrapper, RankingHeaderLeft, RankingHeaderRight } from './style';
import CMSongOperationBar from '@/components/song-operation-bar';

export default memo(function CMRankingHeader() {

    // redux hooks
    const { rankingList } = useSelector(state => ({
        rankingList: state.getIn(["ranking", "rankingList"])
    }), shallowEqual)
    const dispatch = useDispatch();

    // other hooks
    // 播放排行榜所有歌曲
    const playRankingList = useCallback(() => {
        const playList = rankingList && rankingList.tracks;
        dispatch(changeRankingListSong(playList));
    }, [dispatch, rankingList])

    useEffect(() => {
        const activeRanking = document.querySelector('.active-exact .frequency');
        let frequencyText = "";
        if (activeRanking) {
            frequencyText = activeRanking.innerText;
            document.querySelector('.time-wrapper .frequency').innerText = `（${frequencyText}）`;
        }
    }, [rankingList])

    // other logic
    const imageUrl = rankingList && rankingList.coverImgUrl;

    

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
                        <span className="frequency"></span>
                    </div>
                </div>
                <CMSongOperationBar favorTitle={`(${rankingList.subscribedCount  || 0})`} 
                    shareTitle={`(${rankingList.shareCount  || 0})`}
                    downloadTitle="下载"
                    commentTitle={`(${rankingList.commentCount || 0})`}
                    play={playRankingList}
                />
            </RankingHeaderRight>
        </RankingHeaderWrapper>
    )
})
