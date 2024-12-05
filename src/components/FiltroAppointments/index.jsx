import { Container } from "./styles";
import { DatePicker } from 'antd';
import 'antd/dist/reset.css';
import { useEffect, useState } from "react";
import dayjs from 'dayjs';

function FiltroAppointments() {
    const [doctors, setDoctors] = useState([]);
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        fetch("http://localhost:3010/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("data:", data);
            setDoctors(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const handleStartDateChange = (date) => {
        const formattedDate = date ? dayjs(date).format('DD/MM/YYYY') : '';
        console.log("Data inicial selecionada:", formattedDate);
        setStartDate(date); 
    };

    const handleEndDateChange = (date) => {
        const formattedDate = date ? dayjs(date).format('DD/MM/YYYY') : '';
        console.log("Data final selecionada:", formattedDate);
    };

    const disableEndDate = (current) => {
        return (
            startDate &&
            current &&
            (current.isBefore(startDate, 'day') || current.isSame(startDate, 'day'))
        );
    };

    return (
        <Container>
            <div className="novo-agendamento">
                <h1>Agendamentos</h1>
                <button className="btn-agendamento">Novo Agendamento</button>
            </div>
            <div className="filtro">
                <DatePicker 
                    className="date" 
                    onChange={handleStartDateChange} 
                />
                <p>até</p>
                <DatePicker 
                    className="date right" 
                    onChange={handleEndDateChange} 
                    disabledDate={disableEndDate} 
                    disabled={!startDate}
                />
                <select>
                    <option value="">Todos os doutores</option>
                    {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                            {doctor.name}
                        </option>
                    ))}
                </select>
                <button>Filtrar</button>
            </div>
        </Container>
    );
}

export default FiltroAppointments;
