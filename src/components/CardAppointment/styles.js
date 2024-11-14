import styled from "styled-components";
import { cores } from "../../styles/styles";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 800px;
    height: 184px;
    background-color: ${cores.branco100};
    border: 2px solid ${cores.cinza200};
    border-radius: 16px;
    margin-bottom: 32px;

    & .titulos {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 12px;

        & p {
            font-size: 20px;
        }
    }

    & .infos {
        display: flex;
        gap: 8px;

        & .data {
            display: flex;
            align-items: center;
        }

        & .hourly {
            display: flex;
            align-items: center;
        }
    }

    & button {
        background-color: ${cores.vermelho};
        padding-inline: 32px;
        padding-block: 12px;
        border: none;
        border-radius: 8px;
        color: ${cores.branco};
        cursor: pointer;
        transition: all ease 0.3s;
        text-decoration: none;
        margin-top: 16px;

        &:hover {
            background-color: red;
        }
    }
`