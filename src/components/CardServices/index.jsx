import { ServicesContainer } from "./styles"

function CardServices({ service, price }) {
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
                <button>Agendar</button>
            </div>
        </ServicesContainer>
    )
}

export default CardServices