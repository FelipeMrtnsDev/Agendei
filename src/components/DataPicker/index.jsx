import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Container } from './styles'

function DatePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date)
    };

    const disableWeekends = ({ date }) => {
        const day = date.getDay()
        return day === 0
    };

    return (
        <Container>
            <h2>Escolha uma data para marcar</h2>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={new Date()}
                tileDisabled={disableWeekends}
            />
            <p className='data-marcada'>Data marcada: {selectedDate.toLocaleDateString()}</p>
        </Container>
    );
}

export default DatePicker

