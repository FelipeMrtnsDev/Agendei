import { DoctorsInfo, CardsContainer } from "./styles";
import { BsBoxArrowInUpLeft } from "react-icons/bs";
import medico from "../../assets/images/medico.png";
import medica from "../../assets/images/medica.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CardDoutores({ id, doutor, sexo, funcao }) {
    const [imagem, setImagem] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if (sexo === 'homem') {
            setImagem(medico);
        } else if (sexo === 'mulher') {
            setImagem(medica);
        } else {
            setImagem('');
        }
    }, [sexo]);

    const handleCardClick = () => {
        navigate(`/doctor/${id}`);
    };

    return (
        <CardsContainer>
            <DoctorsInfo>
                <div className="infos-card">
                    <div className="titulo">
                        <img src={imagem} alt={`Imagem de ${sexo}`} />
                        <div>
                            <h2>{doutor}</h2>
                            <p>{funcao}</p>
                        </div>
                    </div>
                    <div className="container-icon">
                        <BsBoxArrowInUpLeft className="icon" onClick={handleCardClick} />
                    </div>
                </div> 
            </DoctorsInfo>
        </CardsContainer>
    );
}

export default CardDoutores;
