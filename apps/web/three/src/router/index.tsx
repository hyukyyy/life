import { createBrowserRouter } from "react-router-dom";
import { Kitchen } from "../pages/Kitchen";

import GameLand from "../pages/GameLand";
import Card from "../pages/Card";
import { City } from "../pages/City";
import Playground from "../pages/Playground";
import { GravityPage } from "../pages/Gravity";

const router = createBrowserRouter([
    {
        path: '',
        element: <Playground />,
    },
    {
        path: '/kitchen',
        element: <Kitchen />
    },
    {
        path: '/game-land',
        element: <GameLand />
    },
    {
        path: '/card',
        element: <Card />
    },
    {
        path: '/city',
        element: <City />
    },
    {
        path: '/gravity',
        element: <GravityPage />
    },
])

export default router;