import { Container } from "./styles";
import { useState } from "react";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

function SchudleAppointment() {
    const [time, setTime] = useState('10:00')

    return(
        <Container>
            <h2>Selecione o horário da consulta</h2>
            <TimePicker
                onChange={setTime}
                value={time}
                disableClock  
            />
            <p>Horário selecionado: {time}</p>
        </Container>
    )
}

export default SchudleAppointment