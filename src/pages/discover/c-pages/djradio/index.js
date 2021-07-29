import React, { memo, useEffect } from 'react';

import { getDjradioCategories } from './store/actionCreators';
import { useDispatch } from 'react-redux';

import { DjRadioWrapper } from './style';
import CMRadioCategory from './c-cpns/radio-category';

export default memo(function CMDjradio() {

    // inner state

    // redux hooks
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getDjradioCategories());
    }, [dispatch])

    return (
        <DjRadioWrapper className="wrap-v2">
            <CMRadioCategory />
        </DjRadioWrapper>
    )
})
