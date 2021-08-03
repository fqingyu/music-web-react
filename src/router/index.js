import { Redirect } from 'react-router-dom';
import React, { lazy } from 'react';

const CMDiscover = lazy(() => import("@/pages/discover"));
const CMRecommend = lazy(() => import("@/pages/discover/c-pages/recommend"));
const CMRanking = lazy(() => import("@/pages/discover/c-pages/ranking"));
const CMPlaylist = lazy(() => import("@/pages/discover/c-pages/playlist"));

const CMDjradio = lazy(() => import("@/pages/discover/c-pages/djradio"));
const CMDjradioPage = lazy(() => import("@/pages/discover/c-pages/djradio/c-cpns/djradio-page"));
const CMCategoryDetail = lazy(() => import("@/pages/category-detail"));

const CMArtist = lazy(() => import("@/pages/discover/c-pages/artist"));
const CMAlbum = lazy(() => import("@/pages/discover/c-pages/album"));
const CMSongDetail = lazy(() => import("@/pages/song-detail"));

const CMFriend = lazy(() => import("@/pages/friend"));
const CMMy = lazy(() => import("@/pages/my"));

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component: CMDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: CMRecommend
            },
            {
                path: "/discover/ranking",
                component: CMRanking
            },
            {
                path: "/discover/playlist",
                component: CMPlaylist
            },
            {
                path: "/discover/djradio",
                component: CMDjradio,
                routes: [
                    {
                        path: "/discover/djradio",
                        exact: true,
                        component: CMDjradioPage
                    },
                    {
                        path: "/discover/djradio/category",
                        component: CMCategoryDetail
                    }
                ]
            },
            {
                path: "/discover/artist",
                component: CMArtist
            },
            {
                path: "/discover/album",
                component: CMAlbum
            },
        ]
    },
    {
        path: "/my",
        component: CMMy
    },
    {
        path: "/friend",
        component: CMFriend
    },
    {
        path: "/song",
        component: CMSongDetail
    }

];

export default routes;