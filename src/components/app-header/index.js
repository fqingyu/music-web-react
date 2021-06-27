import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from '@/services/local-data';

export default memo(function CMAppHeader() {

    // mark: currently, I don't decide to design download page.
    // so for download page, I use the external link.
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon" />
                </NavLink>
            )
        }
        else {
            return (
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            )
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01" >网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <button className="creator-center">创作者中心</button>
                    <button className="login">登录</button>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
