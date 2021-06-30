import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ThemeHeaderSmallWrapper } from './style'

const CMThemeHeaderSmall = memo(function (props) {
    const { title, more, moreLink } = props;

    const displayMoreLinks = useCallback((more) => {
        if(more) {
            return (
                <NavLink to={moreLink}>查看全部&gt;</NavLink>
            )
        }
        else {
            return;
        }
    }, [moreLink])

    return (
        <ThemeHeaderSmallWrapper>
            <span className="title">{title}</span>
            {
                displayMoreLinks(more)
            }
        </ThemeHeaderSmallWrapper>
    )
})

CMThemeHeaderSmall.propTypes = {
    title: PropTypes.string.isRequired,
    more: PropTypes.bool,
    moreLink: PropTypes.string
}

CMThemeHeaderSmall.defaultProps = {
    more: false,
    moreLink: ""
}



export default CMThemeHeaderSmall;
