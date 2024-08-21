import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home/home";
import Pedidos from "../Pages/Pedidos/pedidos";
import PaginaLogin from "../Pages/PaginaLogin/paginaLogin";
import CadastroEmpresa from "../Pages/CadastroEmpresa/cadastroEmpresa";
import EsqueceuSenha from "../Pages/EsqueceuSenha/esqueceuSenha";
import Cartao from "../Pages/PagamentoCartao/cartao";
import CadastroUsuario from "../Pages/CadastroUsuario/cadastroUsuario.jsx";
import Pix from "../Pages/PagamentoPix/pix";
import NovosOrcamentoEmp from "../Pages/NovosOrcamentoEmpresa/novosOrcamentoEmp";
import Confirmacao from "../Pages/ConfirmacaoPedidos/confirmacaoPedidos.jsx";
import OrcamentosEmpresa from "../Pages/OrcamentosEmpresa/orcamentosEmpresa.jsx";
import ConfirmacaoEntrega from "../Pages/ConfirmacaoEntrega/confirmacaoEntrega.jsx";
import EntregasEmpresa from "../Pages/EntregasEmpresa/entregasEmpresa.jsx";
import RetiradasEmpresa from "../Pages/RetiradasEmpresa/retiradasEmpresa.jsx";
import FinalizadosEmpresa from "../Pages/FinalizadosEmpresa/finalizadosEmpresa.jsx";
import { jwtDecode } from "jwt-decode";

function PrivateRoute({ element, allowedTypes }) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" />;
    }

    try {
        const decodedToken = jwtDecode(token);

        if (allowedTypes.includes(decodedToken.type)) {
            return element;
        } else {
            return <Navigate to="/" />;
        }
    } catch (error) {
        console.error("Invalid token", error);
        return <Navigate to="/" />;
    }
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    // {
    //     path: "/pedidos",
    //     element: (
    //         <PrivateRoute element={<Pedidos />} allowedTypes={["usuario"]} />
    //     ),
    // },
    {
        path: "/paginalogin",
        element: <PaginaLogin />,
    },
    {
        path: "/pedidos",
        element: <Pedidos/>,
    },
    {
        path: "/cadastrousuario",
        element: <CadastroUsuario />,
    },
    {
        path: "/cadastroempresa",
        element: <CadastroEmpresa />,
    },
    {
        path: "/esqueceusenha",
        element: <EsqueceuSenha />,
    },
    {
        path: "/pagamentocartao",
        element: <Cartao />,
    },
    {
        path: "/pagamentopix",
        element: <Pix />,
    },
    {
        path: "/novosOrcamentoEmp",
        element: <NovosOrcamentoEmp />,
    },
    {
        path: "/orcamentosempresa",
        element: <OrcamentosEmpresa />,
    },
    {
        path: "/confirmacaopedidos",
        element: <Confirmacao />,
    },
    {
        path: "/confirmacaoentrega",
        element: <ConfirmacaoEntrega />,
    },
    {
        path: "/entregasempresa",
        element: (
            <PrivateRoute
                element={<EntregasEmpresa />}
                allowedTypes={["empresa"]}
            />
        ),
    },
    {
        path: "/retiradasempresa",
        element: <RetiradasEmpresa />,
    },
    {
        path: "/finalizadosempresa",
        element: <FinalizadosEmpresa />,
    },
]);
