import { Link } from "react-router-dom";
import logo from "../../assets/images/logo4 2.svg"
import { BoasVindasContainer } from "./styles"
import { FaArrowRightToBracket } from "react-icons/fa6";

function BoasVindas() {
    return(
        <BoasVindasContainer>
            <div className="infos-boasvindas">
                <div>
                    <img src={logo} alt={logo} />
                </div>
                <div>
                    <h1>Seja bem vindo ao seu app de agendamentos</h1>
                </div>
                <Link to="/markappointment" className="btn-agendar">
                    <p>Marque sua consulta</p>
                    <FaArrowRightToBracket />
                </Link>
            </div>
        </BoasVindasContainer>
    )
}

export default BoasVindas