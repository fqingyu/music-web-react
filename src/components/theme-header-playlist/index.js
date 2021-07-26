import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { ThemeHeaderPlayListWrapper } from './styled';

export default memo(function CMThemeHeaderPlayList() {
    // inner state
    const [showMenu, setShowMenu] = useState(false);

    // redux hooks
    const { currentCategory } = useSelector(state => ({
        currentCategory: state.getIn(["playlist", "currentCategory"])
    }))

    return (
        <ThemeHeaderPlayListWrapper>
            <span className="cat-name">{currentCategory}</span>
            <button className="menu-button sprite_button">
                <i className="menu-main sprite_button">
                    选择分类
                    <em className="down-icon sprite_icon2"></em>
                </i>
            </button>
            <div className="cat-list-box">

            </div>
        </ThemeHeaderPlayListWrapper>
    )
})
