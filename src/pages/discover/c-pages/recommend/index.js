import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';

function CMRecommend() {

    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);
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
