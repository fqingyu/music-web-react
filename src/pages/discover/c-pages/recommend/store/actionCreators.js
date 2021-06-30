import * as actionTypes from './constants';
import { getTopBanners, getHotRecommends, getNewAlbums, getTopList, getSettleSinger } from '@/services/recommend';
import { NEW_ALBUM_LIMIT, RANKING_LIST_IDS } from '@/common/constants';

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

const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    rankList: res.playlist
})

const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    rankList: res.playlist
})

const changeOriginalRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGINAL_RANKING,
    rankList: res.playlist
})

const changeSettleSingerAction = (res) => ({
    type: actionTypes.CHANGE_SETTLE_SINGER,
    settleSingers: res.artists
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

export const getTopListAction = (id) => {
    return dispatch => {
        getTopList(id).then(res => {
            switch (id) {
                case RANKING_LIST_IDS[0]:
                    dispatch(changeUpRankingAction(res));
                    break;
                case RANKING_LIST_IDS[1]:
                    dispatch(changeNewRankingAction(res));
                    break;
                case RANKING_LIST_IDS[2]:
                    dispatch(changeOriginalRankingAction(res));
                    break;
                default:
            }
        })
    }
}

export const getSettleSingerAction = () => {
    return dispatch => {
        getSettleSinger(5).then(res => {
            dispatch(changeSettleSingerAction(res))
        })
    }
}