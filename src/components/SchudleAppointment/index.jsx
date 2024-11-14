import { Container } from "./styles";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

function SchudleAppointment({ time, onTimeChange }) {
    return (
        <Container>
            <div className="horario">
                <h2>Selecione o horário</h2>
                <div className="marker">
                    <TimePicker
                        className="input-horario"
                        onChange={onTimeChange}
                        value={time}
                        disableClock
                    />
                </div>
            </div>
            <div className="horario-escolhido">
                <p>Horário selecionado: </p>
                <span>{time}</span>
            </div>
        </Container>
    );
}

export default SchudleAppointment;
