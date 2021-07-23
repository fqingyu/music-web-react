import React, { memo, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { OperationBarWrapper } from './style';
import { actionCreators } from '@/pages/player/store';

export default memo(function CMSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle, ids } = props;

  // redux hooks
  const dispatch = useDispatch();
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
  }), shallowEqual);

  // other logics
  const playMusic = useCallback((e) => {
    e.preventDefault();
    if (currentSong && currentSong.id !== ids) {
      dispatch(actionCreators.getSongDetailAction(ids))
      dispatch(actionCreators.changeIsPlayingAction(true));
    }
    else if (currentSong && currentSong.id === ids) {
      const audioDom = document.querySelector('.audio');
      audioDom.currentTime = 0;
      audioDom.play();
      dispatch(actionCreators.changeIsPlayingAction(true));
    }
    return false
  }, [dispatch, currentSong, ids])

  return (
    <OperationBarWrapper>
      <span className="play">
        <NavLink to="" onClick={e => playMusic(e)} className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </NavLink>
        <a href="/abc" className="add-icon sprite_button">+</a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})