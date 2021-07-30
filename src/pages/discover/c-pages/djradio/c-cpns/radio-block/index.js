import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';

import { RadioBlockWrapper } from './style';
import ThemeHeaderDjradio from '@/components/theme-header-djradio'

export default memo(function CMRadioBlock(props) {
    // innter state
    const { category, catId, name } = props;

    return (
        <RadioBlockWrapper>
            <ThemeHeaderDjradio catId={catId} name={name} />
            <ul className="content">
                {
                    category.slice(0, 4).map((item, index) => {
                        return (
                            <li key={item.id} className="item">
                                <NavLink to={`/djradio?id=${item.id}`} className="item-image">
                                    <img src={getSizeImage(item.picUrl, 120)} alt="" />
                                </NavLink>
                                <div className="cat-content">
                                    <NavLink to={`/djradio?id=${item.id}`} className="title">{item.name}</NavLink>
                                    <div className="description">{item.rcmdtext}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </RadioBlockWrapper>
    )
})
