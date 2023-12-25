import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import TaskManagementDashboard from "../Pages/Dashboard/TaskManagementDashboard";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import AllTasks from "../Pages/AllTasks/AllTasks";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registration',
            element: <Registration/>
        },
        {
            path: '/allTasks',
            element: <PrivateRoute><AllTasks/></PrivateRoute>
        }
      ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'taskManagementDashboard',
                element: <PrivateRoute><TaskManagementDashboard/></PrivateRoute>
            },
            {
                path: 'userProfile',
                element: <PrivateRoute><UserProfile/></PrivateRoute>
            }
        ]
    }
]);