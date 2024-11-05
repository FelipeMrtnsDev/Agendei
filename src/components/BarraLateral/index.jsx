import { Lateral } from "./styles"
import { FaRegCalendar } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../../assets/images/logo4 2.svg";
import { Link } from "react-router-dom";

function BarraLateral() {
    return(
        <Lateral>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="icons">
                <a href="">
                    <IoHomeOutline />
                    <Link className="inicio" to="/home">Inicio</Link>
                </a>
                <a href="">
                    <FaRegCalendar />
                    <Link className="dashboard" to="/dashboard">Meus agendamentos</Link>
                </a>
            </div>
        </Lateral>
    )
}

export default BarraLateral