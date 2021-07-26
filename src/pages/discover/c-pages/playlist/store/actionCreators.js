import { getPlayListCategory, getPlayListCategoryList } from '@/services/playlist';
import * as actionTypes from './constants';

const CHANGE_PLAYLISTS_ACTION = (playlists) => ({
    type: actionTypes.CHANGE_PLAYLISTS,
    playlists
})

const CHANGE_CURRENT_CATEGORY_ACTION = (currentCategory) => ({
    type: actionTypes.CHANGE_CURRENT_CATEGORY,
    currentCategory
})

const CHANGE_TOTAL_PAGES_ACTION = (totalPages) => ({
    type: actionTypes.CHANGE_TOTAL_PAGES,
    totalPages
})

const CHANGE_CURRENT_PAGE_ACTION = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})


export const getPlayListDetail = (cat, offset=0, limit=35, order="hot") => {
    return dispatch => {
        getPlayListCategoryList(cat, offset, limit, order).then((res) => {
            const playlists = res.playlists;
            const currentCategory = res.cat;
            const totalPages = Math.ceil((res.total || 0) / limit);
            const currentPage = Math.ceil(offset / limit) + 1;
            
            // 派发
            dispatch(CHANGE_PLAYLISTS_ACTION(playlists));
            dispatch(CHANGE_CURRENT_CATEGORY_ACTION(currentCategory));
            dispatch(CHANGE_TOTAL_PAGES_ACTION(totalPages));
            dispatch(CHANGE_CURRENT_PAGE_ACTION(currentPage));
        })
    }
}