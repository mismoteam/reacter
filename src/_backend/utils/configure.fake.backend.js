const configureFakeBackendUtil = () => {
  let users = [
    {
      id: 1,
      email: "admin@example.com",
      password: "admin",
      firstName: "Admin",
      lastName: "Manager",
    },
  ];

  const realFetch = window.fetch;

  window.fetch = async function (url, opts) {
    const isLoggedIn = opts.headers["Authorization"] === "Bearer FakeJWTToken";

    return new Promise((resolve, reject) => {
      // Wrap in timeout to simulate a server API call.
      setTimeout(() => {
        // Authenticate - public.
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          const params = JSON.parse(opts.body);
          const user = users.find(
            (user) =>
              user.email === params.email && user.password === params.password
          );
          if (!user) return error("username or password is incorrect");
          return ok({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            token: "FakeJWTToken",
          });
        }

        // Get Users - Secure.
        if (url.endsWith("/users") && opts.method === "GET") {
          if (!isLoggedIn) return unauthorized();
          return ok(users);
        }

        // Pass through any requests not handled above.
        realFetch(url, opts).then((response) => resolve(response));

        /**
         * Private helper functions.
         */

        async function ok(body) {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(body)),
          });
        }

        async function unauthorized() {
          resolve({
            status: 401,
            text: () =>
              Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
          });
        }

        async function error(message) {
          resolve({
            status: 400,
            text: () => Promise.resolve(JSON.stringify({ message })),
          });
        }
      }, 3000);
    });
  };
};

export default configureFakeBackendUtil;
