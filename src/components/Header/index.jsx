import logoBranca from "../../assets/images/logo3 2.png"
import { Link, useNavigate } from "react-router-dom"
import { Container } from "./styles"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function Header({ classe }) {
    const navigate = useNavigate()

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
            <div className="imagem" onClick={() => navigate("/home")}>
                <img src={logoBranca} alt="logo" />
            </div>
            <div className="container-links">
                <div className="links">
                    <Link className="link" to="/admin/appointments">
                        <h2 className={`${classe === "agendamentos" ? "activated" : ""}`}>Agendamentos</h2>
                    </Link>
                    <Link className="link" to="/admin/doctors">
                        <h2 className={`${classe === "medicos" ? "activated" : ""}`}>Médicos</h2>
                    </Link>
                </div>
                <div className="perfil">
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <div>
                            <Space>
                                <h4>Felipe Martins</h4>
                                <DownOutlined className="seta" />
                            </Space>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Container>
    );
}

export default Header;
