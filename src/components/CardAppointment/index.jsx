import { CardContainer } from "./styles";
import Calendar from "../../assets/images/calendar.svg";
import Clock from "../../assets/images/clock.svg";

function CardAppointment({ doctor, procedure, data, hourly, appointmentId, onCancel }) {
    const handleCancel = () => {
        onCancel(appointmentId);
    };

    return (
        <CardContainer>
            <div className="titulos">
                <h2>Consulta - Dr(a) {doctor}</h2>
                <p>{procedure}</p>
            </div>
            <div className="infos">
                <div className="data">
                    <img src={Calendar} alt={Calendar} />
                    <p>{data}</p>
                </div>
                <div className="hourly">
                    <img src={Clock} alt={Clock} />
                    <p>{hourly}</p>
                </div>
            </div>
            <button onClick={handleCancel}>Cancelar Reserva</button>
        </CardContainer>
    );
}

export default CardAppointment;