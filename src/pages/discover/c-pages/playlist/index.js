import React, { memo, useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';

import { getPlayListDetail, getPlayListMenu } from './store/actionCreators';
import { changePlaylists } from '@/pages/player/store/actionCreators';

import { PlayListWrapper } from './style';
import CMThemeHeaderPlayList from '@/components/theme-header-playlist';
import CMSongsCover from '@/components/songs-cover';

export default memo(function CMPlaylist(props) {
    // inner state
    const { cat, offset, limit, order } = queryString.parse(props.location.search);

    // redux hooks
    const dispatch = useDispatch();
    const { playlists } = useSelector(state => ({
        playlists: state.getIn(["playlist", "playlists"])
    }))

    // other hooks
    useEffect(() => {
        dispatch(getPlayListDetail(cat, offset, limit, order));
        dispatch(getPlayListMenu());
    }, [dispatch, cat, offset, limit, order])

    const playLists = (id) => {
        dispatch(changePlaylists(id));
    }

    return (
        <PlayListWrapper className="wrap-v2">
            <CMThemeHeaderPlayList />
            <div className="playlist-container">
                {
                    playlists.map((item, index) => { 
                        return (
                            <CMSongsCover key={item.name} info={item} displayAuthor={true} right={15} play={() => playLists(item.id)} />
                        )
                    })
                }
            </div>
        </PlayListWrapper>
    )
})
