import type { AppProps } from "next/app";
import { useState } from "react";
import Router from "next/router";
import Loading from "@components/Loading";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));

  return (
    <>
      {loading ? (
        <div className="h-[80vh] grid place-content-center">
          <h1 className="text-2xl capitalize font-source mb-3 text-gray-900">
            Loading...
          </h1>
          <div className="mx-auto">
            <Loading />
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
