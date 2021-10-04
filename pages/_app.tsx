import '../styles/globals.css'
import React, {useReducer, useEffect, useMemo, useContext} from 'react';
import type { AppProps } from 'next/app';

import {ApolloProvider} from '@apollo/react-hooks';
// import NProgress from 'nprogress';
import Router from "next/router";

import {useApollo} from '../lib/apolloClient';
import {reducer} from '../lib/reducer';

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

export const AuthContext = React.createContext({});

const MoshionsApp = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, {
    token: null,
  });

  const apolloClient = useApollo({
    initialState: pageProps.initialApolloState,
    token: state.token,
  });

  const authContext = useMemo(() => ({
    state
  }), [state])

  return (
    <ApolloProvider client={apolloClient}>
      <AuthContext.Provider value={authContext}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </ApolloProvider>)
}
export default MoshionsApp
