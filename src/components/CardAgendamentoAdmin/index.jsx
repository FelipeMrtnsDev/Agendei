import { Container } from "./styles"

function CardAgendamentosAdmin({ paciente, doutor, servico, data, valor }) {
    return (
        <>
            <hr />
            <Container>
                <td>{paciente}</td>
                <td>{doutor}</td>
                <td>{servico}</td>
                <td>{data} {hora}h</td>
                <td>{valor}</td>
                <td>
                    <button>editar</button>
                </td>
                <td>
                    <button>apagar</button>
                </td>
            </Container>
            <hr />
        </>
    )
}

export default CardAgendamentosAdmin