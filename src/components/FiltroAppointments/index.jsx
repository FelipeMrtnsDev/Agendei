import { Container } from "./styles"
import { DatePicker } from 'antd';
import 'antd/dist/reset.css';
import { useEffect, useState } from "react";

function FiltroAppointments() {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("authToken")
        fetch("http://localhost:3010/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log("data:", data)
            setDoctors(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleChange = (date, dateString) => {
        console.log("Data selecionada:", date);
        console.log("Formato em string:", dateString);
    };

    return(
        <Container>
            <div className="novo-agendamento">
                <h1>Agendamentos</h1>
                <button className="btn-agendamento">Novo Agendamento</button>
            </div>
            <div className="filtro">
                <DatePicker className="date" onChange={handleChange} />
                    <p>até</p>
                <DatePicker className="date right" onChange={handleChange} />
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
    )
}

export default FiltroAppointments