// Importações necessárias
import { Route, Routes, Navigate } from "react-router-dom"; // Importar Navigate
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import DoctorProfile from "./pages/DoctorProfile";
import MarkAppointment from "./pages/MarkAppointment";
import Home from "./pages/Home";
import DataHora from "./pages/DataHora";
import PrivateRoute from "./PrivateRoute";

const Rotas = () => {
  const token = localStorage.getItem("authToken");
  return (
    <Routes>
      <Route path="/" element={token ? <Navigate to="/login" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/markappointment" element={<MarkAppointment />} />
        </Route>
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/doctor/:id/markappointment/appointment/:id" element={<DataHora />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
