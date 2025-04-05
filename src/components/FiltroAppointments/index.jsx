import { Container } from "./styles";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function FiltroAppointments() {
  const [doctors, setDoctors] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    fetch(`${process.env.REACT_APP_API_URL}/doctors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((err) => {
        toast.log("Erro ao tentar encontrar doutores");
      });
  }, []);

  const handleStartDateChange = (date) => {
    const formattedDate = date ? dayjs(date).format("DD/MM/YYYY") : "";
  };

  const handleEndDateChange = (date) => {
    const formattedDate = date ? dayjs(date).format("DD/MM/YYYY") : "";
  };

  const disableEndDate = (current) => {
    return (
      startDate &&
      current &&
      (current.isBefore(startDate, "day") || current.isSame(startDate, "day"))
    );
  };

  const handleClick = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.log("Não há token, redirecionando para a home.");
      navigate("/home");
    } else {
      console.log("Token encontrado, redirecionando para o agendamento.");
      navigate("/admin/appointments/create");
    }
  };

  return (
    <Container>
      <div className="novo-agendamento">
        <h1>Agendamentos</h1>
        <Link to="/admin/appointments/create" className="btn-agendamento">
          Novo Agendamento
        </Link>
      </div>
      <div className="filtro">
        <DatePicker className="date" onChange={handleStartDateChange} />
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
