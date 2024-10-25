import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
`

export const Imagem = styled.div`
    display: flex;
    max-height: 100vh;
    width: 100%;
    
    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
`

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .logo {
        margin-top: 64px;
    }

    & .h1 {
        margin-top: 42px;
        line-height: 36px;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-inline: 64px;
        font-size: 14px;

        & h1 {
            font-weight: 600;
        }
    }

    & .h2 {
        margin-top: 80px;
        margin-bottom: 24px;
        
        & h2 {
            font-weight: 400;
        }
    }
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px;

    & .email {
        margin-bottom: 16px;
        padding: 10px;
        border: 1px solid #DFDFDF;
        border-radius: 4px;

        &:focus {
            outline: 3px solid #DFDFDF;
        }
    }

    & .senha {
        margin-bottom: 16px;
        padding: 10px;
        border: 1px solid #DFDFDF;
        border-radius: 4px;

        &:focus {
            outline: 3px solid #DFDFDF;
        }
    }

    & .botao {
        margin-bottom: 16px;
        padding: 10px;
        border: none;
        background-color: #0D6EFD;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        transition: 0.5s all ease;

        &:hover {
            background-color: #0f3fff;
        }


    }
`

export const Registrar = styled.div`
    text-align: center;
    position: absolute;
    bottom: 44px;

    a {
        color: #0D6EFD;
        text-decoration: none;
    }
`