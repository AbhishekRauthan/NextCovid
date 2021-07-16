import { FC } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="lg:container lg:mx-auto bg-gray-200">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
