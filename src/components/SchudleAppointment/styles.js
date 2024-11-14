import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & .horario {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        & h2 {
            color: ${cores.azulmain};
        }

        & .marker {
            margin-top: 16px;
            width: 100%;
            display: flex;
            justify-content: center;

            & .input-horario {
                border: 1px solid ${cores.cinza200};
                border-radius: 4px;
                outline: none;
            }
        }
    }

    & .horario-escolhido {
        display: flex;
        justify-content: center;
        flex-direction: column;

        & span {
            display: flex;
            justify-content: center;
        }
    }
`