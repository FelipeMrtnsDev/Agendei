import { Link, useNavigate, useParams } from "react-router-dom";
import { ServicesContainer } from "./styles"

function CardServices({ service, price, id }) {
    const navigate = useNavigate()

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price).replace('.', ',');

    return (
        <ServicesContainer>
            <div className="price">
                <h3>{service}</h3>
                <p>{formattedPrice}</p>
            </div>
            <div className="button-container">
                <Link to={`markappointment/procedure/${id}`} className="button">Agendar</Link>
            </div>
        </ServicesContainer>
    )
}

export default CardServices