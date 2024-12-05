import { useEffect } from "react"
import CardAgendamentosAdmin from "../CardAgendamentoAdmin"
import { app } from "tailwind"

function ListAgendamentosAdmin() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("authToken")
        fetch("http://localhost:3010/appointments", {
            method: "GET",
            headers: {
                "ContentType": "application/json",
                "Authorization": `Bearer ${token}`
            }
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setAppointments(data)
            })
            .catch((error) => {
                console.error(error)
            })
        })
    }, [])

    return (
        <Container>
            <table>
                <tr>
                    <th>Paciente</th>
                    <th>Médico</th>
                    <th>Serviço</th>
                    <th>Data/Hora</th>
                    <th>Valor</th>
                </tr>
                {appointments.map((appointment) => (
                    <CardAgendamentosAdmin 
                        data={appointment.date}
                        doutor={appointment.doctor.name}
                        paciente={appointment.usuario.name}
                        servico={appointment.topic}
                        valor="20,00"
                    />
                ))}
            </table>
        </Container>
    )
}

export default ListAgendamentosAdmin