import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { GlobalStyle } from "./styles/styles";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <GlobalStyle />
          <Rotas />
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;
