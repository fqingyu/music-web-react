import React, { memo, useEffect } from 'react';
import queryString from 'query-string';
import {useDispatch} from 'react-redux';

import { getPlayListDetail, getPlayListMenu } from './store/actionCreators';

import { PlayListWrapper } from './style';
import CMThemeHeaderPlayList from '@/components/theme-header-playlist';

export default memo(function CMPlaylist(props) {
    // inner state
    const { cat, offset, limit, order } = queryString.parse(props.location.search);

    // redux hooks
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getPlayListDetail(cat, offset, limit, order));
        dispatch(getPlayListMenu());
    }, [dispatch, cat, offset, limit, order])

    return (
        <PlayListWrapper className="wrap-v2">
            <CMThemeHeaderPlayList />
        </PlayListWrapper>
    )
})
