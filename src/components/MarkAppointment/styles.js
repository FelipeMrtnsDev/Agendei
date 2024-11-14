import styled from "styled-components";
import { cores } from "../../styles/styles";

export const BotaoAgendar = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;

    & button {
        background-color: ${cores.azulmain};
        padding-inline: 48px;
        padding-block: 12px;
        border: none;
        border-radius: 8px;
        color: ${cores.branco};
        cursor: pointer;
        transition: all ease 0.3s;
        text-decoration: none;
    }
`
