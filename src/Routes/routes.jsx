import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home";
import Pedidos from "../Pages/Pedidos/pedidos";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/pedidos',
        element: <Pedidos/>
    }
])
