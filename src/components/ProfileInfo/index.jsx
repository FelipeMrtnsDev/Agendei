import { useEffect, useState } from "react";
import Profile from "../../assets/images/profile.png";
import { ProfileContainer } from "./styles";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ProfileInfo() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    fetch(`${process.env.REACT_APP_API_URL}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados do usuário.");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        handleDisconnectClick();
      });
  }, []);

  const handleDisconnectClick = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <ProfileContainer>
      <div className="image">
        <img src={Profile} alt="Foto de perfil" />
      </div>
      <div className="name">
        <h2>Nome:</h2>
        <p>{user.name || "Usuário não identificado"}</p>
      </div>
      <div className="email">
        <h2>Email:</h2>
        <p>{user.email || "Email não identificado"}</p>
      </div>
      <button onClick={handleDisconnectClick}>
        Desconectar
        <IoLogOut className="icon" />
      </button>
    </ProfileContainer>
  );
}

export default ProfileInfo;
