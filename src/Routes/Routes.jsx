import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        }
      ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'dashboardHome',
                element: <DashboardHome/>
            }
        ]
    }
]);