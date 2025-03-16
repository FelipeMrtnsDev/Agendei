import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Container = styled.tr`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 10%;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
    position: relative;
    margin-right: 12px;

    & td {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    button {
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
        margin-inline: 8px;

        &:hover {
            background-color: ${cores.azulclaro};
            color: ${cores.azulmain};
        }
    }
`