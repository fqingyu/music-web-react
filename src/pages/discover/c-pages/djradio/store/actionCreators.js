import { getDjRadioCatelist, getDjRadioRecommend, getDjRadios } from '@/services/djradio';

import * as actionTypes from './constants';

const changeCategoriesAction = (categories) => ({
    type: actionTypes.CHANGE_CATEGORIES,
    categories
})

export const getDjradioCategories = () => {
    return (dispatch) => {
        getDjRadioCatelist().then((res) => {
            dispatch(changeCategoriesAction(res.categories));
        })
    }
}
