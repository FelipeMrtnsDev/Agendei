import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-inline: 32px;
    margin-top: 48px;

    & .novo-agendamento {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        & h1 {
            margin-right: 32px;
            margin-bottom: 0px;
        }
    }

    & .btn-agendamento {
        padding: 10px;
        border-radius: 6px;
        background-color: transparent;
        border: 1px solid ${cores.azulmain};
        color: ${cores.azulmain};
        transition: all ease 0.3s;
        cursor: pointer;

        &:hover {
            background-color: ${cores.azulmain};
            color: ${cores.branco};
        }
    }

    & .filtro {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;

        & select {
            padding: 8px;
            border-radius: 6px;
            border: 1px solid ${cores.cinza100};
            margin-right: 32px;
        }

        & button {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            margin-top: 32px;
            padding: 12px;
            padding-inline: 32px;
            background-color: ${cores.azulmain};
            border: none;
            border-radius: 8px;
            color: ${cores.branco};
            font-size: 16px;
            cursor: pointer;
            transition: all ease 0.3s;
            text-decoration: none;

            &:hover {
                background-color: ${cores.azulclaro};
                color: ${cores.azulmain};
            }
        }

        & .date {
            width: 156px;
            margin-inline: 12px;
            padding: 10px;

            & .right {
                margin-right: 32px;
            }
        }
    }
`