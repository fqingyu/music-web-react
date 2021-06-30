import React, { memo } from 'react';

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';
import CMTopBanner from './c-cpns/top-banner';
import CMHotRecommend from './c-cpns/hot-recommend';
import CMNewAlbum from './c-cpns/new-album';
import CMRecommendRanking from './c-cpns/ranking-list';
import CMUserLogin from './c-cpns/user-login';
import CMSettlerSinger from './c-cpns/settle-singer';
import CMHotDj from './c-cpns/hot-dj';

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
                <RecommendRight>
                    <CMUserLogin />
                    <CMSettlerSinger />
                    <CMHotDj />
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(CMRecommend);
