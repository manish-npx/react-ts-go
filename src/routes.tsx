import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./layouts/Layout"
import BlogDetails from "./pages/BlogDetails"
import Blogs from "./pages/Blogs"
import FormAction from "./pages/FormAction"
import Home from "./pages/Home"


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,       // Layout applied here
        children: [
            { index: true, Component: Home },   // / route
            { path: "blogs", Component: Blogs }, // /blogs route
            { path: "/blog/:blogid", Component: BlogDetails },// /blog route
            { path: "/form", Component: FormAction }, // /blog route
        ]
    }
])

const AppRoutes = () => <RouterProvider router={router} />

export default AppRoutes
