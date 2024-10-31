import styled from "styled-components";
import { cores } from "../../styles/styles";

export const InfosAgendamentos = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;

    & .infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    & .botao {
        background-color: transparent;
        border: 2px solid ${cores.azulmain};
        padding: 8px;
        border-radius: 8px;
        color: ${cores.azulmain};
        cursor: pointer;
        transition: all ease 0.5s;

        &:hover {
            background-color: ${cores.azulmain};
            color: white;
        }
    }
`

export const CardInfosAgendamentos = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`