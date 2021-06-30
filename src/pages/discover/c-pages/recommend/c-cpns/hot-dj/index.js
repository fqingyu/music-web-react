import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { hotRadios } from '@/services/local-data';
import { getSizeImage } from '@/utils/format-utils';

import { HotDjWrapper } from './style';
import ThemeHeaderSmall from '@/components/theme-header-small';

export default memo(function CMHotDj() {
    return (
        <HotDjWrapper>
            <ThemeHeaderSmall title="热门主播" />
            <ul>
                {
                    hotRadios.map((item, index) => {
                        return (
                            <li className="item" key={item.url}>
                                <NavLink to={item.url} className="image">
                                    <img src={getSizeImage(item.picUrl, 40)} alt={item.name} />
                                </NavLink>
                                <div className="info">
                                    <p><NavLink to={item.url}>{item.name}</NavLink></p>
                                    <p className="text-nowrap">{item.position}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </HotDjWrapper>
    )
})
