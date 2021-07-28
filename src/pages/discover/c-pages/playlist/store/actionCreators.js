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

const CHANGE_TOTAL_ITEMS_ACTION = (totalItems) => ({
    type: actionTypes.CHANGE_TOTAL_ITEMS,
    totalItems
})

// const CHANGE_CURRENT_PAGE_ACTION = (currentPage) => ({
//     type: actionTypes.CHANGE_CURRENT_PAGE,
//     currentPage
// })

const CHANGE_CAT_LIST_ACTION = (catList) => ({
    type: actionTypes.CHANGE_CAT_LIST,
    catList
})


export const getPlayListDetail = (cat, offset = 0, limit = 35, order = "hot") => {
    return dispatch => {
        getPlayListCategoryList(cat, offset, limit, order).then((res) => {
            const playlists = res.playlists;
            const currentCategory = res.cat;
            const totalItems = res.total || 0;
            // const currentPage = Math.ceil(offset / limit) + 1;

            // 派发
            dispatch(CHANGE_PLAYLISTS_ACTION(playlists));
            dispatch(CHANGE_CURRENT_CATEGORY_ACTION(currentCategory));
            dispatch(CHANGE_TOTAL_ITEMS_ACTION(totalItems));
            // dispatch(CHANGE_CURRENT_PAGE_ACTION(currentPage));
        })
    }
}

export const getPlayListMenu = () => {
    return dispatch => {
        getPlayListCategory().then(res => {
            const subCat = res.sub || [];
            let catList = [[], [], [], [], []];
            subCat.forEach((item, index) => {
                switch (item.category) {
                    case 0:
                        catList[0].push(item);
                        break;
                    case 1:
                        catList[1].push(item);
                        break;
                    case 2:
                        catList[2].push(item);
                        break;
                    case 3:
                        catList[3].push(item);
                        break;
                    case 4:
                        catList[4].push(item);
                        break;
                    default:
                        return;
                }
            })

            // 0语种 1风格 2场景 3情感 4主题
            dispatch(CHANGE_CAT_LIST_ACTION(catList));
        })
    }
}