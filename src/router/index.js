import { Redirect } from 'react-router-dom';

import CMDiscover from "@/pages/discover";
import CMFriend from "@/pages/friend";
import CMMy from "@/pages/my";
import CMRecommend from '@/pages/discover/c-pages/recommend';
import CMRanking from '@/pages/discover/c-pages/ranking';
import CMSongs from '@/pages/discover/c-pages/songs';
import CMDjradio from '@/pages/discover/c-pages/djradio';
import CMArtist from '@/pages/discover/c-pages/artist';
import CMAlbum from '@/pages/discover/c-pages/album';

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
                path: "/discover/songs",
                component: CMSongs
            },
            {
                path: "/discover/djradio",
                component: CMDjradio
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
];

export default routes;