import React, { memo, useEffect } from "react";
import queryString from 'query-string';

import { getTops } from './store/actionCreator';
import { useDispatch } from 'react-redux';

import { RankingWrapper, RankingLeft, RankingRight } from "./style";
import CMRankingLeftBar from './c-cpns/ranking-left-bar';
import CMRankingHeader from './c-cpns/ranking-header'
import CMRankingDetail from './c-cpns/ranking-detail';

export default memo(function CMRanking(props) {
  // inner state
  const { id } = queryString.parse(props.location.search)
  
  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTops());   
  }, [dispatch])

  return (
      <RankingWrapper className="wrap-v2">
        <RankingLeft>
            <CMRankingLeftBar activeId={id}/>
        </RankingLeft>
        <RankingRight>
            <CMRankingHeader />
            <CMRankingDetail />
        </RankingRight>
      </RankingWrapper>
  )
});
