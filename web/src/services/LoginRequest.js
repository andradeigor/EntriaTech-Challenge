import { axios } from "axios";
const LoginRequest = async (data) => {
  try {
    console.log(data);
    await axios
      .post("http://localhost:5000/auth/", { data })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};
export default LoginRequest;
