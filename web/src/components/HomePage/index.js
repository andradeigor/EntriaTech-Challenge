import { HeaderContainer, HeaderName, NameContant, Logo } from "./styled";
import LogoPath from "../../assets/logo.svg";
const HomePage = () => {
  return (
    <HeaderContainer>
      <HeaderName>
        <Logo src={LogoPath} />
        <NameContant>Bem-Vindo, Igor de Andrade</NameContant>
      </HeaderName>
    </HeaderContainer>
  );
};

export default HomePage;
