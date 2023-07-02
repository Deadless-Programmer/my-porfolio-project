import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Pages from "../Pages/Pages";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Pages></Pages>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
          path:'/project',
          element:<Projects></Projects>
        }
      ]
    },
  ]);