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
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import LoginRequest from "../../services/LoginRequest";
import { useEffect } from "react";
const LoginCard = () => {
  const history = useHistory();
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().min(6).required(),
  });
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      history.push("/home");
    }
  }, []);
  return (
    <CardContainer>
      <Card>
        <LogoContainer>
          <LogoImage src={LogoPath} />
        </LogoContainer>
        <FormContainer>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              axios
                .post("http://localhost:5000/auth/", values)
                .then((res) => localStorage.setItem("Token", res.data.token))
                .then(() => {
                  history.push("/home");
                });
            }}
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
                  <RegisterButton
                    type="button"
                    onClick={() => history.push("/register")}
                  >
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
