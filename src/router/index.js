import { Redirect } from 'react-router-dom';

import CMDiscover from "@/pages/discover";
import CMRecommend from '@/pages/discover/c-pages/recommend';
import CMRanking from '@/pages/discover/c-pages/ranking';
import CMPlaylist from '@/pages/discover/c-pages/playlist';

import CMDjradio from '@/pages/discover/c-pages/djradio';
import CMDjradioPage from '@/pages/discover/c-pages/djradio/c-cpns/djradio-page';
import CMCategoryDetail from '@/pages/category-detail';

import CMArtist from '@/pages/discover/c-pages/artist';
import CMAlbum from '@/pages/discover/c-pages/album';
import CMSongDetail from '@/pages/song-detail';

import CMFriend from "@/pages/friend";
import CMMy from "@/pages/my";


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