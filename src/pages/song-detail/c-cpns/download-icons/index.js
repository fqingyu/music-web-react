import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { DownloadIconsWrapper } from './style';
import CMThemeHeader from '@/components/theme-header-player';

export default memo(function CMDownloadIcons() {
    return (
        <DownloadIconsWrapper>
            <CMThemeHeader title="网易云音乐多端下载" />
            <ul className="button-list sprite_icon4">
                <li>
                    <a href="https://itunes.apple.com/cn/app/id590338362" className="ios sprite_icon4" hidefocus="true" target="_blank" rel="noreferrer">iPhone</a>
                </li>
                <li>
                    <a href="https://music.163.com/api/pc/download/latest" className="pc sprite_icon4" hidefocus="true" target="_blank" rel="noreferrer">PC</a>
                </li>
                <li>
                    <a href="https://music.163.com/api/android/download/latest2" className="aos sprite_icon4" hidefocus="true" target="_blank" rel="noreferrer">Android</a>
                </li>
            </ul>
            <p className="info">同步歌单，随时畅听320k好音乐</p>
            <NavLink to="/#/wiki/song?songId=1854709891&amp;type=1" target="_blank">补充或修改歌曲资料&gt;</NavLink>
            <NavLink to="/#/wiki/task-center/m/st/wiki/task-center/recommend" target="_blank">用户wiki任务中心&gt;</NavLink>
        </DownloadIconsWrapper>
    )
})
