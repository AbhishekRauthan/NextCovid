import { FC } from "react";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      
      <main>{children}</main>
    </>
  );
};

export default Layout;
