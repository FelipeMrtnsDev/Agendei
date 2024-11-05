import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Lateral = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 500px;
    height: 100%;
    background-color: ${cores.azulmain};
    border-right: 2px solid ${cores.preto200};

    & .icons {
        display: flex;
        flex-direction: column;
        margin-left: 64px;
        margin-top: 64px;

        & a {
            margin-bottom: 48px;
            display: flex;
            text-decoration: none;
        }

        & svg {
            font-size: 48px;
            color: ${cores.branco};
            margin-right: 16px;
        }

        & .inicio {
            font-size: 24px;
            color: ${cores.branco};
            transition: all ease 0.5s;
        }

        & .dashboard {
            font-size: 24px;
            color: ${cores.branco};
            transition: all ease 0.5s;
        }

            &:hover {
                color: ${cores.preto200};
            }
        }

    & .logo {
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 16px;
        padding-bottom: 16px;
        background-color: ${cores.branco};
    
        & svg {
            width: 100%;
        }
}
`