import React, { memo, useCallback } from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import {
    getSizeImage,
    msToTime
} from "@/utils/format-utils.js";
import { actionCreators } from '@/pages/player/store';

import { RankingDetailWrapper } from './style';
import CMThemeHeaderRanking from '@/components/theme-header-ranking'

export default memo(function CMRankingDetail() {

    // redux hooks
    const { currentSong, rankingList } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        rankingList: state.getIn(["ranking", "rankingList"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks && other logics
    const playMusic = useCallback((item) => {
        const playList = rankingList.tracks || [];
        if (currentSong && (currentSong.id !== item.id || playList.length === 0)) {
            dispatch(actionCreators.getSongDetailAction(item.id))
            dispatch(actionCreators.changeIsPlayingAction(true));
        }
        else if (currentSong && currentSong.id === item.id) {
            const audioDom = document.querySelector('.audio');
            audioDom.currentTime = 0;
            audioDom.play();
            dispatch(actionCreators.changeIsPlayingAction(true));
        }
    }, [dispatch, currentSong, rankingList])

    const tracks = rankingList.tracks || [];

    return (
        <RankingDetailWrapper>
            <CMThemeHeaderRanking />
            <div className="play-list">
                <table>
                    <thead>
                        <tr className="header">
                            <th className="ranking sprite_table"></th>
                            <th className="title sprite_table">标题</th>
                            <th className="duration sprite_table">时长</th>
                            <th className="singer sprite_table">歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tracks.map((item, index) => {
                                return (
                                    <tr className="" key={item.id}>
                                        <td>
                                            <div className="rank-num">
                                                <span className="num">{index + 1}</span>
                                                <span className="new sprite_icon2"></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="song-name">
                                                {
                                                    index < 3 ?
                                                        (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                                                }
                                                <span className="play sprite_table" onClick={e => playMusic(item)}></span>
                                                <span className="name">{item.name}</span>
                                            </div>
                                        </td>
                                        <td>{msToTime(item.dt)}</td>
                                        <td>{item.ar[0].name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </RankingDetailWrapper>
    )
})
