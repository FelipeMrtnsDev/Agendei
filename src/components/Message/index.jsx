import { ContainerMessage } from "./styles"
import { Link } from "react-router-dom"
import ok from "../../assets/images/ok-icon.png"
import { LuArrowBigLeftDash } from "react-icons/lu";

function Message() {
    return (
        <ContainerMessage>
            <h1>Consulta Marcada com sucesso</h1>
            <img src={ok} alt={ok} />
            <Link to="/home" className="link">
                <button>
                    <LuArrowBigLeftDash />
                    <p>Voltar para Home</p>
                </button>
            </Link>
        </ContainerMessage>
    )
}

export default Message