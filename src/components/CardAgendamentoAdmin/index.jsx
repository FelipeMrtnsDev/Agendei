import { Container } from "./styles"

function CardAgendamentosAdmin({ paciente, doutor, servico, data, valor, hora }) {
    return (
        <>
            <Container>
                <td>{paciente}</td>
                <td>{doutor}</td>
                <td>{servico}</td>
                <td>{data} {hora}h</td>
                <td>{valor}</td>
                <td>
                    <button className="editar">editar</button>
                    <button className="apagar">apagar</button>
                </td>
            </Container>
            <hr />
        </>
    )
}

export default CardAgendamentosAdmin