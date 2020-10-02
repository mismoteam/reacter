import { GRAPHQL, IS_SERVER } from "config/constants";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

export function createClient(): ApolloClient<NormalizedCacheObject> {
  // Create the in-memory cache first, which we'll share across Apollo tooling.
  const cache = new InMemoryCache();

  // Create a HTTP client using the GraphQL external playground URI.
  const httpLink = new HttpLink({
    credentials: "same-origin",
    uri: GRAPHQL,
  });

  // If we're in the browser, we'd have received initial state from the
  // server. Restore it, so the Client App can continue with the same data.
  if (!IS_SERVER) {
    cache.restore((window as any).__APOLLO__);
  }

  // Return a new Apollo Client back, with the cache we've just created,
  // and an array of 'links' (Apollo parlance for GraphQL middleware)
  // to tell Apollo how to handle GraphQL requests.
  return new ApolloClient({
    ssrMode: IS_SERVER,
    cache,
    link: ApolloLink.from([
      // General error handler, to log errors back to the console.
      // Replace this in production with whatever makes sense in your
      // environment.
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        }
        if (networkError) {
          console.log(`[GraphQL Network error]: ${networkError}`);
        }
      }),
      httpLink,
    ]),
  });
}
