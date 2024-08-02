import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    margin: 5px auto;
    width: 300px;

    input[type="text"] {
        font-size: 20px;
        width: 100%;
        border: none;
        border-bottom: 4px solid #1C4525;
        padding: 5px 0;
        background-color: transparent;
        outline: none;
    }

    .label {
        position: absolute;
        top: 5px;
        left: 0;
        color: #228137;
        transition: all 0.3s ease;
        pointer-events: none;
    }

    input[type="text"]:focus + .label,
    input[type="text"]:valid + .label {
        top: -20px;
        font-size: 16px;
        color: #40bd0f;
    }

    .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: rgba(28, 69, 37, 0.94);
        transition: all 0.3s ease;
    }

    input[type="text"]:focus ~ .underline {
        height: 3px;
    }
`;
