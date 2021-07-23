import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { changeBlurImage } from '@/utils/format-utils';
import { changePlayListAction, changePlayListShowUpAction } from '../../../store/actionCreators';

import { PlayListWrapper, PlayListHeader, PlayListContent } from './style';
import CMPlayListSong from '@/components/playlist-song';


export default memo(function CMPlayList() {

    // redux hooks
    const { currentSong, currentSongIndex, playList, lyric, playListShowUp } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        currentSongIndex: state.getIn(["player", "currentSongIndex"]),
        playList: state.getIn(["player", "playList"]),
        lyric: state.getIn(["player", "lyric"]),
        playListShowUp: state.getIn(["player", "playListShowUp"]),
    }))
    const dispatch = useDispatch();

    // other hooks
    const picStr = (currentSong.al && currentSong.al.pic_str) || null;

    // other logics
    const addAll = useCallback((e) => {
        e.preventDefault();
        console.log("to be done later")
    }, [])

    const clearAll = useCallback((e) => {
        dispatch(changePlayListAction([]));
    }, [dispatch])

    const changeShowUp = useCallback(() => {
        dispatch(changePlayListShowUpAction(false));
    }, [dispatch])

    return (
        <PlayListWrapper showUp={playListShowUp}>
            <PlayListHeader className="playlist_bg">
                <div>
                    <h4>播放列表({playList.length})</h4>
                    <NavLink to="" className="addall" onClick={e => addAll(e)}>
                        <span className="sprite_playlist icon-addall"></span>
                        收藏全部
                    </NavLink>
                    <span className="split-line"></span>
                    <button className="clear" onClick={e => clearAll(e)}>
                        <span className="sprite_playlist icon-delete"></span>
                        清除
                    </button>
                    <p className="title">{currentSong.name}</p>
                    <span className="sprite_playlist close" onClick={e => changeShowUp()}>关闭</span>
                </div>
            </PlayListHeader>
            <PlayListContent className="playlist_bg">
                {
                    picStr ?
                        <img src={changeBlurImage(picStr)} alt="song_img" className="song_image" /> : null
                }
                <div className="mask1" />
                <div className="left">
                    <ul>
                        {
                            playList.length !== 0 ?
                                playList.map((item, index) => {
                                    return (
                                        <CMPlayListSong
                                            key={item.name}
                                            index={index}
                                            song={item}
                                            isPlaying={index === currentSongIndex ? true : false}
                                        />
                                    )
                                }) : null
                        }
                    </ul>
                </div>
                <div className="border-line" />
                <div className="ask">
                    <i className="sprite_playlist ask"></i>
                </div>
                <div className="mask2" />
                <div className="border-line2" />
                <div className="list-lyric">
                    <div className="list-lyric-wrapper">
                        {
                            lyric.map((item, index) => {
                                return (
                                    <p className={`lyric lyric-${index}`} key={index}>
                                        {item.content}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </PlayListContent>
        </PlayListWrapper>
    )
})
