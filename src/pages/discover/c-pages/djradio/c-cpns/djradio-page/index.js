import React, { memo } from 'react';

import { useSelector, shallowEqual } from 'react-redux';

import { DjradioPageWrapper } from './style';
import CMRadioCategory from '../radio-category';
import CMRadioBlock from '../radio-block';

export default memo(function CMDjradioPage() {

    // redux hooks
    const {
        songRecommend,
        life,
        emotion,
        cover,
        knowledge
    } = useSelector(state => ({
        songRecommend: state.getIn(["djradio", "songRecommend"]),
        life: state.getIn(["djradio", "life"]),
        emotion: state.getIn(["djradio", "emotion"]),
        cover: state.getIn(["djradio", "cover"]),
        knowledge: state.getIn(["djradio", "knowledge"]),
    }), shallowEqual)

    return (
        <DjradioPageWrapper>
            <CMRadioCategory />
            <CMRadioBlock category={songRecommend} catId={2} name={'音乐推荐'}/>
            <CMRadioBlock category={life} catId={6} name={'生活'}/>
            <CMRadioBlock category={emotion} catId={3} name={'情感'}/>
            <CMRadioBlock category={cover} catId={2001} name={'创作翻唱'}/>
            <CMRadioBlock category={knowledge} catId={11} name={'知识'}/>
        </DjradioPageWrapper>
    )
})
