import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <App></App>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])