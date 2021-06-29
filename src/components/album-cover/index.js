import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style'

const CMAlbumCover = memo(function (props) {
    // inner state
    const { info, size, width, bgp } = props;

    return (
        <AlbumWrapper size={size} width={width} bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImage(info.picUrl, width)} alt="" />
                <NavLink title={info.name} to={`/album?id=${info.id}`} className="cover sprite_cover"></NavLink>
            </div>
            <div className="album-info">
                <NavLink title={info.name} to={`/album?id=${info.id}`} className="name text-nowrap">{info.name}</NavLink>
                <NavLink to={`/artist?id=${info.artist.id}`} className="artist text-nowrap">{info.artist.name}</NavLink>
            </div>
        </AlbumWrapper>
    )
})

CMAlbumCover.propTypes = {
    info: PropTypes.object.isRequired,
    size: PropTypes.number,
    width: PropTypes.number,
    bgp: PropTypes.number
}

CMAlbumCover.defaultProps = {
    size: 100,
    width: 118,
    bgp: -570
}

export default CMAlbumCover;
