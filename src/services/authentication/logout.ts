import { statePersist } from "config/constants";

const logoutService = () => {
  localStorage.removeItem(statePersist.key);
  localStorage.removeItem("currentUser");
};

export default logoutService;
