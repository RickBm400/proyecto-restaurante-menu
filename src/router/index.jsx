import { createBrowserRouter } from "react-router-dom";
import  Layout  from "pages/Layout";
import About from "pages/AboutPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: "/contact",
                element: <About/>
            }
        ]
    },
])
