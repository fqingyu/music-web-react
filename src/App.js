import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';

import CMAppHeader from '@/components/app-header';
import CMAppFooter from '@/components/app-footer';

export default memo(function App() {
    return (
        <HashRouter>
            <CMAppHeader />
            {renderRoutes(routes)}
            <CMAppFooter />
        </HashRouter>
    )
})
