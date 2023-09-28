import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../layout/DashboardLayout";
import Stats from "../Pages/Dashboard/Stats";
import Alljobs from "../Pages/Dashboard/Alljobs";
import Addjobs from "../Pages/Dashboard/Addjobs";
import Profile from "../Pages/Dashboard/Profile";
import Editjobs from "../Pages/Dashboard/Editjobs";
import PrivateRoute from "./PrivateRoute";


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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Stats />
            },
            {
                path: '/dashboard/all-jobs',
                element: <Alljobs />
            },
            {
                path: '/dashboard/add-job',
                element: <Addjobs />
            },
            {
                path: '/dashboard/edit-job',
                element: <Editjobs />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },
        ]
    }
])