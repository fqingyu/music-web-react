import React, { memo } from 'react';

import { useSelector, shallowEqual } from 'react-redux'
import {
    getSizeImage,
    msToTime
} from "@/utils/format-utils.js"

import { RankingDetailWrapper } from './style';
import CMThemeHeaderRanking from '@/components/theme-header-ranking'

export default memo(function CMRankingDetail() {

    const {rankingList} = useSelector(state => ({
        rankingList: state.getIn(["ranking", "rankingList"])
    }), shallowEqual);
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
                                                <span className="play sprite_table"></span>
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
