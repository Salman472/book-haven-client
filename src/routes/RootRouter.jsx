import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import MyBooks from "../pages/MyBooks";
import Login from "../components/Login";

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
          element:<AddBook/>
        },
        {
          path:'/my-books',
          element:<MyBooks/>
        },
        {
          path:'/login',
          Component:Login
        },
    ]
  },
]);