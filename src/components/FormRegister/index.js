import logo from "../../assets/images/logo4 2.svg";
import { Container, Imagem, Login, Formulario, Registrar } from "./styles";
import doutor from "../../assets/images/fundo 1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password: senha,
            confirmpassword: confirmarSenha,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Registrado com sucesso!");
        navigate("/login");
      } else {
        toast.error("Erro ao fazer login: " + data.msg);
      }
    } catch (error) {
      console.error("erro ao se autentificar", error.msg);
    }
  };

  return (
    <Container>
      <Login>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="h1">
          <h1>Crie sua conta agora mesmo</h1>
        </div>
        <div className="h2">
          <h2>Preencha os campos abaixo</h2>
        </div>
        <Formulario onSubmit={handleLogin}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="nome"
            type="text"
            placeholder="Nome"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="email"
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            className="senha"
            type="password"
            placeholder="Senha"
            autocomplete="current-password"
            required
          />
          <input
            onChange={(e) => setConfirmarSenha(e.target.value)}
            value={confirmarSenha}
            className="confirmar-senha"
            type="password"
            placeholder="Confirme a senha"
            autocomplete="current-password"
            required
          />
          <button type="submit" className="botao">
            Criar minha conta
          </button>
        </Formulario>
        <Registrar>
          <div className="login">
            <p>
              Já tenho uma conta. <Link to="/login">Acessar agora!</Link>
            </p>
          </div>
        </Registrar>
      </Login>
      <Imagem>
        <img src={doutor} alt="" />
      </Imagem>
    </Container>
  );
}

export default FormRegister;
