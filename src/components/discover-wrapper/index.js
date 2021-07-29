import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { dicoverMenu } from '@/services/local-data';

import { DiscoverWrapper, TopMenu } from './style'

export default memo(function CMDiscoverWrapper(props) {
    const { innerComponent } = props;

    return (
        <DiscoverWrapper>
            <div className="bar">
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link} replace>
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
            { innerComponent }
        </DiscoverWrapper>
    )
})
