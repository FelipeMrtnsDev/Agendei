import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { GlobalStyle } from "./styles/styles";

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App;
