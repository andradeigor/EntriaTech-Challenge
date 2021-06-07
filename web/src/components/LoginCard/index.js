import {
  CardContainer,
  Card,
  LogoContainer,
  LogoImage,
  FormContainer,
  Form,
  FormInput,
  ResetPasswordContainer,
  ResetPasswordText,
  ButtonsContainer,
  LoginButton,
  LoginButtonText,
  RegisterButton,
  RegisterButtonText,
} from "./styled";
import LogoPath from "../../assets/logo.svg";
const LoginCard = () => {
  return (
    <CardContainer>
      <Card>
        <LogoContainer>
          <LogoImage src={LogoPath} />
        </LogoContainer>
        <FormContainer>
          <Form>
            <FormInput placeholder="Email..." type="email"></FormInput>
            <FormInput placeholder="Senha..." type="password"></FormInput>
            <ResetPasswordContainer>
              <ResetPasswordText>Esqueceu sua senha?</ResetPasswordText>
            </ResetPasswordContainer>
            <ButtonsContainer>
              <LoginButton>
                <LoginButtonText>Login</LoginButtonText>
              </LoginButton>
              <RegisterButton>
                <RegisterButtonText>Cadastre-se</RegisterButtonText>
              </RegisterButton>
            </ButtonsContainer>
          </Form>
        </FormContainer>
      </Card>
    </CardContainer>
  );
};

export default LoginCard;
