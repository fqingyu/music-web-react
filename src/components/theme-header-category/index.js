import React, { memo } from 'react';

import { ThemeHeaderCategoryWrapper } from './style';

export default memo(function CMThemeHeaderCategory(props) {

    // innser state
    const { name } = props;


    return (
        <ThemeHeaderCategoryWrapper>
            <div className="category-name">
                <div>{name}</div>
            </div>
        </ThemeHeaderCategoryWrapper>
    )
})
