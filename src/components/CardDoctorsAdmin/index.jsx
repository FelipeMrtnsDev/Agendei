import { Container } from "./styles"

function CardDoutoresAdmin({ gender, name, area, started }) {
    return (
        <>
            <Container>
                <td>{gender}</td>
                <td>{name}</td>
                <td>{area}</td>
                <td>{started}h</td>
                <td>
                    <button className="editar">editar</button>
                    <button className="apagar">apagar</button>
                </td>
            </Container>
            <hr />
        </>
    )
}

export default CardDoutoresAdmin