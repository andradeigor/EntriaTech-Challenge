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
  border-radius: 15px;
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: center;
`;
export const LogoContainer = styled.div`
  width: 115px;
  height: 115px;
  pointer-events: none;
  margin-bottom: 40px;
`;
export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const FormContainer = styled.div`
  width: 250px;
  height: 100px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  background: ${(props) => props.theme.colors.backgroundInput};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.backgroundInput};
  padding-left: 10px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  :focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.subtext};
  }
`;
export const ResetPasswordContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 30px;
`;
export const ResetPasswordText = styled.span`
  font-weight: 300;
  font-size: 12px;
`;
export const ButtonsContainer = styled.div`
  width: 250px;
  height: 100px;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-bottom: 15px;
  :active {
    position: relative;
    top: -0.5px;
  }
`;
export const LoginButtonText = styled.span`
  font-size: 18px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.background};
`;
export const RegisterButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.subButton};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  :active {
    position: relative;
    top: -0.5px;
  }
`;
export const RegisterButtonText = styled.span`
  font-size: 18px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.text};
`;
