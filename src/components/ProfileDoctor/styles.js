import styled from "styled-components";
import { cores } from "../../styles/styles";

export const InfosDoctorContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: ${cores.azulmain};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & .itens-s-v {
        display: flex;
        width: 100%;
        align-items: start;
        justify-content: center;
        position: fixed;
        top: 16px;

        & .servicos {
            display: flex;
            justify-content: center;
            width: 100%;

            & h1 {
                color: white;
            }
        }
    
        & .voltar {
            display: flex;
            position: absolute;
            justify-content: start;
            width: 100%;
            margin-left: 32px;
            font-size: 40px;

            & .seta {
                cursor: pointer;
                transition: all ease 0.3s;
                color: ${cores.branco};

                &:hover {
                    color: ${cores.preto200};
                }
            }
        }
    }
`

export const Doutor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    & h2 {
        color: white;
    }

    & p {
        color: white;
    }

    & .image {
        width: 128px;
        height: 128px;
        background-color: ${cores.branco};
        padding: 16px;
        border: 3px solid ${cores.preto200};
        border-radius: 50%;
        margin-bottom: 16px;
    }
`