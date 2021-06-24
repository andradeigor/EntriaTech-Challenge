import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: #202020;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderName = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const NameContant = styled.span`
  font-size: 18px;
  font-weight: 300;
  margin-left: 16px;
`;

export const Logo = styled.img`
  height: 60px;
`;
export const LogoutButtonContainer = styled.div`
  display: flex;
  cursor: pointer;
`;
export const LogoutButton = styled.img``;

export const CardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  flex-direction: column;
`;

export const CardConteiner = styled.div`
  position: relative;
`;
export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 30px;
`;

export const CardName = styled.span`
  position: absolute;
  z-index: 1;
  top: 84%;
  left: 5%;
  font-weight: 600;
  font-size: 18px;
`;
export const CardLikes = styled.span`
  position: absolute;
  z-index: 1;
  top: 90%;
  left: 5%;
  font-weight: 400;
  font-size: 12px;
`;

export const CardLikesIcon = styled.img`
  margin-right: 5px;
  margin-top: 5px;
`;

export const CardButtonsArea = styled.div`
  margin-top: 24px;
  width: 350px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
`;

export const CardButtonDeslike = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 3px white;
`;
