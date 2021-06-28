import React, { memo } from 'react';

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';
import CMTopBanner from './c-cpns/top-banner';
import CMHotRecommend from './c-cpns/hot-recommend';
import CMNewAlbum from './c-cpns/new-album';
import CMRecommendRanking from './c-cpns/recommend-ranking';

function CMRecommend() {
    return (
        <RecommendWrapper>
            <CMTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <CMHotRecommend />
                    <CMNewAlbum />
                    <CMRecommendRanking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(CMRecommend);
