import {useRoutes} from 'react-router-dom';
import Landing from "@/pages/Landing.tsx";
import NotFound from "@/pages/error/NotFound.tsx";
import {ReactNode} from "react";
import Card from "@/pages/Card.tsx";

const Routes = (): ReactNode => {
    return useRoutes([
        { path: "/", element: <Landing /> },
        { path: "/card", element: <Card /> },
        { path: "*", element: <NotFound /> }
    ]) as ReactNode;
};
export default Routes;
