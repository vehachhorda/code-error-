import { 
  createBrowserRouter, 
  RouteObject, 
  RouterProvider,

 } from "react-router-dom";
import Layout from "@/layouts";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/layouts/views/Dashboard"));
const Order     = lazy(() => import("@/layouts/views/Order"));
const Products  = lazy(() => import("@/layouts/views/Products"));
const Customers = lazy(() => import("@/layouts/views/Customers"));
const Analytics = lazy(() => import("@/layouts/views/Analytics"));
const Login = lazy(() => import("@/layouts/views/Login"));



const routes: RouteObject[] = [
  {path:"/login", element: <Login />},

  {path: "/",
  element: <Layout />,
  children:[
    {path: "/dashboard", element: <Dashboard />},
    {path: "/order", element: <Order />},
    {path: "/products", element: <Products />},
    {path: "/customers", element: <Customers/>},
    {path: "/analytics", element: <Analytics />},
  ]
}]
const router = createBrowserRouter(routes);

const App = ()=>{
 return <RouterProvider router= {router} />
}

export default App;