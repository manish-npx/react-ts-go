import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./layouts/Layout"
import About from "./pages/About"
import BlogDetails from "./pages/BlogDetails"
import Blogs from "./pages/Blogs"
import FormAction from "./pages/FormAction"
import Home from "./pages/Home"
import Todos from "./pages/todos/todos"


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,       // Layout applied here
        children: [
            { index: true, Component: Home },   // / route
            { path: "blogs", Component: Blogs }, // /blogs route
            { path: "/blog/:blogid", Component: BlogDetails },// /blog route
            { path: "/form", Component: FormAction }, // /blog route
            { path: "/todos", Component: Todos }, // /blog route
            { path: "/about", Component: About }, // /blog route
        ]
    }
])

const AppRoutes = () => <RouterProvider router={router} />

export default AppRoutes
