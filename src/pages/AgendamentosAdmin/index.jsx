import Header from "../../components/Header"
import FiltroAppointments from "../../components/FiltroAppointments"
import CardAgendamentosAdmin from "../../components/CardAgendamentoAdmin"

function AgendamentosAdmin() {
    return (
        <>
            <Header classe="agendamentos" />
            <FiltroAppointments />
            <CardAgendamentosAdmin />
        </>
    )
}

export default AgendamentosAdmin