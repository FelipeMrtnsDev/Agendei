import { useEffect, useState } from "react";
import CardAgendamentosAdmin from "../CardAgendamentoAdmin";
import { Container } from "./styles";

function ListAgendamentosAdmin() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        fetch("http://localhost:3010/appointments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setAppointments(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os agendamentos:", error);
            });
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <hr />
                    <tr>
                        <th>Paciente</th>
                        <th>Médico</th>
                        <th>Serviço</th>
                        <th>Data/Hora</th>
                        <th>Valor</th>
                    </tr>
                    <hr />
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <CardAgendamentosAdmin
                            key={appointment.id} 
                            data={appointment.date}
                            doutor={appointment.doctor.name}
                            paciente={appointment.usuario.name}
                            servico={appointment.topic}
                            valor={appointment.value} 
                        />
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

export default ListAgendamentosAdmin;
