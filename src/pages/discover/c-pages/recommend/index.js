import React, { memo } from 'react';

import { RecommendWrapper } from './style';
import CMTopBanner from './c-cpns/top-banner';

function CMRecommend() {
    return (
        <RecommendWrapper>
            <CMTopBanner ></CMTopBanner>
        </RecommendWrapper>
    )
}

export default memo(CMRecommend);
