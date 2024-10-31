import { InfosAgendamentos, CardInfosAgendamentos } from "./styles"

function Agendamentos() {
    return (
        <CardInfosAgendamentos>
            <InfosAgendamentos>
                    <div className="infos">
                        <div className="agendamentos">
                            <h1>Agendamentos</h1>
                        </div>
                        <div>
                            <button className="botao">Novo agendamento</button>
                        </div>
                    </div>
            </InfosAgendamentos>
        </CardInfosAgendamentos>
    )
}

export default Agendamentos