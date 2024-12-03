import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Container=styled.header`
    display: flex;
    background-color: ${cores.azulmain};
    width: 100%;
    height: 60px;

    & .container-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & .perfil {
            display: flex;
            align-items: center;
            margin-right: 24px;
            cursor: pointer;

            & .desconectar {
                color: ${cores.vermelho};
            }

            & h4 {
                color: ${cores.branco};
            }

            & .seta {
                color: ${cores.branco};
            }
        }
    }

    & .imagem {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 74px;
        margin-left: 24px;
    }

    & img {
        color: ${cores.branco};
    }  

    & .links {
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items: center;

        & .link {
            text-decoration: none;
        }

        & h2 {
            font-size: 16px;
            color: ${cores.branco};
            font-weight: 400;
        }

        & .activated {
            font-weight: bold;
        }
    }
`