import React, { memo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { OperationBarWrapper } from './style';


export default memo(function CMSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle, play } = props;

  // redux hooks

  // other logics
  const playMusic = useCallback((e) => {
    e.preventDefault();
    play();
  }, [play])

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