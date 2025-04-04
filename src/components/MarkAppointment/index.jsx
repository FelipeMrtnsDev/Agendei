import { useEffect, useState } from "react";
import DataPicker from "../DataPicker";
import SchudleAppointment from "../SchudleAppointment";
import { useNavigate, useParams } from "react-router-dom";
import { BotaoAgendar } from "./styles";
import { toast } from "react-toastify";

function MarkerAppointment() {
    const { id, pdid } = useParams();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState('10:00');
    const navigate = useNavigate();

    const handleAppointment = () => {
        const token = localStorage.getItem("authToken");
        fetch(`http://localhost:3010/appointments/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                procedure_id: pdid,
                time,
                doctor_id: id,
                date: selectedDate,
            })
        })
        .then(async (response) => {
            const result = await response.json();
            if (response.ok) {
                toast.success("Consulta agendada com sucesso!");
                return result;
            }
            toast.error(result.msg);
            throw new Error(result.msg);
        })
        .then((data) => {
            navigate("/successmessage");
        })
        .catch((error) => toast.error("Erro ao registrar consulta:", error));
    };

    return (
        <>
            <DataPicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
            <SchudleAppointment time={time} onTimeChange={setTime} />
            <BotaoAgendar>
                <button onClick={handleAppointment}>Agendar</button>
            </BotaoAgendar>
        </>
    );
}

export default MarkerAppointment;
