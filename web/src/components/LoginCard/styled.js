import styled from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 300px;
  height: 500px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
`;
