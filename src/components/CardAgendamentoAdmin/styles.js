import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Container = styled.tr`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 10%;
    align-items: center;
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

export const Modal = styled.div`
    position: absolute;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${cores.azulmain};
    width: 500px;
    height: 200px;
    border-radius: 16px;
    color: white;

    & p {
        padding-top: 24px;
        font-size: 20px;
    }

    & div {
        display: flex;
        gap: 16px;

        & button {
            border: none;
            border-radius: 8px;
            padding: 12px;
            padding-inline: 20px;
            cursor: pointer;
        }

        & .cancelar-btn {
            background-color: ${cores.branco};
            color:black;
            transition: all ease 0.5s;

            &:hover {
                background-color: ${cores.cinza100};
            }
        }

        & .apagar-btn {
            background-color: ${cores.vermelho};
            transition: all ease 0.5s;

            &:hover {
                background-color: ${cores.vermelho200};
            }
        }
    }
`