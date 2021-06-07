import dark from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import LoginCard from "./components/LoginCard/index";
const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <LoginCard />
    </ThemeProvider>
  );
};

export default App;
