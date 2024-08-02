import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home";
import Pedidos from "../Pages/Pedidos/pedidos";
import PaginaLogin from "../Pages/PaginaLogin/paginaLogin";
import PaginaCadastro from "../Pages/PaginaCadastro/paginaCadastro";
import CadastroEmpresa from "../Pages/CadastroEmpresa/cadastroEmpresa";
import EsqueceuSenha from "../Pages/EsqueceuSenha/esqueceuSenha"
import Cartao from "../Pages/PagamentoCartao/cartao";

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
    {
        path: '/cadastroempresa',
        element: <CadastroEmpresa/>
    },
    {
        path: '/esqueceusenha',
        element: <EsqueceuSenha/>
    },
    {
        path: '/pagamentocartao',
        element: <Cartao/>
    }
    
]);
