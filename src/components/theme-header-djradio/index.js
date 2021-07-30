import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';

import { ThemeHeaderDjradioWrapper } from './style';

export default memo(function CMThemeHeaderDjradio(props) {

    // innser state
    const { catId, name } = props;


    return (
        <ThemeHeaderDjradioWrapper>
            <div className="category-name">
                <NavLink to={`/discover/djradio/category?id=${catId}`} replace>{name}</NavLink>
                <span>·</span>
                电台
            </div>
            <NavLink className="more" to={`/discover/djradio/category?id=${catId}`} replace>更多 &gt;</NavLink>
        </ThemeHeaderDjradioWrapper>
    )
})
