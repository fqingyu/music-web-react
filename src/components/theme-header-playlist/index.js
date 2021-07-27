import React, { memo, useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { CAT_NAMES } from '@/common/constants';

import { ThemeHeaderPlayListWrapper } from './style';


export default memo(function CMThemeHeaderPlayList() {
    // inner state
    const [showMenu, setShowMenu] = useState(true);

    // redux hooks
    const { currentCategory, catList } = useSelector(state => ({
        currentCategory: state.getIn(["playlist", "currentCategory"]),
        catList: state.getIn(["playlist", "catList"]),
    }))

    // other hooks
    const showMenuUp = useCallback(() => {
        setShowMenu(!showMenu);
    }, [showMenu])

    useEffect(() => {
        setShowMenu(false);
    }, [currentCategory])

    return (
        <ThemeHeaderPlayListWrapper showMenu={showMenu}>
            <span className="cat-name">{currentCategory}</span>
            <button className="menu-button sprite_button" onClick={e => showMenuUp()}>
                <i className="menu-main sprite_button">
                    选择分类
                    <em className="down-icon sprite_icon2"></em>
                </i>
            </button>
            <div className="cat-list-box">
                <div className="header sprite_content">
                    <i className="header-icon sprite_icon"></i>
                </div>
                <div className="content sprite_content">
                    <div className="total">
                        <NavLink to="/discover/playlist/?order=hot" className="sprite_button2 total-button" replace>
                            <em>全部风格</em>
                        </NavLink>
                    </div>
                    {
                        catList.map((item, index) => {
                            return (
                                <div className="cat-line" key={index}>
                                    <div className="cat-name">
                                        <i className={`${CAT_NAMES[index][1]} sprite_icon2 icon`} />
                                        {CAT_NAMES[index][0]}
                                    </div>
                                    <div className="cat-items">
                                        {
                                            item.map((catItem, index2) => {
                                                return (
                                                    <React.Fragment key={catItem.name}>
                                                        <NavLink to={`/discover/playlist?cat=${catItem.name}`} replace>{catItem.name}</NavLink>
                                                        <span>|</span>
                                                    </React.Fragment>
                                                    
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="cat-last-line">
                        <div className="cat-name"></div>
                    </div>
                </div>
                <div className="footer sprite_content" />
            </div>
        </ThemeHeaderPlayListWrapper>
    )
})
