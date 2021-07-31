import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {getSizeImage} from '@/utils/format-utils';

import { GreatRadioWrapper } from './style';
import CMThemeHeaderCategory from '@/components/theme-header-category';

export default memo(function CMGreatRadio() {

    // redux hooks
    const { greatRadio } = useSelector(state => ({
        greatRadio: state.getIn(["categoryDetail", "greatRadio"]),
    }), shallowEqual)

    return (
        <GreatRadioWrapper>
            <CMThemeHeaderCategory name={"优秀新电台"} />
            <ul className="radio-box">
                {
                    greatRadio && greatRadio.slice(0, 5).map((item, index) => {
                        return (
                            <li key={item.id} className="item">
                                <img className="item-image" src={getSizeImage(item.picUrl, 150)} alt="" />
                                <div className="content">
                                    <NavLink className="title" to={`/djradio?id=${item.id}`}>
                                        {item.name}
                                    </NavLink>
                                    <div className="description">
                                        {item.rcmdtext}
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </GreatRadioWrapper>
    )
})
