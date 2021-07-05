import { axios } from "axios";

async function TokenVerification(token) {
  await axios({
    method: "get",
    url: "http://localhost:5000/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => localStorage.removeItem("Token"));
}

export default TokenVerification;
