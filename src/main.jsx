import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Routes/Root';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Home/Home';
import About from './Component/Page/About';
import Services from './Component/Page/Services';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import ServiceDetails from './Component/Page/ServiceDetails';
import AuthProvider from './Component/Provider/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Dashboard from './Component/User/Dashboard';
import Profile from './Component/User/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "/about",
        element:<About></About> ,
      },
      {
        path: "/services",
        element:<Services></Services> ,
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> ,
        loader:()=>fetch('/data.json'),
      },
      {
        path: "/profile",
        element:<Profile></Profile> ,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard> ,
      },
      {
        path: "/login",
        element:<Login></Login> ,
      },
      {
        path: "/register",
        element:<Register></Register> ,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
