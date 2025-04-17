import FiltroDoctors from "../../components/FiltroDoctors"
import Header from "../../components/Header"
import ListDoctorsAdmin from "../../components/ListDoctorsAdmin"

function DoctorsAdmin() {
    return(
        <>
            <Header classe="medicos" />
            <FiltroDoctors />
            <ListDoctorsAdmin />
        </>
    )
}

export default DoctorsAdmin