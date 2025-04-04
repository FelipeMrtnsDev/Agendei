import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardAppointment from "../CardAppointment";
import { Message } from "./styles";
import { toast } from "react-toastify";

function ListCardAppointments() {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        fetch("http://localhost:3010/appointments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setAppointments(data);
        })
        .catch((error) => {
            console.error(error);
            if (error.message.includes("Token inválido")) {
                localStorage.removeItem("authToken");
                navigate("/login");
            }
        });
    }, [navigate]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR");
    };

    const formatTime = (timeString) => {
        const currentDate = new Date();
        const [hours, minutes, seconds] = timeString.split(":");
        currentDate.setHours(hours, minutes, seconds);

        if (isNaN(currentDate)) {
            toast.error("Hora inválida:", timeString);
            return ""; 
        }

        return currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const cancelAppointment = (appointmentId) => {
        const token = localStorage.getItem("authToken");

        fetch(`http://localhost:3010/appointments/delete/${appointmentId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setAppointments((prevAppointments) =>
                prevAppointments.filter((appointment) => appointment.id !== appointmentId)
            );
        })
        .catch((error) => {
            toast.error("Erro ao cancelar consulta:", error);
        });
    };

    return (
        <>
            {appointments.length > 0 ? (
                appointments.map((appointment) => (
                    <CardAppointment 
                        data={formatDate(appointment.date)} 
                        doctor={appointment.doctor.name} 
                        hourly={formatTime(appointment.time)} 
                        procedure={appointment.topic} 
                        key={appointment.id} 
                        appointmentId={appointment.id} 
                        onCancel={cancelAppointment} 
                    />
                ))
            ) : (
                <Message>
                    <h2 className="no-appointments">Você não tem nenhuma consulta marcada!</h2>
                </Message>
            )}
        </>
    );
}

export default ListCardAppointments;
