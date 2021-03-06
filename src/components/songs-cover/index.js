import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
    getSizeImage,
    getCount
} from "@/utils/format-utils";

import { SongsCoverWrapper } from './style'

const CMSongsCover = memo(function (props) {
    // inner state
    const { info, right, displayAuthor, play } = props;

    // ohter logic
    const displayAuthorPart = useCallback((displayAuthor) => {
        if (displayAuthor) {
            return (
                <div className="cover-source text-nowrap">
                    by {info.copywriter || info.creator.nickname}
                </div>
            )
        }
        else {
            return;
        }
    }, [info])

    const playSongs = useCallback(() => {
        play();
    }, [play])

    return (
        <SongsCoverWrapper right={right}>
            <NavLink className="cover-top" title={info.name} to={`/playlist?id=${info.id}`}>
                <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="songs-cover" />
                <div className="cover sprite_cover">
                </div>
            </NavLink>
            <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play-icon" onClick={e => playSongs()}/>
                    </div>
            <div className="cover-bottom">
                {info.name}
            </div>
            {
                displayAuthorPart(displayAuthor)
            }

        </SongsCoverWrapper>
    )
})

CMSongsCover.propTypes = {
    info: PropTypes.object.isRequired,
    right: PropTypes.number,
    displayAuthor: PropTypes.bool,
    play: PropTypes.func
}

CMSongsCover.defaultProps = {
    right: 0,
    displayAuthor: false,
    play: null
}

export default CMSongsCover;
