import React, { memo } from 'react';

import { HeaderWrapper } from './style'

export default memo(function CMThemeHeaderPlayer(props) {

    const { title } = props;

    return (
        <HeaderWrapper>
            {title}
        </HeaderWrapper>
    )
})
