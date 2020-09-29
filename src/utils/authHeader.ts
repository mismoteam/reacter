import authenticationService from "services/authentication";

const authHeaderUtil = () => {
  // Return authorization header with jwt token.
  const currentUser: any = authenticationService.currentUserValue;

  if (currentUser && currentUser.token) {
    return { Authorization: `Bearer ${currentUser.token}` };
  } else {
    return {};
  }
};

export default authHeaderUtil;
