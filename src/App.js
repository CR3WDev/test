import { GlobalStyle } from "./globalStyle";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
