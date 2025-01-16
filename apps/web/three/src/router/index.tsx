import { createBrowserRouter } from "react-router-dom";
import { Kitchen } from "../pages/Kitchen";
import SpinningBox from "../pages/SpinningBox";
import GameLand from "../pages/GameLand";

const router = createBrowserRouter([
    {
        path: '',
        element: <SpinningBox />,
    },
    {
        path: '/kitchen',
        element: <Kitchen />
    },
    {
        path: '/game-land',
        element: <GameLand />
    }
])

export default router;