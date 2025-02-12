import {useRoutes} from 'react-router-dom';
import Landing from "@/pages/Landing.tsx";
import NotFound from "@/pages/error/NotFound.tsx";
import {ReactNode} from "react";

const Routes = (): ReactNode => {
    return useRoutes([
        { path: "/", element: <Landing /> },
        { path: "*", element: <NotFound /> }
    ]) as ReactNode;
};
export default Routes;
