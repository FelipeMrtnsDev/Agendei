import logoBranca from "../../assets/images/logo3 2.png"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useState } from 'react';

function Header({ classe }) {
    const [ativado, setAtivado] = useState(classe)

    const items = [
        {
            label: <a href="https://www.antgroup.com">Meu Perfil</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">Dar cargo</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <a href="https://www.aliyun.com" className="Desconectar" style={{ color: "red" }}>Desconectar</a>,
            key: '3',
        },
    ];

    return (
        <Container>
            <div className="imagem">
                <img src={logoBranca} alt="logo" />
            </div>
            <div className="container-links">
                <div className="links">
                    <Link className="link" to="/admin/appointments">
                        <h2 className={`${ativado === "agendamentos" ? "activated" : ""}`}>Agendamentos</h2>
                    </Link>
                    <Link className="link" to="/admin/doctors">
                        <h2 className={`${ativado === "medicos" ? "activated" : ""}`}>Médicos</h2>
                    </Link>
                </div>
                <div className="perfil">
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <h4>Felipe Martins</h4>
                                <DownOutlined className="seta" />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </Container>
    )
}

export default Header
