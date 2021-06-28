import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { DiscoverWrapper, TopMenu } from './style'
import { dicoverMenu } from '@/services/local-data'


export default memo(function CMDiscover(props) {
    const { route } = props;

    return (
        <DiscoverWrapper>
            <div className="bar">
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>
                                        {item.title}
                                        {
                                            item.title === '歌单' ? <span className="icon" /> : null
                                        }
                                    </NavLink>

                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
