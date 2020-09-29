import { handleResponseUtil } from "utils/handleResponse";

const loginService = async (email: string, password: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch("/users/authenticate", requestOptions)
    .then(handleResponseUtil)
    .then(async (user) => {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return user;
    });
};

export default loginService;
