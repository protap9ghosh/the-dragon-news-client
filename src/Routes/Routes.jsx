import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Discover from "../pages/Shared/Discover/Discover";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/learn-more",
                        element: <Discover></Discover>
                    }
                ]
            },
        ],
    },
]);

export default router;
