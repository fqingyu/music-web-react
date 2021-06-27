import React, { memo } from 'react';

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';
import CMTopBanner from './c-cpns/top-banner';
import CMHotRecommend from './c-cpns/hot-recommend'

function CMRecommend() {
    return (
        <RecommendWrapper>
            <CMTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <CMHotRecommend></CMHotRecommend>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(CMRecommend);
