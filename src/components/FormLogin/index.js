import logo from '../../assets/images/logo4 2.svg';
import doutor from '../../assets/images/fundo 1.png';
import { Container, Imagem, Login, Formulario, Registrar } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:3010/auth/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password: senha })
            });
    
            const data = await response.json();
    
            if (response.ok && data.token) {
                localStorage.setItem('authToken', data.token);
                navigate('/home');
            } else {
                alert("Erro ao fazer login: " + (data.msg || "Credenciais inválidas"));
            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            alert("Erro ao realizar login. Verifique sua conexão e tente novamente.");
        }
    };
    

    return (
        <Container>
            <Login>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='h1'>
                    <h1>Gerencie seus agendamentos de forma descomplicada.</h1>
                </div>
                <div className='h2'>
                    <h2>Acesse sua conta</h2>
                </div>
                <Formulario onSubmit={handleLogin}>
                    <input
                        className='email'
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <input
                        className='senha'
                        type="password"
                        placeholder='Senha'
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha}
                        required
                    />
                    <button type='submit' className='botao'>Acessar</button>
                </Formulario>
                <Registrar>
                    <div className='registrar'>
                        <p>Não tenho conta. <Link to="/register">Criar conta agora</Link></p>
                    </div>
                </Registrar>
            </Login>
            <Imagem>
                <img src={doutor} alt="Imagem de fundo" />
            </Imagem>
        </Container>
    );
}

export default FormLogin;
