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
import { Formik } from "formik";
import * as yup from "yup";

const LoginCard = () => {
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().min(6).required(),
  });
  return (
    <CardContainer>
      <Card>
        <LogoContainer>
          <LogoImage src={LogoPath} />
        </LogoContainer>
        <FormContainer>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={schema}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <FormInput
                  placeholder="Email..."
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                ></FormInput>

                <FormInput
                  placeholder="Senha..."
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                ></FormInput>
                <ResetPasswordContainer>
                  <ResetPasswordText>Esqueceu sua senha?</ResetPasswordText>
                </ResetPasswordContainer>
                <ButtonsContainer>
                  <LoginButton type="submit">
                    <LoginButtonText>Login</LoginButtonText>
                  </LoginButton>
                  <RegisterButton>
                    <RegisterButtonText>Cadastre-se</RegisterButtonText>
                  </RegisterButton>
                </ButtonsContainer>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </Card>
    </CardContainer>
  );
};

export default LoginCard;
