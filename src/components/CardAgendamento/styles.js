import styled from "styled-components";
import { cores } from "../../styles/styles";

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${cores.branco};
    width: 100%;
    margin-top: 64px;
`

export const DoctorsInfo = styled.table`
    width: 60%;
    background-color: ${cores.branco100};
    padding: 24px;
    border-radius: 16px;
    border: 2px solid ${cores.cinza100};
    
    & .infos-card {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    & .titulo {
        display: flex;
        align-items: center;
        
        & img {
            margin-right: 16px;
            width: 48px;
            height: 48px;
        }
    }

    & .servico {
        display: flex;
        flex-direction: column;
        align-items: center;

        & h4 {
            font-size: 20px;
        }
    }

    & .delete-update {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        & svg {
            font-size: 32px;
            padding: 4px;
            border-radius: 6px;
            color: white;
            cursor: pointer;
        }

        & .editar {
            background-color: ${cores.azulmain};
            transition: all ease 0.3s;

            &:hover {
                background-color: blue;
            }
        }

        & .apagar {
            background-color: ${cores.vermelho};
            transition: all ease 0.3s;

            &:hover {
                background-color: red;
            }
        }
    }
`
