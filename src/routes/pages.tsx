
import { createBrowserRouter } from "react-router-dom";
import Home from "../sections/Home";  // Ensure Home is a valid React component

const routes = [
    {
        path: "/",
        element: <Home />
    },
];

const router = createBrowserRouter(routes);

export default router;

