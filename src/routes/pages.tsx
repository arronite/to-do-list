
import { createBrowserRouter } from "react-router-dom";
import Home from "../sections/Home";
import Hero from "../components/HomeComponents/Hero";
import Login from "../components/HomeComponents/Login";
interface Routes {
    path: string,
    element: React.ReactNode,
    children?: Routes[]
}

const routes: Routes[] = [
    {
        path: "/",
        element: <Home />,
        children: [{
            path: "/",
            element: <Hero />
        },
        {
            path: "/login",
            element: <Login />

        }]
    },
];

const router = createBrowserRouter(routes);

export default router;

