import React, { memo } from 'react';

import { HotRecommendWrapper } from './style'
import CMThemeHeaderRecommend from '@/components/theme-header-recommend'

export default memo(function CMHotRecommend() {
    return (
        <HotRecommendWrapper>
            <CMThemeHeaderRecommend title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}/>
        </HotRecommendWrapper>
    )
})
