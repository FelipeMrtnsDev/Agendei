import styled from "styled-components";

export const Container = styled.div`
    
    & table {
        width: 100%;
    }

    & tr {
        padding: 16px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 15%;
    }
`