import { createBrowserRouter } from "react-router-dom";
import Home from "./Landing/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
])
