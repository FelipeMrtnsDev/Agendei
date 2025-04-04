import styled from "styled-components";
import { cores } from "../../styles/styles";

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding: 50px;
  border-radius: 8px;
  background-color: ${cores.branco100};

  & .submit {
      background: ${cores.azulmain};
      border: none;
      border-radius: 8px;
      padding: 12px;
      color: ${cores.branco};
      transition: all ease 0.5s;
      cursor: pointer;

      &:hover {
        background-color: blue;
      }
    }
  
  & .doctor-procedure {
    & label {
      display: flex;
      flex-direction: column;
    }
    
    & input {
      margin-bottom: 16px;
      padding: 10px;
      border: 1px solid ${cores.cinza100};
      border-radius: 4px;
      
      &:focus {
        outline: 3px solid ${cores.cinza100};
      }
    }
    
    & select {
      border-radius: 6px;
      padding: 8px;
      margin-top: 8px;
      margin-bottom: 12px;
    }
  }
  
  
  & .time {
    display: flex;
    justify-content: start;
    gap: 16px;
    margin-bottom: 24px;

    & label {
      display: flex;
      flex-direction: column;
      
      & .datapicker {
        border: 1px solid black;
      }
    }
    
    & .react-time-picker__wrapper {
      border: 1px solid black;
      border-radius: 8px;
      padding: 2px;
    }
  }
`