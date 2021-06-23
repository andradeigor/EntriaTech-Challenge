import {
  HeaderContainer,
  HeaderName,
  NameContant,
  Logo,
  LogoutButtonContainer,
  LogoutButton,
  CardContainer,
  CardImage,
} from "./styled";
import LogoPath from "../../assets/logoWhite.svg";
import LogoutPath from "../../assets/logout.svg";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TinderCard from "react-tinder-card";
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
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
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
      <CardContainer>
        <TinderCard onSwipe={onSwipe} flickOnSwipe={false}>
          <CardImage src="https://i.imgur.com/xyBG0By.jpeg" />
        </TinderCard>
      </CardContainer>
    </>
  );
};

export default HomePage;
