import axios from "axios";

const API_URL = "https://lacorniche.rw/api/login.php";

class AuthService {
  // login(username, password) {
  //   return axios
  //     .post(API_URL , 
  //       { username, password })
  //     .then((response) => {
  //       if (response.data) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }
         
  //       return response.data;
  //     });
  // }

  login(username,password){
    return fetch('https://lacorniche.rw/api/login.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({'username':username,
        'password':password})
    })
    .then(res => res.json())
    .then((response) => {
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      return response;
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
