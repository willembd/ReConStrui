import { createBrowserRouter, Navigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

import Home from "../Pages/Home/home";
import Pedidos from "../Pages/Pedidos/pedidos";
import PaginaLogin from "../Pages/PaginaLogin/paginaLogin";
import CadastroEmpresa from "../Pages/CadastroEmpresa/cadastroEmpresa";
import EsqueceuSenha from "../Pages/EsqueceuSenha/esqueceuSenha";
import Cartao from "../Pages/PagamentoCartao/cartao";
import CadastroUsuario from "../Pages/CadastroUsuario/cadastroUsuario.jsx";
import Pix from "../Pages/PagamentoPix/pix";
import Confirmacao from "../Pages/ConfirmacaoPedidos/confirmacaoPedidos.jsx";
import OrcamentosEmpresa from "../Pages/OrcamentosEmpresa/orcamentosEmpresa.jsx";
import ConfirmacaoEntrega from "../Pages/ConfirmacaoEntrega/confirmacaoEntrega.jsx";
import EntregasEmpresa from "../Pages/EntregasEmpresa/entregasEmpresa.jsx";
import SolicitacaoPedidoEmp from "../Pages/SolicitacaoPedidoEmp/solicitacaoPedidos.jsx";
import SolicitacaoEntregaRetirada from "../Pages/SolicitacaoEntregasRetirada/solicitacaoEntregaRetirada.jsx";
import HistoricoEmpresa from "../Pages/HistoricoEmpresa/historicoEmpresa.jsx";
import PerfilUsuario from "../Pages/PerfilUsuario/perfilUsuario.jsx";
import PerfilEmpresa from "../Pages/PerfilEmpresa/perfilEmpresa.jsx";
import ProdutosEmpresa from "../Pages/ProdutosEmpresa/produtosEmpresa.jsx";
import HistoricoUsuario from "../Pages/HistoricoUsuario/historicoUsuario.jsx";
import PedidosOrcamentoUsuario from "../Pages/PedidosOrcamentoUsuario/pedidosOrcamentoUsuario.jsx";


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
     {
        path: "/pedidos",
        element: (
            <PrivateRoute element={<Pedidos />} allowedTypes={["usuario"]} />
        ),
    },
    {
        path: "/pagina/login",
        element: <PaginaLogin />,
    },
    {
        path: "/cadastro/usuario",
        element: <CadastroUsuario />,
    },
    {
        path: "/cadastro/empresa",
        element: <CadastroEmpresa />,
    },
    {
        path: "/esqueceu/senha",
        element: <EsqueceuSenha />,
    },
    {
        path: "/pag/cartao",
        element: <Cartao />,
    },
    {
        path: "/pag/pix",
        element: <Pix />,
    },
    {
        path: "/orcamentos/empresa",
        element: <OrcamentosEmpresa />,
    },
    {
        path: "/confirmacao/pedidos",
        element: <Confirmacao />,
    },
    {
        path: "/confirmacao/entrega",
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
        path: "/pedidos/usuario",
        element: <PedidosOrcamentoUsuario />,
    },
    {
        path: "/historico/usuario",
        element: <HistoricoUsuario />,
    },
    {
        path: "/solicitacao/pedido",
        element: <SolicitacaoPedidoEmp />
    },
    {
        path: "/solicitacao/entrega",
        element: <SolicitacaoEntregaRetirada />
    },
    {
        path: "/historico/empresa",
        element: <HistoricoEmpresa />
    },
    {
        path: "/perfil/usuario",
        element: <PerfilUsuario/>
    },
    {
        path: "/perfil/empresa",
        element: <PerfilEmpresa />
    },
    {
        path: "/produtos/empresa",
        element: <ProdutosEmpresa/>
    }

    ]);
