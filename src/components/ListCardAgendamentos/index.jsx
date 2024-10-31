import CardAgendamento from "../CardAgendamento"
import { useEffect, useState } from "react"

function ListCardAgendamentos() {
    const [consultas, setConsultas] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        fetch("http://localhost:3010/appointments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.status === 403 ) {
                    throw new Error("Acesso negado. Usuário não é admin ou não e sta logado.")
                }
                return response.json()
            })
            .then((data) => {
                setConsultas(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            
                {consultas.map((consulta) => (
                    <CardAgendamento 
                        key={consulta.id}
                        doutor={consulta.doctor.name}
                        gender={consulta.doctor.gender}
                        topic={consulta.topic}
                        doctor={consulta.doctor_id}
                    />
                ))}
        </>
    )
}

export default ListCardAgendamentos
