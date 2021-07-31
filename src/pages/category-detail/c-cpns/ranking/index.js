import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {getSizeImage} from '@/utils/format-utils';

import { RankingWrapper } from './style';
import CMThemeHeaderCategory from '@/components/theme-header-category';

export default memo(function CMRanking() {

    // redux hooks
    const { radioRanking } = useSelector(state => ({
        radioRanking: state.getIn(["categoryDetail", "radioRanking"]),
    }))

    return (
        <RankingWrapper>
            <CMThemeHeaderCategory name={"电台排行榜"} />
            <ul className="ranking-box">
                {
                    radioRanking.map((item, index) => {
                        return (
                            <li className="item" key={item.id}>
                                <NavLink to={`/djradio?id=${item.id}`}>
                                    <img src={getSizeImage(item.picUrl, 120)} alt="" />
                                </NavLink>
                                <div className="content">
                                    <NavLink className="title" to={`/djradio?id=${item.id}`}>{item.name}</NavLink>
                                    <div className="author">
                                        <i className="icon sprite_icon2" />
                                        <NavLink to={`/user/home?id=${(item.dj && item.dj.userId) || 0}`}>
                                            {(item.dj && item.dj.nickname) || null}
                                        </NavLink>
                                    </div>
                                    <p className="info">
                                        共{item.programCount}期订阅&nbsp;&nbsp;&nbsp;&nbsp;{item.subCount}次
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </RankingWrapper>
    )
})
