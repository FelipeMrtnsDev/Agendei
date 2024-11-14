import styled from "styled-components";
import { cores } from "../../styles/styles";

export const ContainerMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        width: 128px;
        height: 128px;
        margin-bottom: 24px;
    }

    & button {
        background-color: ${cores.azulmain};
        padding-inline: 32px;
        padding-block: 12px;
        border: none;
        border-radius: 8px;
        color: ${cores.branco};
        cursor: pointer;
        transition: all ease 0.3s;
        text-decoration: none;
        display: flex;
        align-items: center;

        &:hover {
            background-color: ${cores.azulclaro};
            color: ${cores.azulmain};
        }

        & svg {
            font-size: 24px;
            margin-right: 8px;
        }
    }

    & .link {
        text-decoration: none;
    }
`