import CardDoutores from "../CardDoutores";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListCardDoutores() {
    const [doutores, setDoutores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        fetch("http://localhost:3010/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response);
            return response.clone().json(); 
        })
        .then((data) => {
            console.log(data);
            setDoutores(data);
        })
            .catch((error) => {
                console.error(error);
                if (error.message.includes("Token inválido")) {
                    localStorage.removeItem("authToken");
                    navigate("/login");
                }
            });
    }, [navigate]);

    return (
        <>
            {Array.isArray(doutores) && doutores.map((doutor) => (
                <>
                    <CardDoutores
                        key={doutor.id}
                        id={doutor.id}
                        doutor={doutor.name}
                        sexo={doutor.gender}
                        funcao={doutor.area}
                    />
                </>
            ))}
        </>
    );
}

export default ListCardDoutores;
