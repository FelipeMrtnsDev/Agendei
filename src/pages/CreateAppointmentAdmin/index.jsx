import { useEffect, useState } from "react";
import Header from "../../components/Header"
import NewAppointmentAdmin from "../../components/NewAppointmentAdmin"
import { Title } from "./styles"

function CreateAppointmentAdmin(){
    const [doctors, setDoctors] = useState([]);
    const [users, setUsers] = useState([]);
    const [procedures, setProcedures] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(1)
    const [selectedUser, setSelectedUser] = useState(1)

    
    const handleDoctorChange = (doctorId) => {
        setSelectedDoctor(doctorId)
    }

    const handleUserChange = (userId) => {
        setSelectedUser(userId)
    }

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
                setDoctors(data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, []);

        useEffect(() => {
            const token = localStorage.getItem("authToken");
            fetch(`http://localhost:3010/procedures/${selectedDoctor}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setProcedures(Array.isArray(data) ? data : []);
            })
            .catch((err) => {
                console.log(err);
                setProcedures([])
            });
        }, [selectedDoctor]);

        useEffect(() => {
            const token = localStorage.getItem("authToken");
            fetch("http://localhost:3010/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, []);


    return(
        <Title>
            <Header/>
            <h1 className="novo-agendamento">Novo agendamento</h1>
            <NewAppointmentAdmin doctors={doctors} users={users} procedures={procedures} onDoctorSelectedChange={handleDoctorChange} onUserSelectedChange={handleUserChange} />
        </Title>
    )
}

export default CreateAppointmentAdmin