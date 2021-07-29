import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

import { getDjradioCategories } from './store/actionCreators';
import { useDispatch } from 'react-redux';

import { DjRadioWrapper } from './style';


export default memo(function CMDjradio(props) {
    // inner state
    const { route } = props;

    // redux hooks
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getDjradioCategories());
    }, [dispatch])

    return (
        <DjRadioWrapper className="wrap-v2">
            {renderRoutes(route.routes)}
        </DjRadioWrapper>
    )
})
