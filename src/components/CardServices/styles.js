import styled from "styled-components";
import { cores } from "../../styles/styles";

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 768px;
    margin: 0 auto;
    border-bottom: 1px solid ${cores.cinza200};
    border-top: 1px solid ${cores.cinza200};
    padding: 16px;



    & .price {
        display: flex;
        flex-direction: column;

        & h3 {
            color: ${cores.cinza200};
            font-weight: 400;
        }

        & p {
            color: ${cores.azulmain};
        }
    }

    & .button-container {
        display: flex;
        align-items: center;

        & button {
            background-color: ${cores.azulmain};
            padding-inline: 32px;
            padding-block: 12px;
            border: none;
            border-radius: 8px;
            color: ${cores.branco};
            cursor: pointer;
            transition: all ease 0.3s;

            &:hover {
                background-color: blue;
            }
        }
    }
`