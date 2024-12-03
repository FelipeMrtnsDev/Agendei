import { Link } from "react-router-dom";
import logo from "../../assets/images/logo4 2.svg"
import { BoasVindasContainer } from "./styles"
import { GrUserAdmin } from "react-icons/gr";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode"

function BoasVindas() {
    const authToken = localStorage.getItem("authToken")
    let isAdmin = false

    if (authToken) {
        const decodedToken = jwtDecode(authToken)
        isAdmin = decodedToken.role === "admin"
    }


    return(
        <BoasVindasContainer>
            <div className="infos-boasvindas">
                <div>
                    <img src={logo} alt={logo} />
                </div>
                <div>
                    <h1>Seja bem vindo ao seu app de agendamentos</h1>
                </div>
                <Link to="/markappointment" className="btn">
                    <p>Marque sua consulta</p>
                    <FaArrowRightToBracket />
                </Link>
                {isAdmin && (
                    <Link to="/admin/appointments" className="btn">
                        <p>Painel de Administrador</p>
                        <GrUserAdmin />
                    </Link>
                )}
            </div>
        </BoasVindasContainer>
    )
}

export default BoasVindas