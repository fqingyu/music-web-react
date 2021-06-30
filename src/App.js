import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '@/router';
import store from '@/store'

import CMAppHeader from '@/components/app-header';
import CMAppFooter from '@/components/app-footer';
import CMAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
    return (
        <Provider store={store} >
            <HashRouter>
                <CMAppHeader />
                {renderRoutes(routes)}
                <CMAppFooter />
                <CMAppPlayerBar />
            </HashRouter>
        </Provider >
    )
})
