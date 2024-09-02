import styled from "styled-components";

import PlanoFundo from "../../assets/planodefundo.svg";

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 99.1rem;
    background-image: url(${PlanoFundo});
    background-repeat: no-repeat;
    width: 100%;

    @media screen and (max-width:410px) {
        width: 95%;
        
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #228137;
    font-weight: bold;
    margin-top: 35px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 500px) {
        font-size: 30px;
    }
`;

export const Container = styled.div`
    flex-direction: column;
    gap: 35px;
    width: 900px;
    height: 1456px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;

    @media screen and (max-width: 876px) {
       width: 700px;
        margin-top: 20px;
    }
    @media screen and (max-width: 716px) {
       width: 600px;
    }
    @media screen and (max-width: 620px) {
        width: 500px;
    }
    @media screen and (max-width: 530px) {
       width: 400px;
    }
`;

export const ContainerSmall = styled.div`
    width: 615px;
    height: 279px;
    background-color: rgba(231, 230, 230, 0.5);
    padding: 19px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 778px) {
        width: 95%;
        gap: 20px;
        height: 289px;
    }
`;

export const FlexCaixa = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 876px) {
        width: 95%;
        gap: 261px;
    }
`;

export const Caixa1 = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 618px;
    height: 213px;
    background-color: white;
    border: 1px solid #e0e0e0;
    display: flex;

    @media screen and (max-width: 876px) {
        width: 95%;
        gap: 261px;
    }
    @media screen and (max-width: 720px) {
        gap: 120px;
    }
    @media screen and (max-width: 530px) {
        gap: 50px;
    }

    @media screen and (max-width: 410px) {
        gap: 229px;
        height: 230px;
    }
`;

export const FlexTextChek = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 680px) {
        width: 85%;
        gap: -11%;
        margin-right: 10px;
    }

    @media screen and (max-width: 410px) {
        width: 9%;
    }
`;

export const Button = styled.button`
    left: 22px;
    -webkit-box-shadow: -3px 0 3px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 3px 0 -3px 0 rgba(0, 0, 0, 0.2);
    background: #2ac176;
`;

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-right: 35px;
    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 500px) {
        margin-right: 241px;
    }
    @media screen and (max-width: 410px) {
        width: 188%;
        height: 22px;
        margin-right: 320px;
    }
    
`;

export const TextPausar = styled.p`
    color: green;
    margin-right: 35px;

    @media screen and (max-width: 500px) {
        margin-right: 241px;
    }
    @media screen and (max-width: 410px) {
        margin-right: 320px;
        font-size: 12px;
    }
`;

export const Checkbox = styled.input`
  
    width: 0;
    height: 0;

    @media screen and (max-width: 618px) {
      width:50%;
    }
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #228137;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;

        @media screen and (max-width: 410px) {
            height: 15px;
            width: 14px;
            left: 7px;
            bottom: 3px;
        }
    }

    ${Checkbox}:checked + & {
        background-color: #f61313;
    }

    ${Checkbox}:checked + &:before {
        transform: translateX(26px);
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 38px;
`;
export const TextProdutos = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #228137;
    @media screen and (max-width: 530px) {
        font-size: 0.8rem;
    }
`;

export const NameEmpresa = styled.div`
    font-size: 1rem;
    color: #af7503;
     @media screen and (max-width: 530px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 410px) {
        white-space: nowrap;
    }
`;

export const Logo = styled.img`
    height: 144px;
    width: 151px;
    margin-top: 11px;

    @media screen and (max-width: 882px) {
        height: 99px;
        width: 151px;
    }
    @media screen and (max-width: 530px) {
        height: 99px;
        width: 100px;
    }
`;