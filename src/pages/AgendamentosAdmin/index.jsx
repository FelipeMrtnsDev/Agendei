import Header from "../../components/Header"
import FiltroAppointments from "../../components/FiltroAppointments"
import CardAgendamentosAdmin from "../../components/CardAgendamentoAdmin"
import ListAgendamentosAdmin from "../../components/ListAgendamentosAdmin"

function AgendamentosAdmin() {
    return (
        <>
            <Header classe="agendamentos" />
            <FiltroAppointments />
            <ListAgendamentosAdmin />
        </>
    )
}

export default AgendamentosAdmin