import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';
import { NEW_ALBUM_LIMIT, NEW_ALBUM_PER_PAGE } from '@/common/constants';

import { Carousel } from 'antd';
import CMAlbumCover from '@/components/album-cover';
import CMThemeHeaderRecommend from '@/components/theme-header-recommend';
import { AlbumWrapper } from './style';

export default memo(function CMNewAlbum() {
    // redux hooks
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual)

    const dispatch = useDispatch();

    // other hooks
    const pageRef = useRef();
    useEffect(() => {
        dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
    }, [dispatch])

    return (
        <AlbumWrapper>
            <CMThemeHeaderRecommend title="新碟上架" />
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map((num) => {
                                return <div key={num} className="page">
                                    {
                                        newAlbums.slice(num * NEW_ALBUM_PER_PAGE, (num + 1) * NEW_ALBUM_PER_PAGE).map(item => {
                                            return <CMAlbumCover key={item.id} info={item} size={100} width={118} bgp={-570} />
                                        })
                                    }
                                </div>
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
            </div>
        </AlbumWrapper>
    )
})
