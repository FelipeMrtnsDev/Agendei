import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Lateral = styled.aside`

    width: 550px;
    height: 100%;
    background-color: ${cores.branco};
    border-right: 2px solid ${cores.preto200};

    & .icons {
        display: flex;
        flex-direction: column;
        margin-left: 64px;
        margin-top: 64px;

        & a {
            margin-bottom: 48px;
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        & svg {
            font-size: 48px;
            color: ${cores.azulmain};
            margin-right: 16px;
        }

        & p {
            font-size: 24px;
            color: ${cores.azulmain};
        }

    }

    & .logo {
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 32px;
    
        & svg {
            width: 100%;
        }
}
`