import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendAction } from '../../store/actionCreators';
import { HOT_RECOMMEND_LIMIT } from '@/common/constants';
import { changePlaylists } from '@/pages/player/store/actionCreators';

import { HotRecommendWrapper } from './style'
import CMThemeHeaderRecommend from '@/components/theme-header-recommend';
import CMSongsCover from '@/components/songs-cover'


export default memo(function CMHotRecommend() {

    // redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
    }, [dispatch]);

    const playLists = (id) => {
        dispatch(changePlaylists(id));
    }

    return (
        <HotRecommendWrapper>
            <CMThemeHeaderRecommend title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
            <div className="recommend-list">
                {
                    hotRecommends.map((item, index) => {
                        return (
                            <CMSongsCover info={item} key={item.id} play={() => playLists(item.id)}/>
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
