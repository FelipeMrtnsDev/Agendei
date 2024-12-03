import styled from "styled-components";
import { cores } from "../../styles/styles";

export const BoasVindasContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;

    & .infos-boasvindas {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & img {
            width: 300px;
            height: 200px;
        }
    }

    & .btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        margin-top: 32px;
        padding: 12px;
        background-color: ${cores.azulmain};
        border: none;
        border-radius: 8px;
        color: ${cores.branco};
        font-size: 16px;
        cursor: pointer;
        transition: all ease 0.3s;
        text-decoration: none;

        & p {
            margin: 0;
        }

        & svg {
            font-size: 24px;
        }

        &:hover {
            background-color: blue;
        }
    }
`