import React, { memo } from 'react'

import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';
import { Slider } from 'antd';


export default memo(function CMPAppPlayerBar() {
    return (
        <PlayerBarWrapper className="sprite_playbar">
            <div className="content wrap-v2">
                <Control>
                    <button className="sprite_playbar prev"></button>
                    <button className="sprite_playbar play"></button>
                    <button className="sprite_playbar next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <a href="/#">
                            <img src="http://p3.music.126.net/kF3pI2hi4uZTQkE04XzV4w==/109951166095569910.jpg?param=34y34" alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">红豆</span>
                            <a href="#/" className="singer-name">要不要买菜</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} tooltipVisible={false}/>
                            <div className="time">
                                <span className="now-time">02:30</span>
                                <span className="divider">/</span>
                                <span className="duration">04:30</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button title="收藏" className="sprite_in btn in" />
                        <button title="收藏" className="sprite_playbar btn favor" />
                        <button className="sprite_playbar btn share" />
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume" />
                        <button className="sprite_playbar btn loop" />
                        <button className="sprite_playbar btn playlist"></button>
                    </div>
                </Operator>
            </div>
        </PlayerBarWrapper>
    )
})
