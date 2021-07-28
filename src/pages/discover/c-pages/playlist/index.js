import React, { memo, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { getPlayListDetail, getPlayListMenu } from './store/actionCreators';
import { changePlaylists } from '@/pages/player/store/actionCreators';

import { PlayListWrapper } from './style';
import CMThemeHeaderPlayList from '@/components/theme-header-playlist';
import CMSongsCover from '@/components/songs-cover';
import CMPagination from '@/components/pagination';

export default memo(function CMPlaylist(props) {
    // inner state
    const { cat, offset, limit, order } = queryString.parse(props.location.search);
    const [currentPage, setCurrentPage] = useState(1);

    // redux hooks
    const dispatch = useDispatch();
    const { playlists, totalItems, currentCategory } = useSelector(state => ({
        playlists: state.getIn(["playlist", "playlists"]),
        totalItems: state.getIn(["playlist", "totalItems"]),
        currentCategory: state.getIn(["playlist", "currentCategory"]),
    }))

    // other hooks
    useEffect(() => {
        dispatch(getPlayListDetail(cat, offset, limit, order));
        dispatch(getPlayListMenu());
    }, [dispatch, cat, offset, limit, order])

    const playLists = (id) => {
        dispatch(changePlaylists(id));
    }

    // other logics
    const history = useHistory();
    function onPageChange(page, pageSize) {
        const newOffset = (page - 1) * 35;
        setCurrentPage(page);
        history.push(`/discover/playlist?cat=${currentCategory}&order=hot&offset=${newOffset}&limit=35`);
    }

    return (
        <PlayListWrapper className="wrap-v2">
            <CMThemeHeaderPlayList />
            <div className="playlist-container">
                {
                    playlists.map((item, index) => {
                        return (
                            <CMSongsCover key={item.id} info={item} displayAuthor={true} right={15} play={() => playLists(item.id)} />
                        )
                    })
                }
            </div>
            <CMPagination currentPage={currentPage}
                total={totalItems}
                pageSize={35}
                onPageChange={onPageChange}
            />
        </PlayListWrapper>
    )
})
