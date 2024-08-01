import styled from "styled-components";

export const BACKGROUND_STYLE = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgb(0,0,0, 0.7);
    z-index: 1000;
`

export const MODAL_STYLE = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 250px 400px;
    background-color:#fff;
    border-radius: 10px;
    color:black
`