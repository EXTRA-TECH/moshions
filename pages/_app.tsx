import '../styles/globals.css'
import '../styles/styles.css'

import React, {useReducer, useEffect, useMemo, useContext} from 'react';
import Head from 'next/head'
import Script from 'next/script'
import type { AppProps } from 'next/app';

import {ApolloProvider} from '@apollo/react-hooks';
import NProgress from 'nprogress';
import Router from "next/router";

import {useApollo} from '../lib/apolloClient';
import {reducer} from '../lib/reducer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// configure saleor platform
import { useAuth } from "@saleor/sdk";


library.add(fab, faCoffee)

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
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
          <meta name="theme-color" content="#fff" />
          <title>MOSHIONS |</title>
        </Head>
          <Component {...pageProps} />
          <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></Script>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossOrigin="anonymous"></Script>
      </AuthContext.Provider>
    </ApolloProvider>)
}
export default MoshionsApp
