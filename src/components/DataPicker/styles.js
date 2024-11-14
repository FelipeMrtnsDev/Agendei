import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & h2 {
        margin-bottom: 32px;
        color: ${cores.azulmain};
    }

    & .react-calendar__tile {
        border-radius: 8px;
    }
    
    & .react-calendar__tile--active {
        background-color: ${cores.azulmain};
        
        & abbr {
            color: white;
        }
    }

    & .react-calendar__tile:hover {
        background-color: #ddd;
    }

    & .react-calendar__navigation button {
        color: #333;
        font-weight: bold;
    }

    & .react-calendar {
        width: 600px;
        padding: 24px;
        border-radius: 16px;
        margin-bottom: 16px;
    }

    & abbr {
        text-decoration: none;
    }

    & .react-calendar__navigation__label {
    min-width: 44px;
    background: ${cores.azulmain};
    border-radius: 8px;
    transition: all ease 0.3s;

    & span {
        color: ${cores.branco};
    }

    &:hover {
        background-color: ${cores.azulclaro};
        
        & span {
            color: ${cores.azulmain};
        }
    }
}

    .react-calendar__tile--now {
        background: ${cores.azulclaro};
    }

    & .react-calendar__month-view__days__day--weekend {
        color: ${cores.cinza200};
    }

    & .react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus {
        background: ${cores.preto200};
    }

    & .react-calendar__month-view__weekdays__weekday--weekend {
        & abbr {
            color: ${cores.vermelho};
        }
    }

    .react-calendar__tile:hover {
        background-color: ${cores.azulclaro};

        & abbr {
            color: ${cores.azulmain};
        }
    }

    & .react-calendar__tile:disabled {
        background-color: transparent;
    }

    & .data-marcada {
        margin-bottom: 32px;
    }
`