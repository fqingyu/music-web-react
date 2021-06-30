import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSettleSingerAction } from '../../store/actionCreators';
import { getSizeImage } from '@/utils/format-utils';

import { SettleSingerWrapper } from './style';
import ThemeHeaderSmall from '@/components/theme-header-small';


export default memo(function CMSettlerSinger() {

    // redux hooks
    const dispatch = useDispatch();
    const { settleSingers } = useSelector(state => ({
        settleSingers: state.getIn(["recommend", "settleSingers"])
    }))

    // other hooks
    useEffect(() => {
        dispatch(getSettleSingerAction())
    }, [dispatch])


    return (
        <SettleSingerWrapper>
            <ThemeHeaderSmall title="入驻歌手" more={true} moreLink="/discover/artist/signed/" />
            <ul className="singer-list">
                {
                    settleSingers.map((item, index) => {
                        return (
                            <li key={item.id} className="singer">
                                <NavLink to={`/user/home?id=${item.id}`}>
                                    <div className="head">
                                        <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4>
                                            <span>{item.name}</span>
                                        </h4>
                                        <p>{item.alias.join("") || item.name}</p>
                                    </div>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="recruit">
                <a target="_blank" href="https://music.163.com/recruit" className="sprite_button btn">
                    <i className="content sprite_button">申请成为网易音乐人</i>
                </a>
            </div>
        </SettleSingerWrapper>
    )
})
