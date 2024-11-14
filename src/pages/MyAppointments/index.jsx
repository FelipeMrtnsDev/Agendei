import ListCardAppointments from "../../components/ListCardAppointments"
import { Container, Titulo } from "./styles"

function MyAppointments() {
    return(
        <Container>
            <Titulo>Meus Agendamentos</Titulo>
            <ListCardAppointments />
        </Container>
    )
}

export default MyAppointments