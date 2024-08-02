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
    max-height: 93%;
    max-width: 60%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: aliceblue;
    color: black;
    width: 900px;
    height: 700px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 78px;
    padding: 0 30px;
`
