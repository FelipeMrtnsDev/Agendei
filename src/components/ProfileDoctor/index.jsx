import { FaArrowLeftLong } from "react-icons/fa6";
import { Doutor, InfosDoctorContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import medico from '../../assets/images/medico.png'
import medica from '../../assets/images/medica.png'


function ProfileDoctor({titulo}) {
    const navigate = useNavigate()
    const { id, pdid } = useParams()
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [area, setArea] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        fetch(`http://localhost:3010/doctors/${id}`, {
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
            setArea(data.doctor.area)
            setName(data.doctor.name)
            setGender(data.doctor.gender)
        })
        .catch((error) => {
            console.error("Algo deu errado!", error)
        }) 
    }, [id])

    const handleArrowClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (gender === 'homem') {
            setImage(medico);
        } else if (gender === 'mulher') {
            setImage(medica);
        } else {
            setImage('');
        }
    }, [gender]);

    return(
        <InfosDoctorContainer>
            <div className="itens-s-v">
                <div className="voltar">
                    <FaArrowLeftLong className="seta" onClick={handleArrowClick}/>
                </div>
                <div className="servicos">
                    <h1>{titulo}</h1>
                </div>
            </div>
            <Doutor>
                <img src={image} alt={image}  className="image"/>
                <h2>{name}</h2>
                <p>{area}</p>
            </Doutor>
        </InfosDoctorContainer>
    )
}

export default ProfileDoctor