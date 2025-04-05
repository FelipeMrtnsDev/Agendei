import { DatePicker } from "antd";
import { Formulario } from "./styles";
import TimePicker from "react-time-picker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function NewAppointmentAdmin({
  doctors,
  procedures,
  onDoctorSelectedChange,
  users,
  onUserSelectedChange,
}) {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(1);
  const [selectedUser, setSelectedUser] = useState(1);
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const navigate = useNavigate();

  const onTimeChange = (newTime) => {
    setTime(newTime);
  };

  const onDateChange = (date, dateString) => {
    setDate(date);
  };

  const onDoctorChange = (e) => {
    const doctorId = e.target.value;
    setSelectedDoctor(doctorId);
    onDoctorSelectedChange(doctorId);
  };

  const onUserChange = (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);
    onUserSelectedChange(userId);
  };

  const onProcedureChange = (e) => {
    setSelectedProcedure(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    await fetch(
      `${process.env.REACT_APP_API_URL}/appointments/register/byadmin`,
      {
        method: "POST",
        body: JSON.stringify({
          date,
          time,
          procedure_id: selectedProcedure,
          user_id: selectedUser,
          doctor_id: selectedDoctor,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        toast.success("dados enviados com sucesso!");
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formulario>
      <div className="doctor-procedure">
        <label>
          Paciente
          <select className="user" onChange={onUserChange}>
            {users.map((user, index) => (
              <option key={index} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Doutor
          <select className="doctor" onChange={onDoctorChange}>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Procedimento
          <select className="procedure" onChange={onProcedureChange}>
            {Array.isArray(procedures) && procedures.length > 0 ? (
              procedures.map((procedure, index) => (
                <option key={index} value={procedure.id}>
                  {procedure.name}
                </option>
              ))
            ) : (
              <option disabled>Carregando procedimentos...</option>
            )}
          </select>
        </label>
      </div>
      <div className="time">
        <label>
          Data
          <DatePicker
            className="datapicker"
            onChange={onDateChange}
            value={date}
            format="DD/MM/YYYY"
          />
        </label>
        <label>
          Horário
          <TimePicker
            className="timepicker"
            onChange={onTimeChange}
            value={time}
            disableClock
          />
        </label>
      </div>
      <button className="submit" type="submit" onClick={submitForm}>
        Criar
      </button>
    </Formulario>
  );
}

export default NewAppointmentAdmin;
