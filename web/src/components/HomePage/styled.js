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

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;

export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`;
