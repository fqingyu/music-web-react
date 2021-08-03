import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '@/router';
import store from '@/store'

import CMAppHeader from '@/components/app-header';
import CMAppFooter from '@/components/app-footer';
import CMAppPlayerBar from '@/pages/player/app-player-bar'
import { Skeleton } from 'antd';

export default memo(function App() {
    return (
        <Provider store={store} >
            <HashRouter>
                <CMAppHeader />
                <Suspense fallback={<Skeleton active className="wrap-v2"/>}>
                {renderRoutes(routes)}
                </Suspense>
                <CMAppFooter />
                <CMAppPlayerBar />
            </HashRouter>
        </Provider >
    )
})
