import { DoctorsInfo, CardsContainer, InfosAgendamentos } from "./styles"
import { IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import medico from "../../assets/images/medico.png"

function CardAgendamento({ doutor, sexo, topico }) {
    return(
        <CardsContainer>
            <DoctorsInfo>
                <div className="infos-card">
                    <div className="titulo">
                        <img src={sexo} alt={sexo} />
                        <h2>{doutor}</h2>
                    </div>
                    <div className="servico">
                        <h4>serviço:</h4>
                        <p>{topico}</p>
                    </div>
                    <div className="delete-update">
                        <FaRegEdit className="editar" />
                        <IoTrashOutline className="apagar" />
                    </div>
                </div>
            </DoctorsInfo>
        </CardsContainer>
    )
}

export default CardAgendamento