import logo from '../../assets/images/logo4 2.svg'
import doutor from '../../assets/images/fundo 1.png'
import { Container, Imagem, Login, Formulario, Registrar } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormLogin() {
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch("http://localhost:3030/auth/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password: senha })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token)
                alert('Login realizado com sucesso!')
                navigate('/')
            } else {
                alert("Erro ao fazer login: " + data.msg);
            }
        } catch(error) {
            console.error("Erro ao realizar login:", error)
        }
    }

    return (
        <Container>
            <Login>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='h1'>
                    <h1>Gerencie seus agendamentos
                    de forma descomplicada.</h1>
                </div>
                <div className='h2'>
                    <h2>Acesse sua conta</h2>
                </div>
                <Formulario onSubmit={handleLogin}>
                    <input className='email' type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    <input className='senha' type="password" placeholder='Senha' onChange={(e) => setSenha(e.target.value)} value={senha} autocomplete="current-password"  required/>
                    <button type='submit' className='botao'>Acessar</button>
                </Formulario>
                <Registrar>
                    <p>Não tenho conta. <Link to="/register">Criar conta agora</Link></p>
                </Registrar>
            </Login>
            <Imagem>
                <img src={doutor} alt="" />
            </Imagem>
        </Container>
    )
}

export default FormLogin