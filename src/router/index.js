import CMDiscover from "@/pages/discover";
import CMFriend from "@/pages/friend";
import CMMy from "@/pages/my";

const routes = [
    {
        path: "/",
        exact: true,
        component: CMDiscover
    },
    {
        path: "/my",
        exact: true,
        component: CMMy
    },
    {
        path: "/friend",
        exact: true,
        component: CMFriend
    },
];

export default routes;