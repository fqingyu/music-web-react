import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
    getSizeImage,
    getCount
} from "@/utils/format-utils";

import { SongsCoverWrapper } from './style'

const CMSongsCover = memo(function (props) {
    const { info, right, displayAuthor } = props;
    function displayAuthorPart(displayAuthor) {
        if (displayAuthor) {
            return (
                <div className="cover-source">
                    by {info.copywriter || info.creator.nickname}
                </div>
            )
        }
        else {
            return;
        }
    }

    return (
        <SongsCoverWrapper right={right}>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="songs-cover" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon headset"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play-icon"></i>
                    </div>
                </div>
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
    displayAuthor: PropTypes.bool
}

CMSongsCover.defaultProps = {
    right: 0,
    displayAuthor: false
}

export default CMSongsCover;