import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home";
import Pedidos from "../Pages/Pedidos/pedidos";
import PaginaLogin from "../Pages/PaginaLogin/paginaLogin";
import PaginaCadastro from "../Pages/PaginaCadastro/paginaCadastro";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/pedidos",
        element: <Pedidos />,
    },
    {
        path: "/paginalogin",
        element: <PaginaLogin />,
    },
    {
        path: "paginacadastro",
        element: <PaginaCadastro/>,
    },
]);
