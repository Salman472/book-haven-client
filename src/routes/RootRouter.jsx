import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import MyBooks from "../pages/MyBooks";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Profile from "../components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
          path:'/all-books',
          element:<AllBooks/>
        },
        {
          path:'/add-book',
          element:<PrivateRoute><AddBook/></PrivateRoute>
        },
        {
          path:'/my-books',
          element:<PrivateRoute><MyBooks/></PrivateRoute>
        },
        {
          path:'/profile',
          element:<PrivateRoute><Profile/></PrivateRoute>
        },
        {
          path:'/login',
          Component:Login
        },
        {
          path:'/register',
          Component:Register
        },
    ]
  },
]);