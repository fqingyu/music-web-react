import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';


export default memo(function CMAppHeader() {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"></a>
                </HeaderLeft>
                <HeaderRight>Right</HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
