import axios from "axios";

async function UserInfo(token) {
  try {
    const request = await axios({
      method: "get",
      url: "http://localhost:5000/users/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return request.data.user;
  } catch (error) {
    localStorage.removeItem("Token");
  }
}

export default UserInfo;
