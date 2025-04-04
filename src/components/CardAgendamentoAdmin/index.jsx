import { useState } from "react";
import { Container } from "./styles";
import { Modal } from "./styles";
import { toast } from "react-toastify";

function CardAgendamentosAdmin({ paciente, doutor, servico, data, valor, hora, id }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleClickDelete = async (id) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3010/appointments/delete/${id}/byadmin`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            toast.success("Agendamento apagado com sucesso!");
        } catch (error) {
            toast.error("Erro ao apagar o agendamento:", error);
        } finally {
            setIsModalOpen(false);
        }
    };

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
                    <button className="apagar" onClick={handleOpenModal}>apagar</button>
                </td>
            </Container>
            <hr />
            {isModalOpen && (
                <Modal className="modal">
                    <p>Deseja mesmo apagar essa consulta?</p>
                    <div>
                        <button className="cancelar-btn" onClick={handleCloseModal}>Cancelar</button>
                        <button className="apagar-btn" onClick={() => handleClickDelete(id)}>Apagar</button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default CardAgendamentosAdmin;
