import dark from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import LoginCard from "./components/LoginCard/index";
import Routes from "./routes";
const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
