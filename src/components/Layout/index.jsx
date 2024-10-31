import BarraLateral from "../BarraLateral"
import { LayoutContainer, Main } from "./styles"
import { Outlet } from "react-router-dom"


function Layout() {
    return(
        <LayoutContainer>
            <BarraLateral />
            <Main>
                <Outlet />
            </Main>
        </LayoutContainer>
    )
}

export default Layout