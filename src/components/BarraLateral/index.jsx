import { Lateral } from "./styles"
import { FaRegCalendar } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import logo from "../../assets/images/logo4 2.svg";

function BarraLateral() {
    return(
        <Lateral>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="icons">
                <a href="">
                    <IoHomeOutline />
                    <p>Inicio</p>
                </a>
                <a href="">
                    <FaRegCalendar />
                    <p>Meus agendamentos</p>
                </a>
            </div>
        </Lateral>
    )
}

export default BarraLateral