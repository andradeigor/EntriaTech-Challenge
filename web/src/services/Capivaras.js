import axios from "axios";

async function UserInfo(token) {
  try {
    const request = await axios({
      method: "get",
      url: "http://localhost:5000/capivara/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data;
  } catch (error) {
    localStorage.removeItem("Token");
  }
}

export default UserInfo;
