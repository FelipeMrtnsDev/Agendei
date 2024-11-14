import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container } from './styles';

function DatePicker({ selectedDate, onDateChange }) {
    const disableWeekends = ({ date }) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };

    return (
        <Container>
            <h2>Escolha uma data para marcar</h2>
            <Calendar
                onChange={onDateChange}
                value={selectedDate}
                minDate={new Date()}
                tileDisabled={disableWeekends}
            />
            <p className='data-marcada'>Data marcada: {selectedDate.toLocaleDateString()}</p>
        </Container>
    );
}

export default DatePicker;
