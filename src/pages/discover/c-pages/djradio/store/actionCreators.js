import { getDjRadioCatelist, getDjRadioRecommend, getDjRadios } from '@/services/djradio';
import { DJRADIO_CAT } from '@/common/constants';


import * as actionTypes from './constants';

const changeCategoriesAction = (categories) => ({
    type: actionTypes.CHANGE_CATEGORIES,
    categories
})

const changeSongRecommendAction = (songRecommend) => ({
    type: actionTypes.CHANGE_SONG_RECOMMEND,
    songRecommend
})

const changeLifeAction = (life) => ({
    type: actionTypes.CHANGE_LIFE,
    life
})

const changeEmotionAction = (emotion) => ({
    type: actionTypes.CHANGE_EMOTION,
    emotion
})

const changeCoverAction = (cover) => ({
    type: actionTypes.CHANGE_COVER,
    cover
})

const changeKnowledgeAction = (knowledge) => ({
    type: actionTypes.CHANGE_KNOWLEDGE,
    knowledge
})

export const getDjradioCategories = () => {
    return (dispatch) => {
        getDjRadioCatelist().then((res) => {
            dispatch(changeCategoriesAction(res.categories));
        })
    }
}

export const getSongRecommend = () => {
    return (dispatch) => {
        DJRADIO_CAT.forEach((item, index) => {
            getDjRadioRecommend(item).then(res => {
                switch (item) {
                    case 2:
                        dispatch(changeSongRecommendAction(res.djRadios))
                        break;
                    case 3:
                        dispatch(changeEmotionAction(res.djRadios))
                        break;
                    case 6:
                        dispatch(changeLifeAction(res.djRadios))
                        break;
                    case 11:
                        dispatch(changeKnowledgeAction(res.djRadios))
                        break;
                    case 2001:
                        dispatch(changeCoverAction(res.djRadios))
                        break;
                    default:
                        break;
                }
            })
        })
    }
}
