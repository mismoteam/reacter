import { authenticationService } from "services";

export const handleResponseUtil = (response: any) => {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        // Auto logout if 401 Unauthorized or 403 Forbidden response returned from API.
        authenticationService.logout();
        document.location.href = "/";
      }

      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }

    return data;
  });
};
