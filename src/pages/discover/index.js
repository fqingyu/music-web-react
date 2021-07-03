import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import CMDiscoverWrapper from '@/components/discover-wrapper';



export default memo(function CMDiscover(props) {
    const { route } = props;

    return (
        <CMDiscoverWrapper innerComponent={renderRoutes(route.routes)} />
    )
})
