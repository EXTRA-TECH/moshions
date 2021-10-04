import { useMemo } from 'react';
import { 
  ApolloClient, 
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

let token: string;

export const createApolloClient = () => {
  const TOKEN = token || null;
  const link = new HttpLink({
    uri: process.env.NEXT_PUBLIC_MOSHIONS_API_URL,
    credentials: 'same-origin',
  });

  const authContext = setContext((_: any, { headers }: any) => ({
    headers: {
      ...headers,
      Authorization: `JWT ${TOKEN}`,
    },
  }));

  const authLink = authContext.concat(link);

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: TOKEN ? authLink : link,
    cache: new InMemoryCache(),
  });
};

const initializeApollo = (data: any = null) => {
  token = data.token;
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (data.initialState) {
    _apolloClient.cache.restore(data.initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  // if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

const useApollo = (data: any) => {
  const store = useMemo(() => initializeApollo(data), [data]);
  return store;
};

export { initializeApollo, useApollo };
