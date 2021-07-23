import React, { memo } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';

import { RankingLeftBarWrapper } from "./styled";

export default memo(function CMRankingLeftBar() {

    // redux hooks
    const { topList } = useSelector(state => ({
        topList: state.getIn(["ranking", "topList"])
    }))

    console.log(topList);

    return (
        <RankingLeftBarWrapper>
            {
                topList.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                        header = <h2>
                            {
                                index === 0 ? "云音乐特色榜" : "全球媒体榜"
                            }
                            </h2>
                    }
                    let space;
                    if (index === 3) {
                        space = <div className="space" />
                    }
                    return (
                        <div key={item.id}>
                            {header}
                            <NavLink to={`/discover/ranking?id=${item.id}`} className="item">
                                
                                <div className="left">
                                    <NavLink className="avatar" to={`/discover/ranking?id=${item.id}`}>
                                        <img src={getSizeImage(item.coverImgUrl, 40)} alt={item.name} />
                                    </NavLink>
                                </div>
                                <div className="right">
                                    <p className="name">{item.name}</p>
                                    <p className="frequency">{item.updateFrequency}</p>
                                </div>
                            </NavLink>
                            {space}
                        </div>
                        
                    )
                })
            }
        </RankingLeftBarWrapper>
    );
});
