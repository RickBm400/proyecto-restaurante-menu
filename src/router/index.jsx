import { createBrowserRouter } from "react-router-dom";
import  Home  from "pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
])
