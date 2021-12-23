/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import "../styles/styles.css";

import React, { useReducer, useEffect, useMemo, useContext } from "react";
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/react-hooks";
import NProgress from "nprogress";
import Router from "next/router";

import { useApollo } from "../lib/apolloClient";
import { reducer } from "../lib/reducer";

import { SaleorProvider, useAuth } from "@saleor/sdk";
import { ConfigInput } from "@saleor/sdk/lib/types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

// configure saleor platform

import {
  apiUrl,
  sentryDsn,
  // sentrySampleRate,
  // serviceWorkerTimeout,
} from "../constants";
import Loader from "../components/Loader";

library.add(fab, faCoffee);

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

  const authContext = useMemo(
    () => ({
      state,
    }),
    [state]
  );

  const SALEOR_CONFIG: ConfigInput = {
    apiUrl,
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta
          name="page_type"
          content="np-template-header-footer-from-plugin"
        />
        <title>MOSHIONS |</title>
        <link rel="stylesheet" href="/css/nicepage.css" media="screen" />
        <link rel="stylesheet" href="/css/MEN.css" media="screen" />
        <script
          className="u-script"
          type="text/javascript"
          src="/js/jquery.js"
        ></script>
        <script
          className="u-script"
          type="text/javascript"
          src="/js/nicepage.js"
        ></script>
        <link
          id="u-theme-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
        />
        <meta property="og:title" content="MEN" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#478ac9" />
        <link rel="canonical" href="index.html" />
        <meta property="og:url" content="index.html" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <AuthContext.Provider value={authContext}>
          <SaleorProvider config={SALEOR_CONFIG}>
            <Component {...pageProps} />
          </SaleorProvider>
          {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossOrigin="anonymous"></script> */}
        </AuthContext.Provider>
      </ApolloProvider>
    </>
  );
};
export default MoshionsApp;
