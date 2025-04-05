import { useNavigate, useParams } from "react-router-dom";
import CardServices from "../CardServices";
import { useEffect, useState } from "react";
import { NoService } from "./styles";
import { toast } from "react-toastify";

function ListCardServices() {
  const [services, setServices] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    fetch(`${process.env.REACT_APP_API_URL}/procedures/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        toast.error("Algo deu errado!", error);
      });
  }, [id]);

  return (
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
  );
}

export default ListCardServices;
