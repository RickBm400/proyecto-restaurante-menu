import { createBrowserRouter } from "react-router-dom";
import Home from './Home'
import Main from "../components/MainDocument";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                index: true,
                element: <Main></Main>
            },
        ]
    },

])

