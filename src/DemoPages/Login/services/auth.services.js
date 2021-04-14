import axios from "axios";

const API_URL = "http://127.0.0.1/lacorniche/api/login.php";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL , 
        { username, password })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
               
        return response.data;
      });
  }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
