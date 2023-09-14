import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "Signup",
                element: <SignUp />
            }
        ]
    }
])