import {
  CardContainer,
  Card,
  FormContainer,
  Form,
  FormInput,
  ButtonsContainer,
  LoginButton,
  LoginButtonText,
  RegisterButton,
  RegisterButtonText,
} from "./styled";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const RegisterCard = () => {
  const history = useHistory();
  const schema = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "Emails must match"),
    password: yup.string().min(6).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <CardContainer>
      <Card>
        <FormContainer>
          <Formik
            initialValues={{
              name: "",
              email: "",
              confirmEmail: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              axios
                .post("http://localhost:5000/users/", values)
                .then((res) => console.log(res));
            }}
            validationSchema={schema}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <FormInput
                  placeholder="Nome Completo..."
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                ></FormInput>
                <FormInput
                  placeholder="Email..."
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                ></FormInput>
                <FormInput
                  placeholder="Confirme o Email..."
                  type="email"
                  name="confirmEmail"
                  value={values.confirmEmail}
                  onChange={handleChange}
                ></FormInput>

                <FormInput
                  placeholder="Senha..."
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                ></FormInput>
                <FormInput
                  placeholder="Confirme a Senha..."
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                ></FormInput>

                <ButtonsContainer>
                  <LoginButton type="submit">
                    <LoginButtonText>Cadastrar</LoginButtonText>
                  </LoginButton>
                  <RegisterButton
                    type="button"
                    onClick={() => history.goBack()}
                  >
                    <RegisterButtonText>Voltar</RegisterButtonText>
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

export default RegisterCard;
