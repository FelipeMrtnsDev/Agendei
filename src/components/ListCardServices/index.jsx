import { useNavigate, useParams } from "react-router-dom";
import CardServices from "../CardServices"
import { useEffect, useState } from "react";
import { NoService } from "./styles";

function ListCardServices() {
    const [services, setServices] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("authToken");
            fetch(`http://localhost:3010/procedures/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setServices(data)
            })
            .catch((error) => {
                console.error("Algo deu errado!", error)
            })
    }, [id])
    

    return(
        <div>
            <div>
            {services.length > 0 ? (
                services.map((service) => (
                    <CardServices 
                    key={service.id}
                    service={service.name}
                    price={service.price}
                    id={service.id}
                    />
                ))
            ) : (
                <NoService>
                    <h2>Doutor(a) sem serviços disponíveis</h2>
                </NoService>
            )}
            </div>
        </div>
    )
}

export default ListCardServices