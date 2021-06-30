import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';
import { RANKING_LIST_IDS } from '@/common/constants';

import CMThemeHeaderRecommend from '@/components/theme-header-recommend';
import CMTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';


export default memo(function CMRecommendRanking() {

    // redux hooks
    const { upRanking, newRanking, originalRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originalRanking: state.getIn(["recommend", "originalRanking"]),
    }), shallowEqual)
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        RANKING_LIST_IDS.forEach((item, index) => {
            dispatch(getTopListAction(item))
            return;
        })
    }, [dispatch])

    return (
        <RankingWrapper>
            <CMThemeHeaderRecommend title="榜单" />
            <div className="tops">
                <CMTopRanking info={upRanking}/>
                <CMTopRanking info={newRanking}/>
                <CMTopRanking info={originalRanking}/>
            </div>
        </RankingWrapper>
    )
})
