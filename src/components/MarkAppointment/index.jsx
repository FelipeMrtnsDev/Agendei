import { useEffect, useState } from "react";
import DataPicker from "../DataPicker";
import SchudleAppointment from "../SchudleAppointment";
import { useNavigate, useParams } from "react-router-dom";
import { BotaoAgendar } from "./styles";

function MarkerAppointment() {
    const { id, pdid } = useParams();
    const [doctor, setDoctor] = useState();
    const [topic, setTopic] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState('10:00');
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        fetch(`http://localhost:3010/procedures/${pdid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                const procedure = data[0];
                setTopic(procedure.name);
                setDoctor(procedure.doctor_id);
                console.log("Doctor:", procedure.doctor_id, "Topic:", procedure.name);
            } else {
                console.error("Data is empty or not in the expected format.");
            }
        })
        .catch((error) => {
            console.error("Algo deu errado!", error);
        });
    }, [pdid, id]);

    const handleAppointment = () => {
        const token = localStorage.getItem("authToken");
        fetch(`http://localhost:3010/appointments/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                topic,
                time,
                doctor_id: doctor,
                date: selectedDate,
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("dados da consulta:", data);
            navigate("/successmessage");
        })
        .catch((error) => console.error("Erro ao registrar consulta:", error));
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
