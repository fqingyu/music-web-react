import { Redirect } from 'react-router-dom';

import CMDiscover from "@/pages/discover";
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
        component: CMDiscover
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