import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { GlobalStyle } from "./styles/styles";
import { AuthProvider } from "./auth/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer />
          <GlobalStyle />
          <Rotas />
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;
