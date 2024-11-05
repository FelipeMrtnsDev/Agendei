import Agende from "../../components/Agende"
import ListCardDoutores from "../../components/ListCardDoutores"
import Container from "./styles"

function Dashboard() {
    return (
        <Container>
            <Agende />
            <ListCardDoutores />
        </Container>
    )
}
export default Dashboard