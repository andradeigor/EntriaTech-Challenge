import {
  HeaderContainer,
  HeaderName,
  NameContant,
  Logo,
  LogoutButtonContainer,
  LogoutButton,
  CardArea,
  CardConteiner,
  CardImage,
  CardName,
  CardLikes,
  CardLikesIcon,
  CardButtonsArea,
  CardButtonDeslike,
  CardButtonIcon,
  ButtonsArea,
  MyButton,
  ButtonText,
  Footer,
  FooterText,
} from "./styled";
import LogoPath from "../../assets/logoWhite.svg";
import LogoutPath from "../../assets/logout.svg";
import LikesPath from "../../assets/likes.svg";
import LikePath from "../../assets/like.svg";
import ClosePath from "../../assets/close.svg";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserInfo from "../../services/UserInfo";
import Capivaras from "../../services/Capivaras";
const HomePage = () => {
  const [userData, SetUserData] = useState({});
  const [capivaras, SetCapivaras] = useState([{}]);
  const history = useHistory();
  useEffect(async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      const data = await UserInfo(token);
      SetUserData(data);
      const capivaras = await Capivaras(token);
      SetCapivaras(capivaras);
    } else {
      history.push("/");
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("Token");
    history.push("/");
  };
  return (
    <>
      <HeaderContainer>
        <HeaderName>
          <Logo src={LogoPath} />
          <NameContant>Bem-Vindo, {userData.name}</NameContant>
        </HeaderName>
        <LogoutButtonContainer>
          <LogoutButton src={LogoutPath} onClick={handleLogout} />
        </LogoutButtonContainer>
      </HeaderContainer>
      <CardArea>
        <CardConteiner>
          <CardImage src={capivaras[0].imageURL}></CardImage>
          <CardName>{capivaras[0].name}</CardName>
          <CardLikes>
            <CardLikesIcon src={LikesPath} />
            {capivaras[0].likes} Likes
          </CardLikes>
        </CardConteiner>
        <CardButtonsArea>
          <CardButtonDeslike>
            <CardButtonIcon src={ClosePath} />
          </CardButtonDeslike>
          <CardButtonDeslike>
            <CardButtonIcon src={LikePath} />
          </CardButtonDeslike>
        </CardButtonsArea>
        <ButtonsArea>
          <MyButton BgColor="#202020">
            <ButtonText TxColor="#FFFFFF">Minhas Capivaras</ButtonText>
          </MyButton>
          <MyButton BgColor="#BB86FC">
            <ButtonText TxColor="#121212">Adicionar</ButtonText>
          </MyButton>
        </ButtonsArea>
      </CardArea>
      <Footer>
        <FooterText>Criado e desenvolvido por @AndradeeeIgor</FooterText>
      </Footer>
    </>
  );
};

export default HomePage;
