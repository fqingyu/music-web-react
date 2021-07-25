import React, { memo } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';

import { RankingLeftBarWrapper } from "./style";

export default memo(function CMRankingLeftBar(props) {
    
    // inner state
    const { activeId } = props;

    // redux hooks
    const { topList } = useSelector(state => ({
        topList: state.getIn(["ranking", "topList"])
    }))

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

                    let className;
                    if((activeId && activeId===item.id.toString()) || (!activeId && item.id.toString() === "19723756")) {
                        className = "item active-exact";
                    }
                    else {
                        className = "item";
                    }
                    return (
                        <div key={item.id}>
                            {header}
                            <NavLink to={`/discover/ranking?id=${item.id}`} replace className={className}>
                                <div className="left">
                                    <div className="avatar">
                                        <img src={getSizeImage(item.coverImgUrl, 40)} alt={item.name} />
                                    </div>
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
