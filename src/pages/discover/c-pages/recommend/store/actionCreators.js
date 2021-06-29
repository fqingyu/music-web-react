import * as actionTypes from './constants';
import { getTopBanners, getHotRecommends, getNewAlbums } from '@/services/recommend';
import { NEW_ALBUM_LIMIT } from '@/common/constants';

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.monthData.slice(0, NEW_ALBUM_LIMIT)
})

export const getTopBannerAction = () => {
    return (dispatch) => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
        })
    }
}

export const getHotRecommendAction = (limit) => {
    return (dispatch) => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res));
        })
    }
}

export const getNewAlbumAction = (limit) => {
    return (dispatch) => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbumAction(res));
        })
    }
}