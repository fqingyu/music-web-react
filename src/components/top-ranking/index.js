import React, { memo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { TopRankingWrapper } from './style';
import { actionCreators } from '@/pages/player/store';

export default memo(function CMTopRanking(props) {
    const { info } = props;
    const { tracks = [] } = info;

    // redux hooks
    const dispatch = useDispatch();

    // other logics
    const playMusic = useCallback((item) => {
        dispatch(actionCreators.changeIsPlayingAction(false));
        dispatch(actionCreators.getSongDetailAction(item.id))
        dispatch(actionCreators.changeIsPlayingAction(true));
    }, [dispatch])

    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                    <img src={info.coverImgUrl} alt={info.name} />
                    <NavLink to={`/discover/toplist?id=${info.id}`} title={info.name} className="image_cover"></NavLink>
                </div>
                <div className="info">
                    <NavLink to={`/discover/toplist?id=${info.id}`} title={info.name} >
                        {info.name}
                    </NavLink>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    <NavLink to={`/song?id=${item.id}`} className="name text-nowrap">{item.name}</NavLink>
                                    <div className="operate">
                                        <button onClick={e => playMusic(item)} className="btn sprite_02 play"></button>
                                        <button className="btn sprite_icon2 addto"></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <NavLink to={`/discover/toplist?id=${info.id}`}>查看全部&gt;</NavLink>
            </div>
        </TopRankingWrapper>
    )
})
