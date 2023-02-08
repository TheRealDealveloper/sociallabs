import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/about";
import Home from "../components/home/home";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import SharedLayout from "../components/layout/SharedLayout";
import Login from "../components/login/login";
import Register from "../components/register/register";

export const ROOT = "/";
export const LOGIN = "/login";
export const RESGISTER = "/register";

export const PROTECTED = "/protected";
export const HOME = "/protected/home";
export const ABOUT = "/protected/about";
export const CONTACT = "/protected/contact";

export const router = createBrowserRouter([
    {
        path: ROOT, 
        element: <SharedLayout/>,
        children: [
            {
                path: LOGIN,
                element: <Login/>
            },
            {
                path: RESGISTER,
                element: <Register/>
            }
        ]
    },
    {
        path: PROTECTED,
        element: <ProtectedLayout/>,
        children: [
            {
                path: HOME,
                element: <Home/>
            },
            {
                path: ABOUT,
                element: <About/>
            },
        ]
    }
]);