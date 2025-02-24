import {useRoutes} from 'react-router-dom';
import {ReactNode} from "react";
import Landing from "@/pages/Landing.tsx";

const Routes = (): ReactNode => {
    return useRoutes([
        { path: "/", element: <Landing /> },
    ]) as ReactNode;
};
export default Routes;
