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
} from "./styled";
import LogoPath from "../../assets/logoWhite.svg";
import LogoutPath from "../../assets/logout.svg";
import LikesPath from "../../assets/likes.svg";
import LikePath from "../../assets/like.svg";
import ClosePath from "../../assets/close.svg";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      console.log(token);
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
          <NameContant>Bem-Vindo, Igor de Andrade</NameContant>
        </HeaderName>
        <LogoutButtonContainer>
          <LogoutButton src={LogoutPath} onClick={handleLogout} />
        </LogoutButtonContainer>
      </HeaderContainer>
      <CardArea>
        <CardConteiner>
          <CardImage src="https://i.imgur.com/UY4ONvu.jpeg"></CardImage>
          <CardName>Capivara Leitora</CardName>
          <CardLikes>
            <CardLikesIcon src={LikesPath} />
            20 Likes
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
    </>
  );
};

export default HomePage;
