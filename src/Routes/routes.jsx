import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home";
import Pedidos from "../Pages/Pedidos/pedidos";
import PaginaLogin from "../Pages/PaginaLogin/paginaLogin";
import CadastroEmpresa from "../Pages/CadastroEmpresa/cadastroEmpresa";
import EsqueceuSenha from "../Pages/EsqueceuSenha/esqueceuSenha"
import Cartao from "../Pages/PagamentoCartao/cartao";
import CadastroUsuario from "../Pages/cadastroUsuario/cadastroUsuario";
import Pix from "../Pages/PagamentoPix/pix";

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
        path: "/cadastrousuario",
        element: <CadastroUsuario />
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
    },
    {
        path: '/pagamentopix',
        element: <Pix/>
    }
    
]);
