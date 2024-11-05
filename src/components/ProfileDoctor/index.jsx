import medica from "../../assets/images/medica.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import { Doutor, InfosDoctorContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function ProfileDoctor() {
    const navigate = useNavigate()

    const handleArrowClick = () => {
        navigate(`/dashboard`);
    };

    return(
        <InfosDoctorContainer>
            <div className="itens-s-v">
                <div className="voltar">
                    <FaArrowLeftLong className="seta" onClick={handleArrowClick}/>
                </div>
                <div className="servicos">
                    <h1>Serviços</h1>
                </div>
            </div>
            <Doutor>
                <img src={medica} alt=""  className="image"/>
                <h2>Kamila</h2>
                <p>Cirurgia plástica</p>
            </Doutor>
        </InfosDoctorContainer>
    )
}

export default ProfileDoctor