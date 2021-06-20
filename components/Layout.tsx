import { FC } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Navbar />
      <main className="lg:max-w-screen-xl">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
