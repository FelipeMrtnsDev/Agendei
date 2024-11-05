import styled from "styled-components";
import { cores } from "../../styles/styles";

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${cores.azulclaro};
    width: 100%;
    margin-bottom: 32px;
`

export const DoctorsInfo = styled.table`
    width: 60%;
    background-color: ${cores.branco100};
    padding: 24px;
    border-radius: 16px;
    border: 2px solid ${cores.cinza200};
    
    & .infos-card {
        display: grid;
        grid-template-columns: 1fr 1fr ;
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

    & .container-icon {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 16px;

        & .icon {
            font-size: 40px;
            color: ${cores.branco};
            background-color: ${cores.azulmain};
            padding: 6px;
            border-radius: 8px;
            transition: all ease 0.3s;
            cursor: pointer;

            &:hover {
                background-color: ${cores.azulclaro};
                color: ${cores.azulmain};
            }
        }
    }
`
