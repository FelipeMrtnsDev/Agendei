import { useEffect, useState } from "react";
import { Container } from "./styles";
import CardDoutoresAdmin from "../CardDoctorsAdmin";

function ListDoctorsAdmin() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        fetch("http://localhost:3010/doctors", {
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
                setDoctors(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os agendamentos:", error);
            });
    }, []);

    function formatDateTime(dateString) {
        const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const formattedTime = date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
        });
        return `${formattedDate} ${formattedTime}`;
    }

    return (
        <Container>
            <table>
                <thead>
                    <hr />
                    <tr>
                        <th>Gênero</th>
                        <th>Médico</th>
                        <th>Área</th>
                        <th>iniciado em:</th>
                    </tr>
                    <hr />
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <CardDoutoresAdmin
                            area={doctor.area}
                            gender={doctor.gender}
                            name={doctor.name}
                            started={formatDateTime(doctor.createdAt)}
                            key={doctor.id}
                        />
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

export default ListDoctorsAdmin;
