import styled from "styled-components";
import { cores } from "../../styles/styles";

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;

    & .image {
        background-color: ${cores.azulmain};
        width: 160px;
        height: 160px;
        border-radius: 100%;
    }

    & img {
        width: 160px;
        height: 160px;
        filter: invert(100%);
    }

    & .name {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 16px;
        color: ${cores.azulmain};

        & p {
            font-size: 20px;
            color: ${cores.preto200};
        }
    }

    & .email {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 16px;
        color: ${cores.azulmain};

        & p {
            font-size: 20px;
            color: ${cores.preto200};
        }
    }
`