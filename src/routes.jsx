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
import SuccessMessage from "./pages/SuccessMessage";
import MyAppointments from "./pages/MyAppointments";
import Profile from "./pages/Profile";
import AgendamentosAdmin from "./pages/AgendamentosAdmin";
import DoctorsAdmin from "./pages/DoctorsAdmin";

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
          <Route path="/myappointments" element={<MyAppointments />}/>
          <Route path="/profile" element={<Profile />}/>
        </Route>
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/doctor/:id/markappointment/procedure/:pdid" element={<DataHora />} />
          <Route path="/successmessage" element={<SuccessMessage />}/>
          <Route path="/admin/appointments" element={<AgendamentosAdmin />} />
          <Route path="/admin/doctors" element={<DoctorsAdmin />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
