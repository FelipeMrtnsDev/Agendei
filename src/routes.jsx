import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import DoctorProfile from "./pages/DoctorProfile";
import MarkAppointment from "./pages/MarkAppointment";
import Home from "./pages/Home";
import DataHora from "./pages/DataHora";

const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/markappointment" element={<MarkAppointment />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctor/:id" element={< DoctorProfile />} />
            <Route path="/markappointment/appointment/:id" element={<DataHora />} />
        </Routes>
    )
}

export default Rotas