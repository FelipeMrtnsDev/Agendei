import { Lateral } from "./styles"
import { AiFillCarryOut } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import logo from "../../assets/images/logo4 2.svg";
import { Link } from "react-router-dom";

function BarraLateral() {
    return(
        <Lateral>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="icons">
                <div>
                    <a href="">
                        <AiFillHome />
                        <Link as="a" className="inicio" to="/home">Inicio</Link>
                    </a>
                </div>
                <div>
                    <a href="">
                        <AiFillCarryOut />
                        <Link className="dashboard" to="/markappointment">Marcar consulta</Link>
                    </a>
                </div>
                <div>
                    <a href="">
                        <AiFillBook />
                        <Link className="dashboard" to="/myappointments">Meus agendamentos</Link>
                    </a>
                </div>
                <div>
                    <a href="">
                        <BiSolidUser />
                        <Link className="dashboard" to="/profile">Perfil</Link>
                    </a>
                </div>
            </div>
        </Lateral>
    )
}

export default BarraLateral