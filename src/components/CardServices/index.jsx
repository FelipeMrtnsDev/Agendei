import { ServicesContainer } from "./styles"

function CardServices({ service, price }) {
    return (
        <ServicesContainer>
            <div className="price">
                <h3>{service}</h3>
                <p>R$ {price}</p>
            </div>
            <div className="button-container">
                <button>Agendar</button>
            </div>
        </ServicesContainer>
    )
}

export default CardServices