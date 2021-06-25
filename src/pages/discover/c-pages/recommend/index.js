import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';

function CMRecommend(props) {

    const { topBanners } = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }));
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    return (
        <div>
            <h2>CMRecommend {topBanners.length}</h2>
        </div>
    )
}

export default memo(CMRecommend);
