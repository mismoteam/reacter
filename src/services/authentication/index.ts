import loginService from "./login";
import logoutService from "./logout";

const authenticationService = {
  login: loginService,
  logout: logoutService,
  currentUser: localStorage.getItem("currentUser"),
  get currentUserValue() {
    return localStorage.getItem("currentUser");
  },
};

export default authenticationService;
